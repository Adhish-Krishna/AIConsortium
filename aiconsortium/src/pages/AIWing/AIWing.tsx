import './AIWing.css';
import AIwing1 from '/public/images/aiwing/Screenshot 2025-05-24 190258.png';
import AIWing2 from '/public/images/aiwing/Screenshot 2025-05-24 190318.png';
import AIWing3 from '/public/images/aiwing/Screenshot 2025-05-24 190335.png';

const AIWing = ()=>{
    return(        <div className="aiwing-main-container">
            <div className="aiwing-hero-section">
                <div className="aiwing-hero-grid">
                    <div className="aiwing-hero-text">
                    <h1 className="aiwing-epiq-title">Aritifical Intelligence Wing</h1>
                    <p className="aiwing-epiq-subtitle">E Block 3rd Floor  & F Block 4th Floor</p>
                    </div>
                </div>
            </div>
            <h1 className="aiwing-text">Exploring Artificial Intelligence Wing (AI Wing)</h1>
            <img src={AIwing1} alt="" className="aiwing-img"/>
            <img src={AIWing2} alt="" className="aiwing-img"/>
            <img src={AIWing3} alt="" className="aiwing-img"/>
        </div>
    )
}

export default AIWing;