import './DirectorsDesk.css';
import Karpagam from '/images/directorImage/Karpagam.jpg?url';

const DirectorsDesk = ()=>{
    return(
        <>
            <div className="director-container">
                <div className="director-subcontainer">
                    <h1 className="director-title-text">Director's Desk – AI Consortium, PSG College of Technology</h1>
                    <div className="director-content-container">
                        <div className="director-img-container">
                            <img src={Karpagam} alt="Dr.G.R.Karpagam" className='director-image'/>
                            <h2 className="director-text" >Dr.G.R.Karpagam</h2>
                            <h3 className='director-designation-text'>Professor</h3>
                            <h3 className="director-department-text" >CSE</h3>
                        </div>
                        <div className="director-about">
                            <h3>Shaping the Future of AI with Ethics, Innovation, and Impact</h3>

                            <p>Welcome to the AI Consortium at PSG College of Technology!</p>

                            <p>Artificial Intelligence is no longer a futuristic concept—it is the driving force behind groundbreaking transformations across industries. At PSG CollegeofTechnology, we recognize the immense potential of AI and are committed to fostering a collaborative ecosystem where academia, industry, and research converge to drive ethical, innovative, and impactful AI solutions.</p>

                            <p>Our vision is to position PSG as a global hub for AI excellence, integrating intelligence with responsibility. The mission of the AI Consortium is to cultivate a multidisciplinary AI culture that advances research, enhances industry collaboration, and nurtures future-ready professionals.</p>
                            <br/>
                            <h3>Key Focus Areas</h3>
                            <br/>
                            <p><strong>Cutting-edge Research & Development:</strong> Advancing AI through novel techniques in Vision, NLP, Generative AI, Federated Learning, and Edge AI by applying Agentic AI, Large Language Models (LLMs), Autonomous Agents, and Relaxant Technologies to enhance adaptability, decision-making, and human-AI collaboration.</p>
                            <br/>
                            <p><strong>Ethical & Explainable AI:</strong> Pioneering responsible AI practices with transparency, fairness, and interpretability at the core.</p>
                            <br/>
                            <p><strong>AI for Healthcare & Society:</strong> Leveraging AI to drive transformative solutions that improve quality of life, accessibility, and well-being.</p>
                            <br/>
                            <p><strong>Industrial & Enterprise AI:</strong> Bridging AI research with real-world applications to enhance automation, efficiency, and innovation.</p>
                            <br/>
                            <h3>Flagship Initiatives & Events</h3>

                            <p>Our consortium proudly organizes EPIQ AI 2025: Empowering Ethics, Progress, Innovation & Quality in AI, an International Conference on AI Spectrum scheduled for December 22-24, 2025. This event will bring together global AI leaders, researchers, and practitioners to discuss cutting-edge developments shaping the future of AI.</p>

                            <p>The AI revolution is here, and we invite you to be part of this transformative journey. Together, let's push the boundaries of AI and create a future where intelligence is empowering, ethical, and inclusive.</p>
                            <br/>
                            <h3>Join Us!</h3>
                            <br/>
                            <p>Whether you are a student, researcher, or industry partner, the AI Consortium at PSG College of Technology is your platform for innovation. Let's collaborate to shape the AI-driven world of tomorrow!</p>
                            <br/>
                            <p><em>Dr. G.R.Karpagam<br/>
                            Director, AI Consortium<br/>
                            PSG College of Technology</em></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DirectorsDesk;