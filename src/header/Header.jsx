import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">My</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://www.csusb.edu/sites/default/files/CSUSB-Zoom-BG-09.png" 
        alt="Header Image" />
    </div>
  )
}
