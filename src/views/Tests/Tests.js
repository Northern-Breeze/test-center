import React from "react";
import Template from "../Template";

export default function Tests() {
  const [url, setUrl] = React.useState("https://google.com");
  return (
    <Template>
      <div>
        <div class="test">
          <div class="controls" id="snapshot">
            <i class="fas fa-camera"></i>
          </div>
          <div class="controls" id="play">
            <i class="fas fa-play"></i>
          </div>
        </div>
        <div class="url-input">
          <input name="url" placeholder="url" value={url} id="input" />
        </div>
        <div class="img-placeholder">
          <canvas id="img-canvas"></canvas>
        </div>
      </div>
    </Template>
  );
}
