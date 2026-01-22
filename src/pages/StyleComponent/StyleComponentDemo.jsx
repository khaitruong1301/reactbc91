import React from 'react'

import obStyleModule from './StyleComponentDemo.module.css'


const StyleComponentDemo = () => {
    let classTextPink = obStyleModule['text-pink'];
    let classBgRed = obStyleModule.bgRed;

    console.log(classTextPink);
    console.log(classBgRed);
    let obStyle = {
        backgroundColor:'blue',
        color:'orange'
    };

  return (
    <div className='container'>
        <h1>Style component</h1>
        <p className='h-heading'>Lorem ipsum dolor sit amet.</p>
        <p style={{backgroundColor:'blue',color:'orange'}}>Lorem ipsum dolor sit amet.</p>
        <p style={obStyle}>Lorem ipsum dolor sit amet.</p>

        <p className={`${obStyleModule.bgRed} fs-5 ${obStyleModule['text-pink']}`}>Lorem ipsum dolor sit amet.</p>


        {/* <p style="background-color:blue;color:orange">Lorem ipsum dolor sit amet.</p> */}
    </div>
  )
}

export default StyleComponentDemo