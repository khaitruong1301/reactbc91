import React from "react";
import { Button, Rate } from "antd";
const DemoAntd = () => {
  return (
    <div>
      <Button color="default" variant="outlined">
        Solid
      </Button>
      <Button color="primary" variant="text">
        Text
      </Button>
      <Rate allowHalf defaultValue={5} onChange={()=>{
        console.log("rate");
      }}/>
    </div>
  );
};

export default DemoAntd;
