import { createRoot } from 'react-dom/client'
import { HeaderHome } from './components/HeaderHome'
import HomePage from './pages/HomePage'
import BaiTapLayout from './pages/BaiTapLayout'
import DataBinding from './pages/DataBinding'
import HandleEvent from './pages/HandleEvent'
import React from 'react'
import RenderCondition from './pages/RenderCondition'
import ChangeNumber from './pages/StateDemo/ChangeNumber'
import StyleComponentDemo from './pages/StyleComponent/StyleComponentDemo'
//css cho toàn ứng dụng
import './assets/css/index.css'
import ChangeFontSize from './pages/StateDemo/ChangeFontSize'
import CarDemo from './pages/StateDemo/CarDemo'
import TinderClone from './pages/StateDemo/TinderClone'
import Propdemo from './pages/PropsDemo/Propdemo'



createRoot(document.getElementById('root')).render(
  <div>
      {/* <HomePage /> */}
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <RenderCondition /> */}
      {/* <ChangeNumber /> */}
      {/* <StyleComponentDemo /> */}
      {/* <ChangeFontSize /> */}
      {/* <CarDemo /> */}
      {/* <TinderClone /> */}
      <Propdemo />
  </div>
)

