import React from "react";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  let errorElement;
  if (error || error1) {
      errorElement = <p className="text-danger">Error: {error?.message} {error1?.message}</p>

  }

  if (user || user1) {
    navigate("/home");
  }

  if( loading || loading1){
      <Loading></Loading>
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
      <button onClick={()=> signInWithGithub()} className="btn btn-info d-block mx-auto my-2">
        <span className="mx-1">
          <AiOutlineGithub></AiOutlineGithub>
        </span>{" "}
        Github Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
