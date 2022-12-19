import React, {useState} from "react";
import "./Home.css";
import search from "../../assets/search-icon.png";
import like from "../../assets/like-icon.png";
import basket from "../../assets/basket-icon.png";
import centerImage from "../../assets/center-picture.png";
import wallPaper from "../../assets/wallpaper-main.png";

export function Home() {

  const [language, setLanguage] = useState<boolean>(true);

  return (
    <div>
      <header>
        <div className="container">
          <nav className="nav">
            <ul className="language-toggle">
              <li className="language-item" onClick={()=>setLanguage(true)}>
                {language ?
                  <div>
                    <div className="ellipse"></div>
                    <div className=" language-active">en</div>
                  </div>
                  : <div className="language">en</div>
                }
              </li>
              <li className="language-item" onClick={()=>setLanguage(false)}>
                {!language ?
                  <div>
                    <div className="ellipse"></div>
                    <div className=" language-active">ru</div>
                  </div>
                  : <div className=" language">ru</div>
                }
              </li>
            </ul>
            <div className="logo">
              Yonne
            </div>
            <div className="list-items">
              <a href="#" className="login-btn">
                LOGIN
              </a>
              <div className="list-options">
                <a className="search-btn">
                  <img className="search-image" src={search} alt="search-picture"/>
                </a>
                <a  className="like-btn">
                  <img className="search-image" src={like} alt="like-picture"/>
                </a>
                <a className="basket-btn">
                  <img className="search-image" src={basket} alt="basket-picture"/>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="wall-paper-main">
        <img src={wallPaper} className="wall-paper-image" alt=""/>
        <div className="center-picture">
          <img src={centerImage} className="center-image" alt=""/>
          <div className="bottom-panel">
            <div className="btn-panel">
              <div className="btn-explore">explore collections</div>
              <div className="shop-now">shop now</div>
            </div>
            <div className="picture-title">Simple. Timeless.</div>
          </div>

        </div>
      </div>

    </div>
  )
}