import React, { useEffect, useState } from 'react'


/*
    props: 
        + Component
        + MobileComponent
    <ResponsiveComponent Component={<HomeDesktop />} MobileComponent={<HomeMobile />}
*/
const ResponsiveComponent = (props) => {

  const [screenWitdh,setScreenWidth] = useState(window.innerWidth);

  let Component = props.Component;

  if(screenWitdh < 768 && props.MobileComponent) {
    Component = props.MobileComponent
  }

  const handleChangeScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  }



  
  useEffect(()=>{
    //đăng ký sự kiện js trên react( event resize)
    window.addEventListener('resize', handleChangeScreenWidth);

    return () => {
      //Huỷ sự kiện resize của js trên react 
      window.removeEventListener('resize',handleChangeScreenWidth);
    }


  },[screenWitdh])





  return (
    <div>
      {Component}
    </div>
  )
}

export default ResponsiveComponent