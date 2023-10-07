import React from 'react'
import video from "../assets/video.mp4"
const Bg = () => {
  return (
    <div className='relative'>
      <video src={video} autoPlay loop muted className='w-full h-full'/>

     
    </div>
  )
}

export default Bg
