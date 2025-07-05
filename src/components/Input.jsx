import envelopeIcon from '../assets/envelope-solid.svg';
import lockIcon from '../assets/lock-solid.svg';

export default function Input() {
  return (
    <>
      <div className="inputParent">
        <input type="email" name="email" placeholder="Enter Your Email" id="logInEmail" />
        <img src={envelopeIcon} alt="envelope" />
        <div className="errorDivLogIn"></div>
      </div>

      <div className="inputParent">
        <input type="password" name="password" placeholder="Enter Your Password" id="logInPassword" />
        <img src={lockIcon} alt="lock" />
        <div className="errorDivLogIn"></div>
      </div>
    </>
  )
}
