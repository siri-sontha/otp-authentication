import instagramIcon from '../assets/instagram-brands.svg';
import githubIcon from '../assets/github-brands.svg';
import linkedinIcon from '../assets/linkedin-brands.svg';
import redditIcon from '../assets/reddit-brands.svg';
import twitterIcon from '../assets/twitter-brands.svg';

export default function Icons() {
  return (
    <div className="icons">
      <img src={instagramIcon} alt="instagram" />
      <img src={githubIcon} alt="github" />
      <img src={linkedinIcon} alt="linkedin" />
      <img src={redditIcon} alt="reddit" />
      <img src={twitterIcon} alt="twitter" />
    </div>

  )
}
