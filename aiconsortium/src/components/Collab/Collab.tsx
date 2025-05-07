import { useEffect, useRef, useState } from "react";
import "./collab.css";
import { Alumni, inductryDetails } from "../../data/collaborator";
import { alumniDetails } from "../../data/collaborator";
import TeamMember from "../TeamMember/TeamMember";
import IndustryList from "../Industry/IndustryList";

// Define proper types for the nodes and connections
interface Node {
  x: number;
  y: number;
  radius: number;
  speed: number;
  angle: number;
  pulse: number;
}

interface Connection {
  from: number;
  to: number;
}

// Animation configuration for easier customization
interface AnimationConfig {
  nodeColor: string;
  connectionColor: string;
  maxDistance: number;
  pulseSpeed: number;
  maxRadius: number;
  minRadius: number;
}

const Collab = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const animationRef = useRef<number>(0);
  const fpsInterval = useRef<number>(1000 / 60); // Target 60 FPS
  const then = useRef<number>(0);

  // Customizable animation config
  const config: AnimationConfig = {
    nodeColor: 'rgba(0, 123, 255, 0.7)',
    connectionColor: 'rgba(0, 123, 255, 0.4)',
    maxDistance: 200,
    pulseSpeed: 0.02,
    maxRadius: 3,
    minRadius: 1
  };

  useEffect(() => {
    console.log("Component mounted");
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Neural network variables with proper typing
    let nodes: Node[] = [];
    let connections: Connection[] = [];
    let nodeCount = calculateNodeCount(canvas.width, canvas.height);

    // Calculate appropriate node count based on screen size
    function calculateNodeCount(width: number, height: number): number {
      return Math.min(40, Math.floor((width * height) / 25000));
    }

    // Initialize the network
    function initNetwork() {
      console.log("Initializing network");
      // Create new arrays instead of clearing existing ones
      nodes = [];
      connections = [];

      if (!canvas) return; // Make sure canvas is not null
      nodeCount = calculateNodeCount(canvas.width, canvas.height);

      // Create random nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (config.maxRadius - config.minRadius) + config.minRadius,
          speed: Math.random() * 0.3 + 0.05,
          angle: Math.random() * Math.PI * 2,
          pulse: Math.random() * Math.PI * 2,
        });
      }

      // Create connections between nodes
      for (let i = 0; i < nodeCount; i++) {
        const connectionsCount = Math.floor(Math.random() * 3) + 1;
        for (let c = 0; c < connectionsCount; c++) {
          const j = Math.floor(Math.random() * nodeCount);
          if (i !== j) {
            connections.push({
              from: i,
              to: j,
            });
          }
        }
      }

      setIsLoaded(true);
    }

    // Handle resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNetwork(); // Reinitialize network when window resizes
    };

    window.addEventListener('resize', handleResize);

    // Initialize the network
    initNetwork();

    // Animation loop with time-based animation
    function animate(now: number) {
      // Calculate elapsed time
      if (!then.current) then.current = now;
      const elapsed = now - then.current;

      // Only update animation if enough time has passed
      if (elapsed > fpsInterval.current) {
        then.current = now - (elapsed % fpsInterval.current);

        if (!ctx || !canvas) return; // Ensure both ctx and canvas are not null before using them
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update node positions
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          node.x += Math.cos(node.angle) * node.speed;
          node.y += Math.sin(node.angle) * node.speed;

          // Update pulse for radius animation
          node.pulse += config.pulseSpeed;
          if (node.pulse > Math.PI * 2) node.pulse -= Math.PI * 2;

          // Ensure nodes stay within bounds
          if (node.x < 0) {
            node.x = 0;
            node.angle = Math.PI - node.angle;
          } else if (node.x > canvas.width) {
            node.x = canvas.width;
            node.angle = Math.PI - node.angle;
          }

          if (node.y < 0) {
            node.y = 0;
            node.angle = -node.angle;
          } else if (node.y > canvas.height) {
            node.y = canvas.height;
            node.angle = -node.angle;
          }
        }

        // Draw connections
        for (let i = 0; i < connections.length; i++) {
          const connection = connections[i];
          const fromIndex = connection.from;
          const toIndex = connection.to;

          // Ensure indexes are valid
          if (fromIndex >= 0 && fromIndex < nodes.length &&
              toIndex >= 0 && toIndex < nodes.length) {
            const fromNode = nodes[fromIndex];
            const toNode = nodes[toIndex];

            const dx = toNode.x - fromNode.x;
            const dy = toNode.y - fromNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Only draw connections within range
            if (distance < config.maxDistance) {
              // Adjust opacity based on distance
              const opacity = 1 - (distance / config.maxDistance);
              ctx.beginPath();
              ctx.moveTo(fromNode.x, fromNode.y);
              ctx.lineTo(toNode.x, toNode.y);
              ctx.strokeStyle = config.connectionColor.replace(')', `, ${opacity})`).replace('rgba', 'rgba');
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // Draw nodes
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          // Use pulse to create a breathing effect
          const pulseRadius = node.radius + Math.sin(node.pulse) * 0.5;

          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
          ctx.fillStyle = config.nodeColor;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      console.log("Component unmounting");
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Convert Alumni data to TeamMemberProps
  const mapAlumniToTeamMember = (alumni: Alumni) => {
    return {
      image: alumni.image,
      name: alumni.name,
      role: "",
      designation: alumni.designation,
      shortDetails: alumni.shortDetails,
      fullDetails: alumni.fullDetails, // Use long description if available, otherwise use description
      achievements:[],
      contact: {
        email: alumni.contact.email,
        linkedin: alumni.contact.linkedin
      }
    };
  };

  return (
    <div className="collab-consortium-page">
      <canvas ref={canvasRef} className="collab-neural-network-bg" aria-label="Neural network visualization background" role="img"></canvas>

      {!isLoaded && (
        <div className="collab-loading">
          <p>Loading visualization...</p>
        </div>
      )}

      <div className="collab-consortium-container">
        <section className="collab-collaborators">
          <h2 className="collab-section-title">Consortium Collaborators</h2>

          <div className="collab-section-container">
            <h3 className="collab-section-subtitle">Alumni Network</h3>
            <div className="collab-card-container">
              {alumniDetails.map((alumni, index) => (
                <TeamMember
                  key={index}
                  {...mapAlumniToTeamMember(alumni)}
                />
              ))}
            </div>
          </div>

          <div className="collab-section-container">
            <h3 className="collab-section-subtitle">Industry Partners</h3>
            <IndustryList industries={inductryDetails} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collab;