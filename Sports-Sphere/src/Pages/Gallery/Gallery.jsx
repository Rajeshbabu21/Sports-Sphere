import React from 'react'
import './gallery.css'
import vb1 from "../../assets/vb1.jpeg"
import vb2 from "../../assets/vb2.jpeg"
import vb3 from "../../assets/rm.jpeg"
import vb4 from "../../assets/rm1.jpeg"
import vb5 from "../../assets/rm3.jpeg"
import vb6 from "../../assets/cr1.jpeg"
import vb7 from "../../assets/c2.jpeg"
import vb8 from "../../assets/c1.jpeg"
import vb10 from "../../assets/bh2.jpeg"
import vb11 from "../../assets/hbg.jpeg"
import vb12 from "../../assets/p1.jpg"
import vb13 from "../../assets/p2.jpg"
import vb14 from "../../assets/p3.jpg"
import vb15 from "../../assets/p4.jpg"
import vb16 from "../../assets/p5.jpg"
import vb17 from "../../assets/p6.jpg"
import vb18 from "../../assets/p7.jpg"
import vb19 from "../../assets/p8.jpg"
import vb20 from "../../assets/p9.jpg"
import vb21 from "../../assets/p10.jpg"
import vb22 from "../../assets/p11.jpg"




const Gallery = () => {
  return (
    <div className='gallery-container'>
      <h1 className='h1'>Sports Sphere Galley</h1>
      <div className='row'>
        <div className='column'>
          <img src={vb1} alt='Wedding' />
          <img src={vb2} alt='Rocks' />
          {/* <img src={vb17} alt='Waterfalls' /> */}
          <img src={vb5} alt='Nature' />
          <img src={vb3} alt='Waterfalls' />
          <img src={vb18} alt='Waterfalls' />
          {/* <img src={vb13} alt='Mountains' /> */}
        </div>
        <div className='column'>
          <img src={vb4} alt='Paris' />
          {/* <img src={vb5} alt='Underwater' /> */}
          <img src={vb6} alt='Ocean' />
          <img src={vb7} alt='Wedding' />
          <img src={vb8} alt='Mountains' />
          <img src={vb14} alt='Mountains' />
          <img src={vb15} alt='Mountains' />
          {/* <img src={vb13} alt='Mountains' /> */}
          {/* <img src={vb13} alt='Mountains' /> */}
        </div>
        <div className='column'>
          <img src={vb11} alt='Wedding' />
          <img src={vb10} alt='Rocks' />
          <img src={vb12} alt='Rocks' />
          <img src={vb16} alt='Waterfalls' />
          {/* <img src={vb13} alt='Waterfalls' /> */}
          {/* <img src={vb14} alt='Waterfalls' /> */}
        </div>

        <div className='column'>
          <img src={vb19} alt='Wedding' />
          <img src={vb20} alt='Rocks' />
          <img src={vb21} alt='Rocks' />
          <img src={vb22} alt='Waterfalls' />
          {/* <img src={vb13} alt='Waterfalls' /> */}
          {/* <img src={vb14} alt='Waterfalls' /> */}
        </div>
      </div>
    </div>
  )
}

export default Gallery
