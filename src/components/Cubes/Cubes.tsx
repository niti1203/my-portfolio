"use client";
import React, { useCallback, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import './Cubes.css';

interface CubesProps {
  gridSize?: number;
  cubeSize?: number;
  maxAngle?: number;
  radius?: number;
  easing?: string;
  duration?: { enter: number; leave: number };
  cellGap?: number | { row?: number; col?: number };
  borderStyle?: string;
  faceColor?: string;
  shadow?: boolean | string;
  autoAnimate?: boolean;
  rippleOnClick?: boolean;
  rippleColor?: string;
  rippleSpeed?: number;
}

const Cubes: React.FC<CubesProps> = ({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = 'power3.out',
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = '1px solid #fff',
  faceColor = '#120F17',
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = '#fff',
  rippleSpeed = 2
}) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cubesRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef({ x: 0, y: 0 });
  const simTargetRef = useRef({ x: 0, y: 0 });
  const simRAFRef = useRef<number | null>(null);

  const colGap = typeof cellGap === 'number' ? `${cellGap}px` : (cellGap as any)?.col !== undefined ? `${(cellGap as any).col}px` : '5%';
  const rowGap = typeof cellGap === 'number' ? `${cellGap}px` : (cellGap as any)?.row !== undefined ? `${(cellGap as any).row}px` : '5%';

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  // Pre-calculate hole indices for performance
  const holeInfo = useMemo(() => {
    const center = (gridSize - 1) / 2;
    const holeRadius = 1.2;
    return { center, holeRadius };
  }, [gridSize]);

  const isHole = useCallback((r: number, c: number) => {
    return Math.abs(r - holeInfo.center) <= holeInfo.holeRadius && 
           Math.abs(c - holeInfo.center) <= holeInfo.holeRadius;
  }, [holeInfo]);

  const tiltAt = useCallback(
    (rowCenter: number, colCenter: number) => {
      if (!sceneRef.current || cubesRef.current.length === 0) return;
      
      cubesRef.current.forEach(cube => {
        if (!cube) return;
        const r = +(cube.dataset.row || 0);
        const c = +(cube.dataset.col || 0);
        
        // Skip hidden cubes in update logic for efficiency
        if (isHole(r, c)) return;

        const dist = Math.hypot(r - rowCenter, c - colCenter);
        if (dist <= radius) {
          const pct = 1 - dist / radius;
          const angle = pct * maxAngle;
          gsap.to(cube, {
            duration: enterDur,
            ease: easing,
            overwrite: 'auto', // Use auto for better performance with frequent updates
            rotateX: -angle,
            rotateY: angle,
            z: angle * 0.5 // Add a bit of depth for smoothness
          });
        } else if ((cube as any)._gsap?.rotateX !== 0) { // Only reset if moved
          gsap.to(cube, {
            duration: leaveDur,
            ease: 'power3.out',
            overwrite: 'auto',
            rotateX: 0,
            rotateY: 0,
            z: 0
          });
        }
      });
    },
    [radius, maxAngle, enterDur, leaveDur, easing, isHole]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      if (!sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellW;
      const rowCenter = (e.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    cubesRef.current.forEach(cube => {
       if (cube) {
         gsap.to(cube, {
          duration: leaveDur,
          rotateX: 0,
          rotateY: 0,
          z: 0,
          ease: 'power2.out',
          overwrite: true
        });
       }
    });
  }, [leaveDur]);

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      if (!sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      const touch = e.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellW;
      const rowCenter = (touch.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const onClick = useCallback(
    (e: any) => {
      if (!rippleOnClick || !sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      const colHit = Math.floor((clientX - rect.left) / cellW);
      const rowHit = Math.floor((clientY - rect.top) / cellH);

      const spreadDelay = 0.08 / rippleSpeed;
      const animDuration = 0.3 / rippleSpeed;
      const holdTime = 0.4 / rippleSpeed;

      const rings: { [key: number]: HTMLElement[] } = {};
      cubesRef.current.forEach(cube => {
        if (!cube || isHole(+(cube.dataset.row || 0), +(cube.dataset.col || 0))) return;
        const r = +(cube.dataset.row || 0);
        const c = +(cube.dataset.col || 0);
        const dist = Math.hypot(r - rowHit, c - colHit);
        const ring = Math.round(dist);
        if (!rings[ring]) rings[ring] = [];
        rings[ring].push(cube);
      });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach(ring => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap(cube => Array.from(cube.querySelectorAll('.cube-face')));

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: 'power2.out',
            overwrite: 'auto'
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: 'power2.inOut',
            overwrite: 'auto'
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed, isHole]
  );

  useEffect(() => {
    // Cache cube elements once
    if (sceneRef.current) {
      cubesRef.current = Array.from(sceneRef.current.querySelectorAll('.cube')) as HTMLElement[];
    }
  }, [gridSize]);

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;
    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    const speed = 0.015;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        pos.y += (tgt.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);
        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) cancelAnimationFrame(simRAFRef.current);
    };
  }, [autoAnimate, gridSize, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    el.addEventListener('pointermove', onPointerMove as any);
    el.addEventListener('pointerleave', resetAll);
    el.addEventListener('click', onClick);

    el.addEventListener('touchmove', onTouchMove as any, { passive: false });
    return () => {
      el.removeEventListener('pointermove', onPointerMove as any);
      el.removeEventListener('pointerleave', resetAll);
      el.removeEventListener('click', onClick);
      el.removeEventListener('touchmove', onTouchMove as any);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove]);

  const cells = Array.from({ length: gridSize });
  const sceneStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
    columnGap: colGap,
    rowGap: rowGap
  };
  
  const wrapperStyle: React.CSSProperties = {
    // @ts-ignore
    '--cube-face-border': borderStyle,
    '--cube-face-bg': faceColor,
    '--cube-face-shadow': shadow === true ? '0 0 6px rgba(0,0,0,.5)' : shadow || 'none',
  };

  return (
    <div className="default-animation" style={wrapperStyle}>
      <div ref={sceneRef} className="default-animation--scene" style={sceneStyle}>
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div 
              key={`${r}-${c}`} 
              className="cube" 
              data-row={r} 
              data-col={c}
              style={{ visibility: isHole(r, c) ? 'hidden' : 'visible' }}
            >
              <div className="cube-face cube-face--top" />
              <div className="cube-face cube-face--bottom" />
              <div className="cube-face cube-face--left" />
              <div className="cube-face cube-face--right" />
              <div className="cube-face cube-face--front" />
              <div className="cube-face cube-face--back" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;
