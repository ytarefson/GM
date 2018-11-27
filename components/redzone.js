import React, { Component } from 'react';
import Link from 'next/link';
import '../scss/redzone.scss';

export default ({ children }) => (
  <div className="container-fluid redzone">
    <div className="mycontainer">
      <p className="redzone-text">{children}</p>
    </div>
  </div>
);
