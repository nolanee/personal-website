import { Document, Page } from 'react-pdf';
import cvPDF from './ENolanCV.pdf';

import React from 'react';

function Home() {
  return (
    <Document file={cvPDF}>
      <Page pageNumber={1} />
    </Document>
  );
}

export default Home;