import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const SigninScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <h1> Sign In</h1>
        <div>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <label htmlFor="email"> Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Имэйл хаягаа оруулна уу"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            id="password"
            placeholder="Нууц үгээ оруулна уу"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <label />
        <button className="primary" type="submit">
          Sign In
        </button>
        <div>
          <label />
          <div>
            Шинэ хэрэглэгч?
            <Link to={`/register?redirect=${redirect}`}>
              Шинээр бүртгэл үүсгэх
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninScreen;
