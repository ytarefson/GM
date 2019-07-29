import React, { Component } from "react";
import "../scss/page-documents.scss";

class pageDocuments extends Component {
  render() {
    return (
      <div>
        <Head
          title="Документация для проектирования ГПУ"
          description="Документация"
        />
        <Layout />
      </div>
    );
  }
}

export default pageDocuments;
