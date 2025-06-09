import { useState, useEffect, useCallback } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/MayankBharkhadaCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// // ✅ Proper worker setup for Vite
// pdfjs.GlobalWorkerOptions.workerSrc = `cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // const scale = width > 786 ? 1.7 : 0.6;

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", alignItems: "center", height: "100vh" }}>

        <Row className="justify-content-center position-relative mb-4">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload className="me-2" />
            Download CV
          </Button>
        </Row>
      </Row>

      {/* <Row className="resume justify-content-center">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={scale} />
        </Document>
      </Row> */}
    </Container>
  );
}

export default ResumeNew;
