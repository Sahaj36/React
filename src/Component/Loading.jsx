import React from "react";
import Cardloading from "./Cardloading";

function Loading() {
  return (
    <div className="container py-5">
      <a
        className="btn btn-primary disabled placeholder col-4"
        aria-disabled="true"
      ></a>
      <hr style={{ height: "8px" }} className="bg-black" />
      <div className="row">
        <div className="col-md-3 mb-3 ">
          <Cardloading/>
        </div>
        <div className="col-md-3">
          <Cardloading/>
        </div>
        <div className="col-md-3">
          <Cardloading/>
        </div>
        <div className="col-md-3">
          <Cardloading/>
        </div>
        <div className="col-md-3">
          <Cardloading/>
        </div>
        <div className="col-md-3">
          <Cardloading/>
        </div>
        <div className="col-md-3">
          <Cardloading/>
        </div>
        <div className="col-md-3">
          <Cardloading/>
        </div>
      </div>
        </div>
  );
}

export default Loading;
