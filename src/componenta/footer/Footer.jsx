import "./Footer.css"
import x from '../../assets/icons/You tube.svg';
import y from '../../assets/icons/FB.svg';
import call from '../../assets/icons/call.svg';
import f from '../../assets/icons/FB.svg';
import sms from '../../assets/icons/sms.svg';
import map from '../../assets/icons/map.svg'
const Footer = () => {
  return (
    <div style={{background: '#043A3A', }}>
      <div className="container">
        <div className="alll" style={{padding: '80px 20px'}}>
          <div style={{color:'white'}}>
            <h2>Ever <span style={{color: 'green'}}>Green</span></h2>
            <p>Lorem ipsum dolor sit amet, <br />brconsectetur adipiscing elit. <br /> 
            Morbi sit amet neque tortor. </p>
            <div className="messrngers">
              <img src={y} alt="" />
              <img src={f} alt="" />
              <img src={x} alt="" />
            </div>
          </div>

          <div style={{color:'white'}}>
            <h3>Quick Links</h3>
            <li><a href="">About us</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Blog</a></li>
          </div>
          <div style={{color:'white'}}>
            <h3>Contact Us</h3>
            <li><img src={call} alt="" />hello@website.com</li>
            <li><img src={map} alt="" />Riverside Building, County Hall, <br />London SE1 7PB, United Kingdom</li>
            <li><img src={sms} alt="" />451-484-5939</li>
          </div>

          <div style={{color:'white'}}>
            <h3>Nesletter</h3>
            <label htmlFor="">
            <input type="text" placeholder="Enter your email" />
            <button style={{borderRadius: '0px 20px 20px 0px'}}>Subscribe</button>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer