import React from "react";
import style from "../assets/style/Home.module.css";
import Forms from "../components/Forms";
import { Link, json, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { useFormik } from "formik";
function Home() {
  let navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (!/^[A-Za-z]*$/i.test(values.firstName)) {
      errors.firstName = "Must be only letter";
    } else if (values.firstName.length > 10) {
      errors.firstName = "Must be 10 characters or less";
    } else if (values.firstName.length < 3) {
      errors.firstName = "Must be 3 characters or more than ";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (!/^[A-Za-z]*$/i.test(values.lastName)) {
      errors.lastName = "Must be only letter";
    } else if (values.lastName.length > 10) {
      errors.lastName = "Must be 10 characters or less";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Must be 3 characters or more than ";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.phone) {
      errors.phone = "Required";
    } else if (!/^(055|050|070|051)/.test(values.phone)) {
      errors.phone = "Invalid phone number";
    } else if (values.phone.length != 10) {
      errors.phone = "Must be 10 characters";
    }

    if (!values.pass) {
      errors.pass = "Required";
    } else if (!/^[^A-Z]*[A-Z][^A-Z]*$/.test(values.pass)) {
      errors.pass = "Must be Capital letter";
    } else if (/^[A-Z0-9a-z]*$/i.test(values.pass)) {
      errors.pass = "Must be min 1 symbol";
    } else if (values.pass.length < 6) {
      errors.pass = "Must be 6 characters or more than ";
    } else if (!/\d/.test(values.pass)) {
      errors.pass = "Must be min 1 number";
    }
    if (!values.confirm) {
      errors.confirm = "Required";
    } else if (!/[A-Z]/.test(values.confirm)) {
      errors.confirm = "Must be Capital letter";
    } else if (values.confirm.length < 6) {
      errors.confirm = "Must be 6 characters or more than ";
    } else if (!/\d/.test(values.confirm)) {
      errors.confirm = "Must be min 1 number";
    } else if (/^[A-Z0-9a-z]*$/i.test(values.confirm)) {
      errors.confirm = "Must be min 1 symbol";
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
        pass: "",
        confirm: "",
        phone: "",
        remember: false,
        agree: false,
      },
      validate,
      onSubmit: (values) => {
        if (values.agree) {
          alert(JSON.stringify(values, null, 2));
          console.log("object");
          if (values.remember) {
            let obj = {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              pass: values.pass,
            };
            localStorage.setItem("login", JSON.stringify(obj));
          }
        }
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
            {formik.errors.firstName ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                }}
              >
                {formik.errors.firstName}
              </div>
            ) : (
              <div style={{ color: "white" }}>s</div>
            )}

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
            {formik.errors.email ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                }}
              >
                {formik.errors.email}
              </div>
            ) : (
              <div style={{ color: "white" }}>s</div>
            )}

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
            {formik.errors.pass ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                }}
              >
                {formik.errors.pass}
              </div>
            ) : (
              <div style={{ color: "white" }}>s</div>
            )}
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
            {formik.errors.lastName ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                }}
              >
                {formik.errors.lastName}
              </div>
            ) : (
              <div style={{ color: "white" }}>s</div>
            )}

            <label className={style.inputText} htmlFor="phone">
              Phone
            </label>
            <input
              className={style.input}
              id="phone"
              name="phone"
              type="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.errors.phone ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                }}
              >
                {formik.errors.phone}
              </div>
            ) : (
              <div style={{ color: "white" }}>s</div>
            )}

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
            {formik.errors.confirm ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                }}
              >
                {formik.errors.confirm}
              </div>
            ) : (
              <div style={{ color: "white" }}>s</div>
            )}
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
        <div className={style.buttons}>
          <button type="submit" className={style.button1}>
            Create Account
          </button>
          <button
            onClick={() => {
              navigate("/signin");
            }}
            className={style.button2}
          >
            <span className={style.buttonLogo}></span>
            <span>Sign-in with google</span>
          </button>
        </div>
      </form>
    );
  };
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.leftText}>
          Social media shared today, tomorrow or by location
        </div>
        <div className={style.image}></div>
      </div>
      <div className={style.right}>
        <div className={style.rightLogoText}>
          <div className={style.rightLogo}></div>
          <div className="logostext">Capzul</div>
        </div>
        <div className={style.createAccText}>
          <p className={style.createAcc}>Create account</p>
          <p className={style.forB}>For business, band or celebrity.</p>
        </div>
        {/* <Forms /> */}
        {SignupForm()}

        <div className={style.login}>
          Don’t have an account? <Link to="/login">Log In</Link>
        </div>
        <div className={style.footerImage}></div>
      </div>
    </div>
  );
}

export default Home;
