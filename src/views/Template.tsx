import React from "react";
import { Link } from "react-router-dom";
import "./Template.scss";

type Props = {
  children: React.ReactChild
}

export default function Template(props: Props) {
  const { children } = props;
  const [url, setUrl] = React.useState("https://localhost:3000");
  const [tabState, setTabState] = React.useState("home");

  return (
    <div className="container">
      <div className="sidenav">
        <div className="nav-item top-nav">
          <Link to="/">
            <div className="icon-text">
              <div className="icon">
                <i className="fas fa-home"></i>
              </div>
              <span className="text-home">Home</span>
            </div>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/tests" className="nav-item">
            <div className="icon-text">
              <div className="icon">
                <i className="fas fa-flask"></i>
              </div>
              <span className="text-home">Test</span>
            </div>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/metrics" className="nav-item">
            <div className="icon-text">
              <div className="icon">
                <i className="fas fa-filter"></i>
              </div>
              <span className="text-home">Metrics</span>
            </div>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/bugs" className="nav-item">
            <div className="icon-text">
              <div className="icon">
                <i className="fas fa-bug"></i>
              </div>
              <span className="text-home">Bugs</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="header">
        <div className="image-conatiner">
          <div>
            <img
              src="http://kiddies.herokuapp.com/static/assets_pics/mypic.jpg"
              id="profile-img"
              alt="User"
            />
          </div>
        </div>
        <div className="user-conatiner">
          <h2>Samuel Mothwa</h2>
        </div>
      </div>
      <div className="main">{children}</div>
    </div>
  );
}
