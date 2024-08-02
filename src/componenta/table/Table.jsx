import './Table.css'
import like from '../../assets/icons/like.svg'
const Table = () => {
  return (
    <section className="section">
      <div className="container">
      <h2 style={{fontSize: '50px', marginBottom: '20px', fontWeight: '600', textAlign: 'center', color: 'green'}}>Pricing <span style={{fontSize: '50px', fontWeight: '600', textAlign: 'center', color: '#043A3A'}}>Table</span></h2>
      <p style={{textAlign: 'center', marginBottom: '70px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc <br />eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit.</p>

      <div className="wrap">
        <div className="cardTabel">
          <div className="topGreen">
            <h3>Package 1</h3>
            <form className="form">
              <label>
              <p>Standard Plan</p>
              <h4>$20.00</h4>
              <p style={{fontSize:'10px'}}>Per month</p>
              </label>
              <ul>
                <li><img src={like} alt="" />Initial Consultation</li>
                <li><img src={like} alt="" />Labor Costs</li>
                <li><img src={like} alt="" />Materials and Plants</li>
                <li><img src={like} alt="" />Equipment and Machinery</li>
              </ul>
              <button style={{marginTop: '24px', width:'100%'}}>Purchase</button>
            </form>
          </div>
        </div>
        <div className="cardTabel">
        <div className="topGreen" style={{background: '#043A3A'}}>
          <h3>Paskage 2</h3>
            <form  className="form" style={{background:'#2FB95D'}}>
              <label>
              <p>Standard Plan</p>
              <h4>$90.00</h4>
              <p style={{fontSize:'10px'}}>Per month</p>
              </label>
              <ul>
                <li><img src={like} alt="" />Initial Consultation</li>
                <li><img src={like} alt="" />Labor Costs</li>
                <li><img src={like} alt="" />Materials and Plants</li>
                <li><img src={like} alt="" />Equipment and Machinery</li>
                <li><img src={like} alt="" />Permits and Inspection Fees</li>
              </ul>
              <button  style={{marginTop: '24px', width:'100%', background:'#043A3A'}}>Purchase</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Table