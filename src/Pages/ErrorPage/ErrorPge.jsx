import React from "react";
import { Link } from "react-router-dom";

const ErrorPge = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] space-y-3">
      <h5 className="text-red-600 text-5xl font-bold">Upcoming Features</h5>
      <p className="text-black">Wait for Few days to Enjoy This Features</p>
      <Link to={"/"} className="btn-primary rounded-md">
        Go to Home Page
      </Link>
    </div>
  );
};

export default ErrorPge;
