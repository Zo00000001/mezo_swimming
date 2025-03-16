import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='MezoSwimming'>
      {/* Section 1 */}
      <div className="section">
        <div className="content">
          <h1>If you need to swim well, <br />
          <span>YOU need this</span></h1>
          
          <div className="logo">
            <button>LEARN MORE</button>
            <img src="src\assets\logo.jpg" alt="" />
          </div>
        </div>
          <div className="bg">
            <img src="src\assets\bg.png" alt="Swimming pool" />
          </div>
      </div>

      {/* Section 2 */}
      <div className="mian-content bg-blue">
        <div className='content'>
          <img src="src/assets/swim.png" alt="Instructor" />
        </div>
        <div className='content'>
          <p>
            "My passion has always been swimming. The place where I can feel good and offer my best. 
            I hope to teach many others to share the same feeling with me."
          </p>
        </div>
      </div>

      {/* Section 3 - Planning Time */}
      <div className="mian-content bg-white">
        <div className='content'>
          <p>
          <span>Planning Time</span> <br/>
            For each person, there is a training plan suitable for their goal. That way, you can have 
            a safe and fun development during classes. Plans can be weekly or monthly.
          </p>
        </div>
        <div className='content'>
          <img src="src/assets/plan.png" alt="Training plan" />
        </div>
      </div>

      {/* Section 4 - Great Techniques */}
      <div className="mian-content bg-white">
        <div className='content'>
          <img src="src/assets/goswim.png" alt="Swimming techniques" />
        </div>
        <div className='content'>
          
          <p>
            <span>Great Techniques</span> <br />
            For better performance and to take care of your health, it is necessary to practice the sport correctly. 
            We have an efficient methodology for all ages that will help you swim better.
          </p>
        </div>
      </div>

      {/* Section 5 - Getting Started */}
      <div className="section5 bg-blue">
        <div className='bg-blue s5'>
          
          <img src="src/assets/logo.jpg" alt="" />
          <button>GETTING STARTED</button>
        </div>
      </div>

      {/* Section 6 - Footer */}
      <div className='footer'>
        <div>
          
          <ul>
            <h4>SOCIAL MEDIA</h4>
            <li><a href="#">Blog</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Video Testimonials</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
          </ul>
        </div>
        <div>
          
          <ul>
            <h4>MORE</h4>
            <li><a href="#">Community</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Shop Online Store</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </div>
        <div>
          
          <ul>
            <h4>CONTACT</h4>
            <li><a href="#">Help</a></li>
            <li><a href="#">Private Facebook Group</a></li>
            <li><a href="#">Shop Online Store</a></li>
          </ul>
          <p>&copy; 2025 Mezo Swimming</p>
        </div>
      </div>
    </div>
  );
}

export default App;
