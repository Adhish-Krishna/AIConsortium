import React, { useEffect, useRef, useState } from 'react';

const NeuralNetworkAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check if mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      checkIfMobile();
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Define node structure
    interface Node {
      x: number;
      y: number;
      radius: number;
      layer: number;
      index: number;
      activity: number;
      lastActivated: number;
      heartbeatPhase: number;
    }

    // Define layers structure based on screen size
    const getLayers = () => {
      if (isMobile) {
        return [
          { id: 0, name: 'input', nodeCount: 4 },
          { id: 1, name: 'hidden1', nodeCount: 6 },
          { id: 2, name: 'output', nodeCount: 3 }
        ];
      } else {
        return [
          { id: 0, name: 'input', nodeCount: 6 },
          { id: 1, name: 'hidden1', nodeCount: 10 },
          { id: 2, name: 'hidden2', nodeCount: 8 },
          { id: 3, name: 'output', nodeCount: 4 }
        ];
      }
    };

    const layers = getLayers();

    // Calculate positions - responsive margins
    const getMargins = () => {
      const isLandscape = window.innerWidth > window.innerHeight;

      if (isMobile) {
        return {
          left: canvas.width * (isLandscape ? 0.15 : 0.1),
          right: canvas.width * (isLandscape ? 0.15 : 0.1),
          top: canvas.height * 0.15,
          bottom: canvas.height * 0.15
        };
      } else {
        return {
          left: canvas.width * 0.2,
          right: canvas.width * 0.2,
          top: canvas.height * 0.18,
          bottom: canvas.height * 0.18
        };
      }
    };

    const margin = getMargins();
    const usableWidth = canvas.width - margin.left - margin.right;
    const usableHeight = canvas.height - margin.top - margin.bottom;
    const layerSpacing = usableWidth / (layers.length - 1);

    // Nodes array
    const nodes: Node[] = [];

    // Get appropriate node size based on screen
    const getNodeRadius = () => {
      const baseSize = isMobile ? 4.5 : 6;
      // Scale down for very small screens
      if (window.innerWidth < 360) return baseSize * 0.8;
      return baseSize;
    };

    // Create nodes organized in layers
    layers.forEach((layer, layerIdx) => {
      const nodeSpacing = usableHeight / (layer.nodeCount + 1);

      for (let i = 0; i < layer.nodeCount; i++) {
        nodes.push({
          x: margin.left + layerIdx * layerSpacing,
          y: margin.top + (i + 1) * nodeSpacing,
          radius: getNodeRadius(),
          layer: layerIdx,
          index: i,
          activity: 0.1 + Math.random() * 0.2,
          lastActivated: -9999,
          heartbeatPhase: Math.random() * Math.PI * 2 // Random starting phase
        });
      }
    });

    // Colors - using slightly more subtle colors
    const primaryColor = '#2563eb';
    const secondaryColor = '#0ea5e9';
    const tertiaryColor = '#7dd3fc';
    const highlightColor = '#ffffff';

    // Animation variables
    let animTime = 0;
    let lastFrameTime = 0;
    let fps = 60;

    // Function to calculate heartbeat animation value
    const heartbeat = (time: number, lastActivated: number, scale: number = 1): number => {
      const elapsed = time - lastActivated;
      if (elapsed > 1.0) return 0; // No heartbeat if not recently activated

      // Two rapid beats followed by a pause
      const t = elapsed * 3;
      if (t < 0.2) {
        return Math.sin(t * Math.PI / 0.2) * scale;
      } else if (t < 0.4) {
        return Math.sin((t - 0.3) * Math.PI / 0.1) * scale * 0.6;
      } else {
        return 0;
      }
    };

    // Animation function
    const animate = (timestamp: number) => {
      // Calculate FPS for mobile optimization
      const deltaTime = timestamp - lastFrameTime;
      lastFrameTime = timestamp;
      fps = Math.round(1000 / (deltaTime || 16.67)); // 16.67ms = 60fps

      // Reduce frame rate on mobile or low FPS situations
      if ((isMobile && fps < 30) || fps < 20) {
        if (timestamp % 2 !== 0) { // Skip every other frame
          requestAnimationFrame(animate);
          return;
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animTime = timestamp / 1000; // convert to seconds

      // Set global opacity for everything to make it less distracting
      ctx.globalAlpha = 1;

      // First draw connections between layers
      for (let layerIdx = 0; layerIdx < layers.length - 1; layerIdx++) {
        const currentLayerNodes = nodes.filter(node => node.layer === layerIdx);
        const nextLayerNodes = nodes.filter(node => node.layer === layerIdx + 1);

        currentLayerNodes.forEach(sourceNode => {
          nextLayerNodes.forEach(targetNode => {
            // Create weighted connection (not all connections are equally strong)
            const connectionStrength = Math.sin(sourceNode.index * 0.5 + targetNode.index * 0.3 + animTime * 0.2) * 0.5 + 0.5;

            // Higher threshold for mobile to reduce number of connections drawn
            const connectionThreshold = isMobile ? 0.4 : 0.3;

            if (connectionStrength > connectionThreshold) {
              // Create gradient for connections
              const gradient = ctx.createLinearGradient(sourceNode.x, sourceNode.y, targetNode.x, targetNode.y);
              gradient.addColorStop(0, primaryColor);
              gradient.addColorStop(1, secondaryColor);

              // Draw connection line
              ctx.beginPath();
              ctx.moveTo(sourceNode.x, sourceNode.y);
              ctx.lineTo(targetNode.x, targetNode.y);
              ctx.strokeStyle = gradient;
              ctx.globalAlpha = connectionStrength * 0.5; // Increased from 0.35 to 0.5
              ctx.lineWidth = connectionStrength * (isMobile ? 1.5 : 2.0); // Increased line thickness
              ctx.stroke();
              ctx.closePath();

              // Determine if we should send a neural impulse (data packet)
              // Reduce frequency of impulses on mobile
              const impulseThreshold = isMobile ? 0.003 : 0.01;
              if (connectionStrength > 0.7 && Math.random() < impulseThreshold) {
                // Activate the target node
                targetNode.lastActivated = animTime;

                // Create a data pulse effect
                const pulseX = targetNode.x;
                const pulseY = targetNode.y;
                ctx.beginPath();
                ctx.arc(pulseX, pulseY, targetNode.radius * 2, 0, Math.PI * 2);
                ctx.fillStyle = tertiaryColor;
                ctx.globalAlpha = 0.3;
                ctx.fill();
                ctx.closePath();
              }

              // Draw animated data packets flowing through the network
              // Reduce number of packets on mobile
              const packetCount = Math.floor(connectionStrength * (isMobile ? 1 : 1.5));

              for (let p = 0; p < packetCount; p++) {
                // Calculate packet position along the connection
                const offset = (animTime * (0.1 + connectionStrength * 0.3) + p * 0.4) % 1;
                const packetX = sourceNode.x + (targetNode.x - sourceNode.x) * offset;
                const packetY = sourceNode.y + (targetNode.y - sourceNode.y) * offset;

                // Draw packet
                ctx.beginPath();
                ctx.arc(packetX, packetY, isMobile ? 2.2 : 2.8, 0, Math.PI * 2); // Increased packet size
                ctx.fillStyle = offset < 0.5 ? secondaryColor : tertiaryColor;
                ctx.globalAlpha = 0.8; // Increased from 0.6 to 0.8
                ctx.fill();
                ctx.closePath();
              }
            }
          });
        });
      }

      // Then draw nodes (so they appear on top of connections)
      nodes.forEach((node) => {
        // Update node activity based on time and position
        node.activity = 0.3 + 0.7 * Math.sin(node.layer * 0.5 + node.index * 0.3 + animTime * 0.2) * 0.5 + 0.5;

        // Random activation for demonstration - less frequent on mobile
        const activationChance = isMobile ? 0.0005 : 0.001;
        if (Math.random() < activationChance) {
          node.lastActivated = animTime;
        }

        // Calculate heartbeat effect
        const heartbeatEffect = heartbeat(animTime, node.lastActivated, isMobile ? 1.3 : 1.5);
        const nodeSize = node.radius + heartbeatEffect;

        // Draw active circle (representing neuron activity)
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize + 2, 0, Math.PI * 2);
        ctx.fillStyle = secondaryColor;
        ctx.globalAlpha = node.activity * 0.35; // Increased from 0.2 to 0.35
        ctx.fill();
        ctx.closePath();

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fillStyle = animTime - node.lastActivated < 0.5 ? tertiaryColor : primaryColor;
        ctx.globalAlpha = 0.85; // Increased from 0.7 to 0.85
        ctx.fill();
        ctx.closePath();

        // Add highlight to node
        ctx.beginPath();
        ctx.arc(node.x - nodeSize * 0.3, node.y - nodeSize * 0.3, nodeSize * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = highlightColor;
        ctx.globalAlpha = 0.6; // Increased from 0.4 to 0.6
        ctx.fill();
        ctx.closePath();
      });

      // Adjust font size based on screen size
      const fontSize = isMobile ? 8 : 10;
      ctx.font = `${fontSize}px sans-serif`;
      ctx.fillStyle = primaryColor;
      ctx.globalAlpha = 0.5;
      ctx.textAlign = 'center';

      // Draw layer labels at the bottom - simplified for mobile
      if (!isMobile || window.innerWidth > 480) {
        layers.forEach((layer, i) => {
          const x = margin.left + i * layerSpacing;
          let labelText = '';

          if (isMobile) {
            // Simplified labels for mobile
            switch(layer.name) {
              case 'input':
                labelText = 'Input';
                break;
              case 'hidden1':
              case 'hidden2':
                labelText = 'Hidden';
                break;
              case 'output':
                labelText = 'Output';
                break;
            }
          } else {
            switch(layer.name) {
              case 'input':
                labelText = 'Input Layer';
                break;
              case 'hidden1':
                labelText = 'Hidden Layer 1';
                break;
              case 'hidden2':
                labelText = 'Hidden Layer 2';
                break;
              case 'output':
                labelText = 'Output Layer';
                break;
            }
          }

          ctx.fillText(labelText, x, canvas.height - margin.bottom * 0.3);
        });
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity: 0.85, // Increased from 0.6 to 0.85
      }}
    />
  );
};

export default NeuralNetworkAnimation;
