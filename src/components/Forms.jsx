import React from "react";
import style from "../assets/style/Home.module.css";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
function Forms() {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const SignupForm = () => {
    // Pass the useFormik() hook initial form values, a validate function that will be called when
    // form values change or fields are blurred, and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      validate,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <div className={style.inputs}>
          <div className={style.leftInputs}>
            <label className={style.inputText} htmlFor="firstName">
              First Name
            </label>
            <input
              className={style.input}
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {/* {formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null} */}

            <label className={style.inputText} htmlFor="email">
              Email Address
            </label>
            <input
              className={style.input}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}

            <label className={style.inputText} htmlFor="pass">
              Password
            </label>
            <input
              className={style.input}
              id="pass"
              name="pass"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.pass}
            />
            {/* {formik.errors.pass ? <div>{formik.errors.pass}</div> : null} */}
          </div>

          <div className={style.leftInputs}>
            <label className={style.inputText} htmlFor="lastName">
              Last Name
            </label>
            <input
              className={style.input}
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {/* {formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null} */}

            <label className={style.inputText} htmlFor="phone">
              Phone
            </label>
            <input
              className={style.input}
              id="phone"
              name="phone"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {/* {formik.errors.phone ? <div>{formik.errors.phone}</div> : null} */}

            <label className={style.inputText} htmlFor="confirm">
              Confirm Password
            </label>
            <input
              className={style.input}
              id="confirm"
              name="confirm"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.confirm}
            />
            {/* {formik.errors.confirm ? <div>{formik.errors.confirm}</div> : null} */}
          </div>
        </div>
        <div className={style.checks}>
          <div className={style.checkLink}>
            <div className={style.checkInput}>
              <input
                id="remember"
                name="remember"
                onChange={formik.handleChange}
                value={formik.values.remember}
                className={style.checkbox}
                type="checkbox"
              />
              <label className={style.checkSpan} htmlFor="remember">
                Remember me
              </label>
            </div>
            <Link className={style.a} to="forgotpass">
              Forgot Password
            </Link>
          </div>
          <div className={style.checkInput}>
            <input
              id="agree"
              name="agree"
              onChange={formik.handleChange}
              value={formik.values.agree}
              className={style.checkbox}
              type="checkbox"
            />
            <label className={style.checkSpan} htmlFor="agree">
              I agree to all the Terms and Privacy policy
            </label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  };
  return SignupForm();
}

export default Forms;
