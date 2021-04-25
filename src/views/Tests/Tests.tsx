import React from "react";
import Template from "../Template";

export default function Tests() {
  const [url, setUrl] = React.useState("https://google.com");
  return (
    <Template>
      <div>
        <div className="test">
          <div className="controls" id="snapshot">
            <i className="fas fa-camera"></i>
          </div>
          <div className="controls" id="play">
            <i className="fas fa-play"></i>
          </div>
        </div>
        <div className="url-input">
          <input name="url" placeholder="url" value={url} id="input" />
        </div>
        <div className="img-placeholder">
          <canvas id="img-canvas"></canvas>
        </div>
      </div>
    </Template>
  );
}
