import './Intro.css';
import './Loader.css';
import Loader from './Loader';
import './Loader.css'
import {useState} from 'react'
import introBg from '../../assets/images/intro.png'
import Carousel from './corusel'
import { useTypewriter, } from 'react-simple-typewriter';
 const Intro = () => {

  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  const numbers = Array.from({ length: 500 }, (_, i) => (i + 1).toString());

  const [text] = useTypewriter({
    words: numbers,
    loop: {},
    typeSpeed: 170,
    deleteSpeed: 100,
    delaySpeed: 100,
  });

    
  
  return (
    <div>
      <Loader isVisible={loading} onLoadComplete={handleLoadComplete} />
      {!loading && (
        <div className="container">
          <div className="wrapper">
            <img className="intro" src={introBg} alt="Intro Background" />
            <div className="info">
              <h1>Crafting <span style={{ color: 'green' }}>Green</span> Masterpieces</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit <br />egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at <br />felis vivamus hendrerit suscipit egestas consectetur adipiscing elit.</p>
              <div className="btns">
                <button style={{ width: '150px', height: '55px' }}>Get Started</button>
                <button style={{ background: '#043A3A', width: '150px', height: '55px' }}>Learn More</button>
              </div>
              <div className="avatars">
                <Carousel />
                <h3><span style={{color:'green', fontSize: '40px'}}>+</span> {text} <br /><span>Joined in already</span></h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;