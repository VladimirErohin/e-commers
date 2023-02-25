import React, {FC} from "react";
import "./Footer.css";
import * as S from "../../pages/Home/styled";


const menuFooterItems: Array<string> = ["shop", "collection", "about"];
const testItems: Array<string> = ["shipping & returns", "terms of use", "privacy policy"];

const Footer: FC = () => {
  return (
    <footer>
      <S.Container>
        <div className="logo-footer">
          yonne
        </div>
        <div className="footer-content">
          <div className="group">
            {menuFooterItems.map(item => <div key={item} className="menu-item">{item}</div>)}
          </div>
          <div className="group">
            {testItems.map(item => <div key={item} className="menu-item">{item}</div>)}
          </div>
          <div className="group">
            <div className="wrapper-input">
              <input
                type="text"
                placeholder="Enter your email to subscribe"
              />
              <div className="enter-btn"><img src='/assets/images/Vector.png' alt="vector"/></div>
            </div>

            <div className="social-network">social network</div>
          </div>
        </div>

      </S.Container>
    </footer>
  );
};
export default Footer;