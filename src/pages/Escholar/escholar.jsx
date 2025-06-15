import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flipbox from "../../components/Flipbox"; 

const Escholar = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleClick = (session) => {
    setSelectedYear(session);
  };

    const handleDownload = (filePath) => {
      const link = document.createElement("a");
      link.href = filePath;
      link.download = filePath.split('/').pop(); // Extract the file name from the path
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  const handleBackClick = () => {
    setSelectedYear(null);
  };

  return (
    <div>
      {/* Title Section */}
      <div className="title w-full h-48 py-10 text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center">
          E-Scholars
        </h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">
          Home <FaArrowRight /> News & Calendar <FaArrowRight />{" "}
          <span className="font-medium"> E-Scholars </span>
        </h1>
      </div>
      <section className="bg-silver-light">
        <div className="container">
          <div className="section-title">
            <div className="ps-0 mb-4">
              {selectedYear && (
                <button
                  className="btn-plain-text-with-arrow arrow-theme-colored4 backward-btn"
                  style={{ cursor: "pointer" }}
                  onClick={handleBackClick}
                >
                  <FaArrowLeft /> Go Back
                </button>
              )}
            </div>
            <div className="row" id="view">
              {!selectedYear ? (
                [2024, 2023, 2022, 2021, 2019].map((year) => (
                  <div key={year} className="p-3 col-md-4 col-sm-12">
                    <div
                      className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                      onClick={() => handleClick(year)}
                      style={{
                        textTransform: "capitalize",
                        borderRadius: "1rem",
                        cursor: "pointer",
                        backgroundColor: "#202C45", // Example background color
                      }}
                    >
                      {`Session ${year}-${year + 1}`}
                    </div>
                  </div>
                ))
              ) : (
                <Flipbox
                  selectedYear={selectedYear}
                  handleDownload={handleDownload}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Escholar;
