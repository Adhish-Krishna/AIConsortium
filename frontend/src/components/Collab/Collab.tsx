import React, { useEffect, useRef, useState } from "react";
import "./collab.css";

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

const Collab = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
    const nodes: Node[] = [];
    const connections: Connection[] = [];
    const nodeCount = Math.min(40, Math.floor((window.innerWidth * window.innerHeight) / 25000));
    
    // Initialize the network
    function initNetwork() {
      console.log("Initializing network");
      // Clear existing arrays
      while(nodes.length > 0) nodes.pop();
      while(connections.length > 0) connections.pop();
      
      // Create random nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
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
    
    // Animation loop
    let animationId: number;
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update node positions
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += Math.cos(node.angle) * node.speed;
        node.y += Math.sin(node.angle) * node.speed;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) {
          node.angle = Math.PI - node.angle;
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.angle = -node.angle;
        }
      }
      
      // Draw connections
      for (let i = 0; i < connections.length; i++) {
        const connection = connections[i];
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];
        
        if (!fromNode || !toNode) continue;
        
        const dx = toNode.x - fromNode.x;
        const dy = toNode.y - fromNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only draw connections within range
        if (distance < 200) {
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.strokeStyle = 'rgba(0, 123, 255, 0.4)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 123, 255, 0.7)';
        ctx.fill();
      }
      
      animationId = requestAnimationFrame(animate);
    }
    
    // Start animation
    animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      console.log("Component unmounting");
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const alumni = [
    { name: "Dr. Sarah Chen", description: "AI Ethics Researcher and former lead of our Ethics Committee. Now working at Google's Responsible AI division." },
    { name: "Prof. Michael Rodriguez", description: "Machine Learning pioneer who helped establish our first neural network research lab. Currently teaching at MIT." },
    { name: "Aria Patel", description: "Former student ambassador who developed our community outreach program. Now an AI Policy Advisor at UNESCO." }
  ];

  const industryPartners = [
    { name: "TechVision AI", description: "Collaborating on research for explainable AI systems and providing internship opportunities for our students." },
    { name: "Neural Dynamics", description: "Funding our research on neural networks and supporting the annual AI Ethics Symposium." },
    { name: "Global AI Initiative", description: "Working with us on AI education programs for underrepresented communities and sharing resources." }
  ];

  return (
    <div className="consortium-page">
      <canvas ref={canvasRef} className="neural-network-bg"></canvas>
      
      <div className="consortium-container">
        <section className="collaborators">
          <h2 className="section-title">Consortium Collaborators</h2>
          
          <div className="section-container">
            <h3 className="section-subtitle">Alumni Network</h3>
            <div className="card-container">
              {alumni.map((person, index) => (
                <div key={index} className="card">
                  <div className="avatar">{person.name.charAt(0)}</div>
                  <h4 className="name blue">{person.name}</h4>
                  <p>{person.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="section-container">
            <h3 className="section-subtitle">Industry Partners</h3>
            <div className="card-container">
              {industryPartners.map((partner, index) => (
                <div key={index} className="card partner-card">
                  <div className="avatar partner-avatar">{partner.name.charAt(0)}</div>
                  <h4 className="name blue">{partner.name}</h4>
                  <p>{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collab;