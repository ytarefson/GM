import React, { Component } from 'react';
import Link from 'next/link';

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
    <style jsx>{`
      .redzone {
        margin-bottom: 30px;
      }
      .redzone .container .row .col-12 .rz-text-container {
        position: relative;
        padding: 30px 0px 30px 0px;
        margin-left: -15px;
        margin-right: -15px;
        background-color: #fff;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
      }
      .redzone .container .row .col-12 .rz-text-container .redzone-text {
        color: #353535;
        font-family: var(--noto-font);
        font-size: 14px;
        line-height: 26px;
        padding-left: 15px;
        padding-right: 15px;
      }
      @media (min-width: 576px) {
        .redzone {
          position: relative;
        }
        .redzone::before {
          content: '';
          display: block;
          position: absolute;
          width: 40%;
          height: 60%;
          right: 0px;
          top: 50%;
          border-radius: 3px;
          transform: translateY(-50%);
          background-color: var(--accent-red);
          opacity: 0.1;
          z-index: -1;
        }
        .redzone::after {
          content: '';
          display: block;
          position: absolute;
          width: 40%;
          height: 40%;
          right: 0px;
          top: 50%;
          border-radius: 3px;
          transform: translateY(-50%);
          background-color: #fafafa;
          z-index: -1;
        }
        .redzone .container .row .col-12 .rz-text-container {
          padding: 30px 15px 30px 60px;
          margin-left: 15px;
          margin-right: 15px;
          overflow: hidden;
        }
        .redzone .container .row .col-12 .rz-text-container::before {
          content: '';
          display: block;
          position: absolute;
          width: 47px;
          height: 80%;
          left: 0px;
          top: 50%;
          border-radius: 3px;
          transform: translateY(-50%);
          background-color: var(--accent-red);
          clip-path: polygon(0 0, 66% 0, 100% 50%, 66% 100%, 0 100%);
        }
        .redzone .container .row .col-12 .rz-text-container::after {
          content: '';
          display: block;
          position: absolute;
          width: 45px;
          height: 60%;
          left: -15px;
          top: 50%;
          border-radius: 3px;
          transform: translateY(-50%);
          background-color: #fafafa;
          clip-path: polygon(0 0, 66% 0, 92% 50%, 66% 100%, 0 100%);
        }
        .redzone .container .row .col-12 .rz-text-container .redzone-text {
          color: #353535;
          font-weight: 500;
          font-family: var(--noto-font);
          font-size: 14px;
          line-height: 24px;
          padding-left: 15px;
          padding-right: 15px;
        }
      }

      @media (min-width: 1200px) {
        .redzone .container .row .col-12 .rz-text-container {
          padding: 45px 30px 45px 75px;
          margin-left: 15px;
          margin-right: 15px;
        }
        .redzone .container .row .col-12 .rz-text-container .redzone-text {
          color: #353535;
          font-family: var(--noto-font);
          font-size: 18px;
          font-weight: 500;
          line-height: 30px;
          padding-left: 15px;
          padding-right: 15px;
        }
      }
    `}</style>
  </div>
);
