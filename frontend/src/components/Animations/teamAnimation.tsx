import React, { useEffect, useRef } from 'react';

interface OrgChartAnimationProps {
  levels: number;
}

const OrgChartAnimation: React.FC<OrgChartAnimationProps> = ({ levels }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Define the connection points for each level (these will be dynamically calculated)
    let connectionPoints: {x: number, y: number, level: number}[] = [];

    // Define colors
    const primaryColor = '#2563eb';
    const secondaryColor = '#0ea5e9';

    // Animation variables
    let animTime = 0;

    // Create animation for data flow
    const animate = (timestamp: number) => {
      animTime = timestamp / 1000; // Convert to seconds

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Re-calculate connection points based on the DOM position of the boxes
      updateConnectionPoints();

      // Draw connections
      drawConnections();
      
      // Request next frame
      requestAnimationFrame(animate);
    };

    // Function to update connection points based on DOM positions
    const updateConnectionPoints = () => {
      connectionPoints = [];
      
      // Get all the box elements
      const boxes = document.querySelectorAll('.box');
      
      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        
        // Get level info from the parent element's class
        const levelElement = box.closest('.level');
        if (!levelElement) return;
        
        const levelClass = levelElement.className;
        let level = 0;
        
        if (levelClass.includes('principal-level')) level = 0;
        else if (levelClass.includes('director-level')) level = 1;
        else if (levelClass.includes('program-level')) level = 2;
        else if (levelClass.includes('managers-level')) level = 3;
        else if (levelClass.includes('advisors-level')) level = 4;
        else if (levelClass.includes('student-level')) level = 5;
        
        // Calculate position relative to canvas
        const x = rect.left + rect.width / 2 - canvasRect.left;
        const y = rect.bottom - canvasRect.top;
        
        connectionPoints.push({ x, y, level });
      });
    };

    // Draw neural network-like connections between levels
    const drawConnections = () => {
      if (connectionPoints.length === 0) return;
      
      // Group connection points by level
      const pointsByLevel = connectionPoints.reduce((acc: {[key: number]: {x: number, y: number}[]}, point) => {
        if (!acc[point.level]) acc[point.level] = [];
        acc[point.level].push({x: point.x, y: point.y});
        return acc;
      }, {});
      
      // Draw connections between each level
      for (let level = 0; level < Object.keys(pointsByLevel).length - 1; level++) {
        const currentLevelPoints = pointsByLevel[level] || [];
        const nextLevelPoints = pointsByLevel[level + 1] || [];
        
        currentLevelPoints.forEach(sourcePoint => {
          nextLevelPoints.forEach(targetPoint => {
            // Create weighted connection
            const connectionStrength = Math.sin(sourcePoint.x * 0.01 + targetPoint.x * 0.01 + animTime * 0.5) * 0.5 + 0.5;
            
            if (connectionStrength > 0.3) {
              // Create gradient for connections
              const gradient = ctx.createLinearGradient(sourcePoint.x, sourcePoint.y, targetPoint.x, targetPoint.y);
              gradient.addColorStop(0, primaryColor);
              gradient.addColorStop(1, secondaryColor);
              
              // Draw connection line
              ctx.beginPath();
              ctx.moveTo(sourcePoint.x, sourcePoint.y);
              ctx.lineTo(targetPoint.x, targetPoint.y);
              ctx.strokeStyle = gradient;
              ctx.globalAlpha = connectionStrength * 0.4;
              ctx.lineWidth = connectionStrength * 1.5;
              ctx.stroke();
              
              // Draw animated data packets flowing through the network
              const packetCount = Math.floor(connectionStrength * 2);
              
              for (let p = 0; p < packetCount; p++) {
                // Calculate packet position along the connection
                const offset = (animTime * (0.2 + connectionStrength * 0.3) + p * 0.4) % 1;
                const packetX = sourcePoint.x + (targetPoint.x - sourcePoint.x) * offset;
                const packetY = sourcePoint.y + (targetPoint.y - sourcePoint.y) * offset;
                
                // Draw packet
                ctx.beginPath();
                ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
                ctx.fillStyle = offset < 0.5 ? secondaryColor : primaryColor;
                ctx.globalAlpha = 0.7;
                ctx.fill();
              }
            }
          });
        });
      }
    };

    // Start animation
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [levels]);

  return (
    <canvas
      ref={canvasRef}
      className="org-chart-animation"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default OrgChartAnimation;