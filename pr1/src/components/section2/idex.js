import ok from '../img/features1.jpg'
import { FaPalette } from "react-icons/fa";

function Section2() {
    return (
    <>
      <div className="section2">
        <div className="container">
            <div className="wrap">
                <div className="box1">
                    <img src={ok}/>
                </div>
                <div className="box2">
                    <span className="core">Core Features</span>
                    <div className="title1">Best Business Software Solution</div>
                    <div className="icon">
                        <div className="i">
                        <FaPalette />
                            <span>Design</span>
                        </div>
                        <div className="i">
                        <FaPalette />
                            <span>Usage</span>
                        </div>
                        <div className="i">
                        <FaPalette />
                            <span>Testing</span>
                        </div>
                    </div>
                    <div className="text">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan porttitor egestas fermentum nulla.</span>
                    </div>
                    <a href="/" className="butom">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        
      
    </>
    );
  }
  
  export default Section2;
  