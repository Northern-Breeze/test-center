import React from "react";
import { Link } from "react-router-dom";
import "./Template.scss";

export default function Template(props) {
  const { children } = props;
  const [url, setUrl] = React.useState("https://localhost:3000");
  const [tabState, setTabState] = React.useState("home");

  return (
    <div class="container">
      <div class="sidenav">
        <div class="nav-item top-nav">
          <Link to="/">
            <div class="icon-text">
              <div class="icon">
                <i class="fas fa-home"></i>
              </div>
              <span class="text-home">Home</span>
            </div>
          </Link>
        </div>
        <div class="nav-item">
          <Link to="/tests" class="nav-item">
            <div class="icon-text">
              <div class="icon">
                <i class="fas fa-flask"></i>
              </div>
              <span class="text-home">Test</span>
            </div>
          </Link>
        </div>
        <div class="nav-item">
          <Link to="/metrics" class="nav-item">
            <div class="icon-text">
              <div class="icon">
                <i class="fas fa-filter"></i>
              </div>
              <span class="text-home">Metrics</span>
            </div>
          </Link>
        </div>
        <div class="nav-item">
          <Link to="/bugs" class="nav-item">
            <div class="icon-text">
              <div class="icon">
                <i class="fas fa-bug"></i>
              </div>
              <span class="text-home">Bugs</span>
            </div>
          </Link>
        </div>
      </div>
      <div class="header">
        <div class="image-conatiner">
          <div>
            <img
              src="http://kiddies.herokuapp.com/static/assets_pics/mypic.jpg"
              id="profile-img"
              alt="User"
            />
          </div>
        </div>
        <div class="user-conatiner">
          <h2>Samuel Mothwa</h2>
        </div>
      </div>
      <div class="main">{children}</div>
    </div>
  );
}
