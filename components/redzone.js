import React, { Component } from "react";
import Link from "next/link";
import "../scss/redzone.scss";

export default ({ children }) => (
  <div className="container-fluid redzone">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="rz-text-container">
            <p className="redzone-text">{children}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
