import './Service.css';
import service from '../db/db.js';
const Service = () => {
  return (
    <div style={{marginTop: '-100px'}}>
      <div className="container">
        <h2 style={{fontSize: '50px', marginBottom: '20px', fontWeight: '600', textAlign: 'center'}}>Our <span style={{fontSize: '50px', fontWeight: '600', textAlign: 'center', color: 'green'}}>Service</span></h2>
        <p style={{textAlign: 'center', marginBottom: '70px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc <br />eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit.</p>
        <div className="grid">
        {
          service.map((item, index) => {
              return(
                <div key={index} className="card">
                <img src={item.img} alt="" />
                <div className="bio">
                  <h2>{item.title}</h2>
                <p>{item.description}</p>
                </div>
              </div>
              )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Service