import React from 'react'
import '../css/ganesh2.css'

function GaneshHome() {
  return (
    <>
       <div className="home d-flex">
        <div className="home-left ps-5 d-flex flex-column justify-content-center">
            <div className="desc-1">
                welcome
            </div>
            <div className="desc-2 py-4">
                Our Lens make <br />
                life look happier.
            </div>
            <div className="desc-3 pb-4">
                sunglasses by photographers. trens drench your world <br />
                in rich, warm tones - no matter where you are
            </div>
            <div className="desc-4 d-flex align-items-center">
              <div className="shop-btn me-4 px-5 py-2">Shop now</div>
              <div className="vid-btn">
              <i class="bi bi-play-circle me-2"></i>
                Play video</div>
            </div>
        </div>
        <div className="home-right d-flex align-items-center">
            <img src="/sunglass.jpg" alt="" />
        </div>
       </div>
    </>
  )
}

export default GaneshHome