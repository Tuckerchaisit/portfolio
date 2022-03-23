import "./topbar.scss"
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">tucker.</a>
            <div className="itemContainer">
              <PersonIcon className="icon"/>
              <span>+44 924</span>
            </div>
            <div className="itemContainer">
              <MailIcon className="icon"/>
              <span>+safak@genius.com</span>
            </div>
          </div>
          <div className="right">
              <div className="hamburger">
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
          </div>
        </div>
    </div>
  )
}
