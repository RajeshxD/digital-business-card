import profile from "./Images/profile.png";
import EmailButton from "./Images/EmailButton.png";
import LinkedInButton from "./Images/LinkedInButton.png";
function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={profile} alt="Rajesha T" />
      <h1 className="info--fullname">Rajesha T</h1>
      <h5 className="info--role">Frontend Developer</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://rajesha.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          rajesha.netlify.app
        </a>
      </p>
      <div className="info--buttons">
        <address>
          <a href="mailto:rajesha.job@gmail.com">
            {" "}
            <button className="button button--email">
              <img className="info--icon" src={EmailButton} alt="Email" />
            </button>
          </a>
        </address>
        <a href="mailto:rajesha.job@gmail.com">
          {" "}
          <button className="button button--email">
            <img className="info--icon" src={LinkedInButton} alt="LinkedIn" />
          </button>
        </a>
      </div>
    </div>
  );
}
export default Info;
