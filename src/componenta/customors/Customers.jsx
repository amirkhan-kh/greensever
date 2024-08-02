import "./Customers.css";
import customers from '../db/customer.js';
console.log(customers);
const Customers = () => {
  return (
      <div className="container" style={{display: 'flex', flexDirection: 'column'}}>
          <div className="titles">
          <h2>Listen to what our <span style={{color:'green'}}>customers say</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc <br />eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit.</p>
        </div>
          <div className="gridCustomers">
            {
              customers.map((item, index)=>{
                return(
                  <div key={index} className="kardd">
                  <div className="topAvatar">
                    <img src={item.avatarImg} alt="" />
                    <div className="name">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <p>{item.description}</p>
                  <div></div>
                </div>
                )
              })
            }
        </div>
        </div>
  )
}

export default Customers