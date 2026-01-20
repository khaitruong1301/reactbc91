import { createRoot } from 'react-dom/client'
import { HeaderHome } from './components/HeaderHome'
import HomePage from './pages/HomePage'
import BaiTapLayout from './pages/BaiTapLayout'
import DataBinding from './pages/DataBinding'
import HandleEvent from './pages/HandleEvent'
import React from 'react'
import RenderCondition from './pages/RenderCondition'


createRoot(document.getElementById('root')).render(
  <div>
      {/* <HomePage /> */}
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      <RenderCondition />
  </div>
)

