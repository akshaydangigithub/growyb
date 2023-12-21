import React, { useEffect, useState } from "react";
import { Button, Row, Col, Alert } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import FeatherIcons from "feather-icons-react";

// Components
import { VerticalForm, FormInput } from "../../components/index.tsx";
import AuthLayout from "./AuthLayout.tsx";

// Images
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import MyAPI, { Item } from "../../componentss/MyAPI.jsx";
import { toast } from "react-toastify";

interface UserData {
  email: string;
  password: string;
  checkbox: boolean;
}

/* Bottom links */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col xs={12} className="text-center">
        <p className="text-muted">
          {t("Don't have an account?")}{" "}
          <Link to={"/vender/register"} className="text-primary fw-bold ms-1">
            {t("Sign Up")}
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const Login = () => {
  const { t } = useTranslation();
  const [error,setErrorr] = useState(null);

  /* Form validation schema */
  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().required(t("Please enter Email")),
      password: yup.string().required(t("Please enter Password")),
      checkbox: yup.bool().oneOf([true]),
    })
  );

  /* Handle form submission */
  const onSubmit = (formData: UserData) => {
    let data = { email: formData.email, password: formData.password };
    console.log("data", data);
    if (formData.email && formData.password) {
      MyAPI.post('/api/company/signin',data )
        .then((res) => {
          console.log(res)
          Item.setItem('isAdmin', false);
          if (res.data.status) {
            Item.setItem('token', res.data.token);
            window.location.assign('/vendor/dashboard/uploadLeads');
            toast.success('login success...!', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          } else {
            toast.warn(res.data.message || res.message , {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setErrorr(res.data.message)
          }
        }).catch((error) => {
          console.error('Error:', error.message);
        })
    } else {
      toast.warn('all fileds are required...!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const location = useLocation();
  const redirectUrl = location?.search?.slice(6) || "/";

  return (
    <>
      <AuthLayout bottomLinks={<BottomLink />}>
        <div className="auth-logo mx-auto">
          <Link to="/" className="logo logo-dark text-center">
            <span className="logo-lg">
              <img src={logoDark} alt="" height="24" />
            </span>
          </Link>

          <Link to="/" className="logo logo-light text-center">
            <span className="logo-lg">
              <img src={logoLight} alt="" height="24" />
            </span>
          </Link>
        </div>

        <h6 className="h5 mb-0 mt-3">{t("Welcome back!")}</h6>
        <p className="text-muted mt-1 mb-4">
          {t("Enter your email address and password to access admin panel.")}
        </p>

        <VerticalForm<UserData>
          onSubmit={onSubmit}
          resolver={schemaResolver}
          defaultValues={{ email: "", password: "", checkbox: true }}
          formClass="authentication-form"
        >
          <FormInput
            type="email"
            name="email"
            label={t("Email Address")}
            startIcon={<FeatherIcons icon={"mail"} className="icon-dual" />}
            placeholder={t("hello@coderthemes.com")}
            containerClass={"mb-3"}
          />
          <FormInput
            type="password"
            name="password"
            label={t("Password")}
            startIcon={<FeatherIcons icon={"lock"} className="icon-dual" />}
            action={
              <Link
                to="/auth/forget-password"
                className="float-end text-muted text-unline-dashed ms-1"
              >
                {t("Forgot your password?")}
              </Link>
            }
            placeholder={t("Enter your Password")}
            containerClass={"mb-3"}
          ></FormInput>

          <FormInput
            type="checkbox"
            name="checkbox"
            label={t("Remember me")}
            containerClass={"mb-3"}
            defaultChecked
          />
            {/* {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )} */}
          <div className="mb-3 text-center d-grid">
            <Button type="submit">{t("Log In")}</Button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  );
};

export default Login;
