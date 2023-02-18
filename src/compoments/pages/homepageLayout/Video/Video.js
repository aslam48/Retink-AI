import React from 'react'
import VideoYoutube from '../../../../assets/video.png'
import './video.css'

const Video = () => {
  return (
   
        <div className='container space-y-20  flex flex-col justify-center items-center'>
            <p className='context'>EXPLAINER VIDEO</p>
            <img src={VideoYoutube} alt="video" className='VideoYoutube_img  shadow-lg'/>
        </div>
  )
}

export default Video