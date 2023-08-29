import React from "react";

const TemplateFb = () => {
  return (
    <div>
      <div className="DesktopVersion">
        <header className="DesktopVersionHeader">
          <div className="DesktopVersionHeaderImg"></div>
          <div>
            <span className="DesktopVersionHeaderTitle">Account name</span>
            <div className="DesktopVersionHeaderDate">
              <span>1.9.2023</span>
              <span className="DesktopVersionHeaderDateGlobe"></span>
            </div>
          </div>
        </header>
        <main className="DesktopVersionMain">
          <span className="DesktopVersionMainText">Post text</span>
          <div className="DesktopVersionMainImg">
            <div>
              <img src="" alt="post visual"></img>
            </div>
          </div>
        </main>
        <footer className="DesktopVersionFooter">
          <div className="DesktopVersionFooterContainer">
            <div className="DesktopVersionFooterLike"></div>
            <span>Like</span>
          </div>
          <div className="DesktopVersionFooterContainer">
            <div className="DesktopVersionFooterComment"></div>
            <span>Comment</span>
          </div>
          <div className="DesktopVersionFooterContainer">
            <div className="DesktopVersionFooterShare"></div>
            <span>Share</span>
          </div>
          <div className="DesktopVersionFooterContainer">
            <div className="DesktopVersionFooterShare"></div>
            <span>Send</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TemplateFb;
