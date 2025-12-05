import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { Download, ChevronRight, ChevronLeft } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download"
        >
          <Download className="icon" />
        </a>
      </div>
      <div key={pageNumber} className="flex items-center gap-2 mt-2 justify-end">
        <button
          onClick={prevPage}
          disabled={pageNumber <= 1}
          className="p-1 disabled:opacity-20"
        >
          <ChevronLeft size={18} />
        </button>

        <span>
          Page {pageNumber} / {numPages || "…"}
        </span>

        <button
          onClick={nextPage}
          disabled={pageNumber >= numPages}
          className="p-1 disabled:opacity-20"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page 
        pageNumber={pageNumber} 
        renderTextLayer 
        renderAnnotationLayer
         />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
