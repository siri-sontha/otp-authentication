import envelopeIcon from '../assets/envelope-solid.svg';
import lockIcon from '../assets/lock-solid.svg';
import instagramIcon from '../assets/instagram-brands.svg';
import githubIcon from '../assets/github-brands.svg';
import linkedinIcon from '../assets/linkedin-brands.svg';
import redditIcon from '../assets/reddit-brands.svg';
import twitterIcon from '../assets/twitter-brands.svg';

export default function LoginSec() {
    return (
        <>
            <section className="loginSec" id="loginSec">
                <div>
                    <a className="backIcon" href="index.html"><i className="fa-solid fa-arrow-left fa-xl" style="color: #ffffff;"></i></a>
                    <h1>Login</h1>

                    <div className="icons">
                        <img src={instagramIcon} alt="instagram" />
                        <img src={githubIcon} alt="github" />
                        <img src={linkedinIcon} alt="linkedin" />
                        <img src={redditIcon} alt="reddit" />
                        <img src={twitterIcon} alt="twitter" />
                    </div>

                    <div className="inputParent">
                        <input type="email" name="email" placeholder="Enter Your Email" id="logInEmail" />
                        <img src={envelopeIcon} alt="envelope" />
                        <div id="errorDivLogIn" className="errorDivLogIn"></div>
                    </div>

                    <div className="inputParent">
                        <input type="password" name="password" placeholder="Enter Your Password" id="logInPassword" />
                        <img src={lockIcon} alt="envelope" />
                        <div id="errorDivLogIn" className="errorDivLogIn"></div>
                    </div>

                    <a>Forgot Password</a>

                    <button name="loginBtn">Log In</button>
                    <a id="dontHaveAccBtn">Don't have an account? Sign Up</a>

                </div>
            </section>
        </>
    )
}
