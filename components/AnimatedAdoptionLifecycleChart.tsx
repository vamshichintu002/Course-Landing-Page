import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedAdoptionLifecycleChart = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const curveAnimation = useSpring({
    from: { strokeDashoffset: 1000 },
    to: { strokeDashoffset: 0 },
    config: { duration: 2000 },
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const categories = [
    { name: 'Innovators', percentage: '2.5%', x: isMobile ? 35 : 70, color: '#003366' },
    { name: 'Early Adopters', percentage: '13.5%', x: isMobile ? 100 : 200, color: '#0066cc' },
    { name: 'Early Majority', percentage: '34%', x: isMobile ? 200 : 400, color: '#3399ff' },
    { name: 'Late Majority', percentage: '34%', x: isMobile ? 300 : 600, color: '#66b3ff' },
    { name: 'Laggards', percentage: '16%', x: isMobile ? 365 : 730, color: '#b3d9ff' },
  ];

  return (
    <div className="relative w-full h-[300px] md:h-[400px] bg-gray-100 overflow-hidden">
      <svg viewBox={isMobile ? "0 0 400 400" : "0 0 800 400"} className="w-full h-full">
        <animated.path
          d={isMobile ? "M25 350 Q 100 350, 125 200 T 200 50 T 275 200 T 375 350" : "M50 350 Q 200 350, 250 200 T 400 50 T 550 200 T 750 350"}
          fill="none"
          stroke="#0066cc"
          strokeWidth={isMobile ? 2 : 3}
          style={{
            ...curveAnimation,
            strokeDasharray: 1000,
          }}
        />

        {categories.map((category, index) => (
          <animated.g key={category.name} style={fadeIn}>
            <path
              d={isMobile ? 
                `M25 350 Q 100 350, 125 200 T ${category.x} ${index === 2 ? 50 : 350}` :
                `M50 350 Q 200 350, 250 200 T ${category.x} ${index === 2 ? 50 : 350}`
              }
              fill={category.color}
              opacity={hoveredCategory === category.name ? 0.9 : 0.7}
            />
            <text
              x={category.x}
              y={380}
              textAnchor="middle"
              fontSize={isMobile ? 10 : 14}
              fill="#333333"
            >
              {category.name}
            </text>
            <text
              x={category.x}
              y={340}
              textAnchor="middle"
              fontSize={isMobile ? 10 : 14}
              fill="#ffffff"
              fontWeight="bold"
            >
              {category.percentage}
            </text>
            <rect
              x={category.x - (isMobile ? 25 : 50)}
              y={0}
              width={isMobile ? 50 : 100}
              height={400}
              fill="transparent"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            />
          </animated.g>
        ))}

        <animated.text
          x={isMobile ? "200" : "400"}
          y="30"
          textAnchor="middle"
          fontSize={isMobile ? 18 : 24}
          fill="#333333"
          fontWeight="bold"
          style={fadeIn}
        >
          Adoption Lifecycle
        </animated.text>
      </svg>

      <animated.div
        style={{
          ...fadeIn,
          position: 'absolute',
          top: isMobile ? '15%' : '20%',
          left: isMobile ? '15%' : '25%',
          backgroundColor: '#0066cc',
          color: 'white',
          padding: isMobile ? '5px' : '10px',
          borderRadius: '5px',
          fontSize: isMobile ? '12px' : '16px',
        }}
      >
        You&apos;re Here!
      </animated.div>
    </div>
  );
};

export default AnimatedAdoptionLifecycleChart;