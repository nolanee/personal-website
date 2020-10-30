import { Document, Page } from 'react-pdf';
import WebPage from './WebPage';
import cvPDF from './ENolanCV.pdf';

import React from 'react';

function Home() {
  return (
    <div>
    <WebPage>
      <Document file={cvPDF}>
        <Page pageNumber={1} />
      </Document>
    </WebPage>
    </div>
  );
}

export default Home;