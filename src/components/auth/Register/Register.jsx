// import '../AuthForm.scss';

import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import * as yup from 'yup';


const RegisterForm = (props) => {
    const validations = yup.object().shape({
        email: yup.string()
            .email('Enter correct E-Mail')
            .required('E-Mail is required'),
        nickname: yup.string()
            .typeError('Must be a string')
            .required('Nickname is required')
            .min(3, 'Min length is 3 symbols')
            .max(15, 'Max length is 15 symbols'),
        password: yup.string()
            .typeError('Must be a string')
            .required('Password is required')
            .min(5, 'Min length is 5 symbols')
            .max(20, 'Max length is 20 symbols'),
        rememberMe: yup.bool(),
    })

    return (
        <Formik
            initialValues={{
                email: '',
                nickname: '',
                password: '',
                rememberMe: false,
            }}
            validateOnBlur
            validationSchema={validations}
            onSubmit={ () => alert('register! (no)') }
        >
            { ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <form className="form">
                    <div className="form__inner">
                        <h1 className="form__title">Register A New Account</h1>
                        <div className="form__input-wrapper">
                            <input 
                                type="text"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={"form__input" + (values.email ? " filled" : "")} 
                            />
                            <label className="form__input-label">E-Mail</label>
                            <span className="form__bar"></span>

                            {touched.email && errors.email && <div className="form__error">{errors.email}</div>}
                        </div>
                        <div className="form__input-wrapper">
                            <input 
                                type="text"
                                name="nickname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nickname}
                                className={"form__input" + (values.nickname ? " filled" : "")} 
                            />
                            <label className="form__input-label">Nickname</label>
                            <span className="form__bar"></span>

                            {touched.nickname && errors.nickname && <div className="form__error">{errors.nickname}</div>}
                        </div>
                        <div className="form__input-wrapper">
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={"form__input" + (values.password ? " filled" : "")} 
                            />
                            <label className="form__input-label">Password</label>
                            <span className="form__bar"></span>

                            {touched.password && errors.password && <div className="form__error">{errors.password}</div>}
                        </div>
                        <div className="form__checkbox-wrapper">
                            <label className="form__checkbox-label">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    onChange={handleChange}
                                    checked={values.rememberMe}
                                    className="form__checkbox" 
                                />
                                <div className="form__checkbox-text">Remember me</div>
                            </label>
                        </div>

                        <button 
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type="submit"
                            className="form__submit btn-type-1" >
                            Register</button>
                    </div>
                </form>
            )}
            

        </Formik>
    )
}


const Register = (props) => {
    return (
        <div className="auth">
            <RegisterForm />

            <div className="auth__links-area">
                <NavLink to="/login" className="auth__link">Login In Your Account</NavLink>
            </div>

        </div>
    )
}

export default Register;