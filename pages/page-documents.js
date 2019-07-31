import React, { Component } from 'react';
import '../scss/page-documents.scss';
import Head from '../components/head';
import Layout from '../components/Layout';
import mtuList from '../components/tables/mtuList';

class PageDocuments extends Component {
  render() {
    let content = '';

    content = mtuList.map((item, index) => (
      <div key={`part-${index}`}>
        <div>{item.label}</div>
        {item.files.map((file, index) => (
          <div key={`sub-${index}`}>
            <div>{file.label}</div>
            <div>{file.path}</div>
          </div>
        ))}
      </div>
    ));

    return (
      <div>
        <Head
          title="Документация для проектирования ГПУ"
          description="Документация"
        />
        <Layout>{content}</Layout>
      </div>
    );
  }
}

export default PageDocuments;
