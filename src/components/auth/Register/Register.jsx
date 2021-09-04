// import '../AuthForm.scss';

import { NavLink } from "react-router-dom";


const Register = (props) => {
    return (
        <div className="auth">
            <form className="form">
                <div className="form__inner">
                    <h1 className="form__title">Register A New Account</h1>
                    <div className="form__input-wrapper">
                        <input type="text" className="form__input" />
                        <label className="form__input-label">E-Mail</label>
                        <span className="form__bar"></span>
                    </div>
                    <div className="form__input-wrapper">
                        <input type="text" className="form__input" />
                        <label className="form__input-label">Nickname</label>
                        <span className="form__bar"></span>
                    </div>
                    <div className="form__input-wrapper">
                        <input type="password" className="form__input" />
                        <label className="form__input-label">Password</label>
                        <span className="form__bar"></span>
                    </div>
                    <div className="form__checkbox-wrapper">
                        <label className="form__checkbox-label">
                            <input type="checkbox" className="form__checkbox" />
                            <div className="form__checkbox-text">Remember me</div>                           
                        </label>
                    </div>

                    <button className="form__submit btn-type-1">Register</button>
                </div>
            </form>

            <div className="auth__links-area">
                <NavLink to="/login" className="auth__link">Login In Your Account</NavLink>
            </div>

        </div>
    )
}

export default Register;