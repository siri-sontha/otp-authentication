import Icons from './Icons';
import Input from './Input';

export default function LoginSec() {
    return (
        <>
        <div className="container">
            <section className="loginSec" id="loginSec">
                <div>
                    
                    <h1>Login</h1>

                    <Icons />
                    <Input />

                    <button name="loginBtn">Log In</button>
                    <a id="dontHaveAccBtn" href="#">Don't have an account? Sign Up</a>

                </div>
            </section>
        </div>
        </>
    )
}
