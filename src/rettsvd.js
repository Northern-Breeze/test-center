import React from "react";
import "./App.css";

export default function App() {
  const canvasRef = React.useRef();
  const imageRef = React.useRef();
  React.useEffect(() => {
    if (canvasRef.current && imageRef.current) {
      const context = canvasRef.current.getContext("2d");
      const image = imageRef.current;
      image.onload = () => {
        context.drawImage(image, 0, 0);
        context.font = "40px Courier";
        context.fillText("this.props.text", 210, 75);
      };
    }
  }, []);
  return (
    <div>
      <canvas ref={canvasRef} width={640} height={425} />
      <img
        ref={imageRef}
        src={"http://kiddies.herokuapp.com/static/assets_pics/mypic.jpg"}
        className="hidden"
      />
    </div>
  );
}
