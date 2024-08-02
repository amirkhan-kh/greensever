import './Land.css';
import LandScope from '../../assets/images/landscape.svg';
import icon from '../../assets/icons/Icon.svg';
import us from '../../assets/images/choseUs.jpg'
const Land = () => {
  return (
    <section>
    <div className="container">
      <div className="land">
        <h2>Landscape Design</h2>
        <h2 style={{ color: 'green' }}>Beyond Expectations</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc <br /> eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit.</p>
        <div className="img">
          <img src={LandScope} alt="Landscape" />
          <div className="bottom">
            <div className="card">
              <h3>13+</h3>
              <p>Years Experience</p>
            </div>
            <span></span>
            <div className="card">
              <h3>13+</h3>
              <p>Product</p>
            </div>
            <span></span>
            <div className="card">
              <h3>7K</h3>
              <p>Satisfied Clients</p>
            </div>
            <span></span>
            <div className="card">
              <h3>124+</h3>
              <p>Local Team Members</p>
            </div>
          </div>
        </div>
        <div className="us">
          <div className="left">
            <div className="topp">
              <h3>Why Choose <span style={{color: 'green', fontWeight: '600'}}>Us?</span>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget auctor.</p>
            </div>
            <div className="top">
              <img src={icon} alt="Licensed and Insured" />
              <div className="right">
                <h3>Licensed and Insured</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, no efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit  porttitor. Vestibulum ligula sapien, cursus sed consectetur</p>
              </div>
            </div>
            <div className="top">
              <img src={icon} alt="Licensed and Insured" />
              <div className="right">
                <h3>Licensed and Insured</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur</p>
              </div>
            </div>
            <div className="top">
              <img src={icon} alt="Licensed and Insured" />
              <div className="right">
                <h3>Licensed and Insured</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur</p>
              </div>
            </div>
          </div>
          <div className="rigght">
            <img src={us} alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Land;
