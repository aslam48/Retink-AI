import React from 'react'
import './content.css'
import RetinkAvata from '../../../../assets/Retink-avata.png'

const Content = () => {
  return (
    <div className="container text_and_img_context">
      <div>
        <p className='text'>Get Advanced AI</p>
        <p className='text'>+ Expert Created <span className='logo-text'>Logo</span></p>

        <div className='content-box'>
          <p className='context-text'>Boost your sales <span className='indigo'>10x faster</span> with content customization by our unique partnership of <span className='indigo'>human creativity and AI optimization</span></p>
        </div>
      </div>

      <div>
        <img src={RetinkAvata} alt='icon retink'/>
      </div>
    </div>
  )
}

export default Content