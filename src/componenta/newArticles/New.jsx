import './New.css'
import news from '../db/new.js'
const New = () => {
  return (
    <div className="container">
      <div className="titles">
        <h2><span style={{color:'green'}}> New Articles</span> and <br /> Knowledge</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc <br />eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit.</p>
        <div className="gridd">
          {
            news.map((item, index)=>{
              return(
                <div key={index} className="kart">
                  <img src={item.img} alt="" style={{borderRadius:'27px 27px 0px 0px'}} />
                  <div className="bioInfo">
                    <p style={{fontSize: '11px'}}>{item.data}</p>
                    <h3>{item.title1}</h3>
                    <p>{item.description1}</p>
                    <a href="https://www.pexels.com/">Road More...</a>
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

export default New