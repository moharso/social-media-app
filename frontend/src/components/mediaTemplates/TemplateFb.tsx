type TemplateFbProps = {
  postText: string;
  name: string;
  img: string;
};

const TemplateFb = ({postText, name, img}: TemplateFbProps) => {
  return (
    <div>
      <div className="DesktopVersion">
        <header className="DesktopVersionHeader">
          <div className="DesktopVersionHeaderImg"></div>
          <div>
            <span className="DesktopVersionHeaderTitle">{name}</span>
            <div className="DesktopVersionHeaderDate">
              <span>9.1.2023</span>
              <span className="DesktopVersionHeaderDateGlobe"></span>
            </div>
          </div>
        </header>
        <main className="DesktopVersionMain">
          <span className="DesktopVersionMainText">{postText}</span>
          <div className="DesktopVersionMainImg">
            <div>
              <img src={img} alt="post visual"></img>
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
