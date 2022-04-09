import "./contact.scss";
import { ExternalLink } from "react-external-link";

export default function Contact() {
  
  return (
    <div className="contact" id="contact">
      <h1>Contact <span>Me</span></h1>
      <hr />
      <div className="logo-container">
        <ExternalLink href="https://linkedin.com/in/tucker-chaisit/">
        <img src="assets/linkedin-blk.png" alt="" />
        </ExternalLink>
        <ExternalLink href="https://github.com/Tuckerchaisit/">
        <img src="assets/github-logo.png" alt="" className="github" />
        </ExternalLink>
      </div>
      <h2>My <span>Resume</span></h2>
      <hr />
      <a
        className="file-container"
        href="../assets/Resume.pdf"
        download
      >
        <img src="assets/file-wht.png" alt="" />
       
      </a>
    </div>
  );
}
