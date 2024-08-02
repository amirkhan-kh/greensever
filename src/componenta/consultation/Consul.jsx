import "./Consul.css";
const Consul = () => {
  return (
    <div className="container" style={{padding: '80px 0'}}>
      <div className="all">
        <div className="left">
          <h2>Fill the Form to <span style={{color: 'green'}}>get a free consultation</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit <br />suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat  <br />betincidunt eget at felis vivamus hendrerit.</p>
        </div>
        <div className="right">
          <form className="formm">
            <label>
              <input type="text" placeholder="Full name"/>
              <input type="email" placeholder="Email" />
            </label>
            <label>
              <input type="number" placeholder="Phone number" />
              <input type="text" placeholder="Service" />
            </label>
            <textarea name="" id="" placeholder="Message"></textarea>
            <button style={{width: '100%'}}>Get Started</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Consul