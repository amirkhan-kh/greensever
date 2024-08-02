import "./Gallery.css";
import gallery from '../db/gallery.js';
const Gallery = () => {
  return (
    <div>
      <div className="container">
        <div className="title">
          <h2>EverGreen <span style={{color:'green'}}>Gallery</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc <br />eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit.</p>

          <div className="gridGallery">
            {
              gallery.map((item, index)=>{
                return(
                  <div key={index} className="kard" >
                  <img src={item.avatar} alt="" />
                  <div className="rek">
                    <h3>{item.name}</h3>
                    <h2></h2>
                  </div>
                  <div className="body">
                  <h3>{item.name}</h3>

                    <p>{item.bio}</p>
                  </div>
               </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery