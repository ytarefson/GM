import React from 'react';

import Layout from '../components/Layout';

const FormPage = () => (
  <div>
    <Layout>
      <form
        action="../api/email/"
        method="post"
        encType="application/x-www-form-urlencoded"
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  </div>
);

FormPage.getInitialProps = async function(context) {
  return {};
};

export default FormPage;
