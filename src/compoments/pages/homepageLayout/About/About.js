import React from 'react'
import './about.css'


const About = () => {
  return (
    <div className='container place-center'>

        <div className='space-y-16'>
        <div className='context_box'>
            <h2 className='context_text_Title'>Transform your Creation Process</h2>
            <p className='context_text'>With a new approach to ordering content, you can now stop juggling multiple documents and meetings and start publishing content faster and on demand</p>
        </div>

        <div className='context_box'>
            <h2 className='context_text_Title'>Activate your business growth with RetinkContent. </h2>
            <p className='context_text'>Save time and maintain your brand identity within your budget range or sign up for affordable plans and still access multiple content services like:</p>
        </div>
        </div>



        {/* blogs */}

       <div className='items_blogs'>
        <div className='blog_box'>
          <img src='https://github.com/aslam48/Retink-AI/blob/main/src/assets/logologo.png?raw=true' alt=""/>
          <small>Logod</small>
          <span></span>
          <p> Have a unique & creative logo designed to express and represent your brand identity.</p>
        </div>

        <div className='blog_box'>
          <img src='https://github.com/aslam48/Retink-AI/blob/main/src/assets/mac.png?raw=true' alt=""/>
          <small>Logod</small>
          <span></span>
          <p> Have a unique & creative logo designed to express and represent your brand identity.</p>
        </div>


        <div className='blog_box'>
          <img src='https://github.com/aslam48/Retink-AI/blob/main/src/assets/computer.png?raw=true' alt=""/>
          <small>Logod</small>
          <span></span>
          <p> Have a unique & creative logo designed to express and represent your brand identity.</p>
        </div>

        <div className='blog_box'>
          <img src='https://github.com/aslam48/Retink-AI/blob/main/src/assets/camera.png?raw=true' alt=""/>
          <small>Logod</small>
          <span></span>
          <p> Have a unique & creative logo designed to express and represent your brand identity.</p>
        </div>

        <div className='blog_box'>
          <img src='https://github.com/aslam48/Retink-AI/blob/main/src/assets/copywrite.png?raw=true' alt=""/>
          <small>Logod</small>
          <span></span>
          <p> Have a unique & creative logo designed to express and represent your brand identity.</p>
        </div>

        <div className='blog_box'>
          <img src='https://github.com/aslam48/Retink-AI/blob/main/src/assets/social%20phone.png?raw=true' alt=""/>
          <small>Logod</small>
          <span></span>
          <p> Have a unique & creative logo designed to express and represent your brand identity.</p>
        </div>

        </div>
    </div>
  )
}

export default About