import { Formik } from 'formik';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import '../AuthForm.scss';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../../redux/reducers/auth-reducer';

const LoginForm = (props) => {
    const validations = yup.object().shape({
        email: yup.string().email('Enter correct E-Mail').required('E-Mail is required'),
        password: yup.string().typeError('Must be a string').required('Password is required'),
        rememberMe: yup.bool(),
    })

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
            }}
            validateOnBlur
            validationSchema={validations}
            onSubmit={ (values) => props.setAuthUserData('1', values.email, 'user', true) }
        >
            { ({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <form className="form">
                    <div className="form__inner">
                        <h1 className="form__title">Login To Your Account</h1>
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
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={"form__input" + (values.password ? " filled" : "")} />
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
                                    className="form__checkbox" />
                                <div className="form__checkbox-text">Remember me</div>
                            </label>
                        </div>

                        <button
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type="submit"
                            className="form__submit btn-type-1"
                        >Login</button>
                    </div>
                </form>     
            ) }
            
        </Formik>

    )
}

const Login = (props) => {
    document.title = 'Login To Your Account';

    return (
        <div className="auth">
            <LoginForm setAuthUserData={props.setAuthUserData} />

            <div className="auth__links-area">
                <NavLink to="/register" className="auth__link">Create a new account</NavLink>
            </div>

        </div>
    )
}


export default connect(null, {setAuthUserData})(Login);