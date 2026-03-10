import React, { memo } from 'react'

const ChildComponent = (props) => {

    console.log('child render')

  return (
    <div>ChildComponent

       {props.renderLike()}
    </div>
  )
}

export default ChildComponent