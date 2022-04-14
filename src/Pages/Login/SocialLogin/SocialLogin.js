import React from "react";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;
  if (error) {
      errorElement = <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <button onClick={()=> signInWithGoogle()} className="btn btn-info d-block mx-auto my-2">
        <span className="mx-1">
          <FcGoogle></FcGoogle>
        </span>{" "}
        Google Sign In
      </button>
      <button className="btn btn-info d-block mx-auto my-2">
        <span className="mx-1">
          <FaFacebook></FaFacebook>
        </span>{" "}
        Facebook Sign In
      </button>
      <button className="btn btn-info d-block mx-auto my-2">
        <span className="mx-1">
          <AiOutlineGithub></AiOutlineGithub>
        </span>{" "}
        Github Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
