import React from "react";

const Flipbox = ({ selectedYear, handleDownload }) => {
  const renderSessionContent = () => {
    switch (selectedYear) {
      case 2024:
        return (
          <div className="row" id="view">
          <div
            onClick={() => handleDownload("/pdf/scholar/APR-JUN_2024.pdf")}
            style={{ cursor: "pointer" }}
            className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
          >
            <div className="tm-sc-flipbox">
              <div
                className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                style={{
                  background: "#202C45",
                  minHeight: "120px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4
                    className="icon-box-title text-white fw-bold text-center"
                    style={{
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    APRIL-JUNE 2024
                  </h4>
                </div>
              </div>
              <div
                className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                style={{
                  marginTop: "1rem",
                  background: "#202C45",
                  minHeight: "7px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4 className="icon-box-title text-white fw-bold text-center">
                    <a
                      href="#"
                      target="_self"
                      className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                      onClick={() =>
                        handleDownload("pdf/scholar/APR-JUN_2024.pdf")
                      }
                    >
                      Download Attachment
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
      case 2023:
        return (
          <div className="row" id="view">
          <div
            onClick={() => handleDownload("/pdf/scholar/Oct-Dec 2023-2024.pdf")}
            style={{ cursor: "pointer" }}
            className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
          >
            <div className="tm-sc-flipbox">
              <div
                className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                style={{
                  background: "#202C45",
                  minHeight: "120px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4
                    className="icon-box-title text-white fw-bold text-center"
                    style={{
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                   OCTOBER-DECEMBER
                  </h4>
                </div>
              </div>
              <div
                className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                style={{
                  marginTop: "1rem",
                  background: "#202C45",
                  minHeight: "7px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4 className="icon-box-title text-white fw-bold text-center">
                    <a
                      href="#"
                      target="_self"
                      className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                      onClick={() =>
                        handleDownload("/pdf/scholar/Oct-Dec 2023-2024.pdf")
                      }
                    >
                      Download Attachment
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleDownload("/pdf/scholar/JulySeptember2023_24.pdf")}
            style={{ cursor: "pointer" }}
            className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
          >
            <div className="tm-sc-flipbox">
              <div
                className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                style={{
                  background: "#202C45",
                  minHeight: "120px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4
                    className="icon-box-title text-white fw-bold text-center"
                    style={{
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    JULY-SEPTEMBER
                  </h4>
                </div>
              </div>
              <div
                className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                style={{
                  marginTop: "1rem",
                  background: "#202C45",
                  minHeight: "7px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4 className="icon-box-title text-white fw-bold text-center">
                    <a
                      href="#"
                      target="_self"
                      className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                      onClick={() =>
                        handleDownload("/pdf/scholar/JulySeptember2023_24.pdf")
                      }
                    >
                      Download Attachment
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleDownload("/pdf/scholar/APRIL_JUNE2023_24.pdf")}
            style={{ cursor: "pointer" }}
            className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
          >
            <div className="tm-sc-flipbox">
              <div
                className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                style={{
                  background: "#202C45",
                  minHeight: "120px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4
                    className="icon-box-title text-white fw-bold text-center"
                    style={{
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    APRIL-JUNE
                  </h4>
                </div>
              </div>
              <div
                className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                style={{
                  marginTop: "1rem",
                  background: "#202C45",
                  minHeight: "7px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4 className="icon-box-title text-white fw-bold text-center">
                    <a
                      href="#"
                      target="_self"
                      className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                      onClick={() =>
                        handleDownload("/pdf/scholar/APRIL_JUNE2023_24.pdf")
                      }
                    >
                      Download Attachment
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleDownload("/pdf/scholar/JAN & MAR2023.pdf")}
            style={{ cursor: "pointer" }}
            className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
          >
            <div className="tm-sc-flipbox">
              <div
                className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                style={{
                  background: "#202C45",
                  minHeight: "120px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4
                    className="icon-box-title text-white fw-bold text-center"
                    style={{
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                   JANUARY-MARCH
                  </h4>
                </div>
              </div>
              <div
                className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                style={{
                  marginTop: "1rem",
                  background: "#202C45",
                  minHeight: "7px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4 className="icon-box-title text-white fw-bold text-center">
                    <a
                      href="#"
                      target="_self"
                      className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                      onClick={() =>
                        handleDownload("/pdf/scholar/JAN & MAR2023.pdf")
                      }
                    >
                      Download Attachment
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
        case 2022:
          return (
            <div className="row" id="view">
            <div
              onClick={() => handleDownload("pdf/scholar/APR-JUN_2023.pdf")}
              style={{ cursor: "pointer" }}
              className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
            >
              <div className="tm-sc-flipbox">
                <div
                  className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                  style={{
                    background: "#202C45",
                    minHeight: "120px",
                    borderRadius: "1rem",
                    padding: "20px",
                    marginLeft: "6rem",
                  }}
                >
                  <div className="flipbox-inner justify-content-center d-flex align-items-center">
                    <h4
                      className="icon-box-title text-white fw-bold text-center"
                      style={{
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                    OCTOBER-DECEMBER
                    </h4>
                  </div>
                </div>
                <div
                  className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                  style={{
                    marginTop: "1rem",
                    background: "#202C45",
                    minHeight: "7px",
                    borderRadius: "1rem",
                    padding: "20px",
                    marginLeft: "6rem",
                  }}
                >
                  <div className="flipbox-inner justify-content-center d-flex align-items-center">
                    <h4 className="icon-box-title text-white fw-bold text-center">
                      <a
                        href="#"
                        target="_self"
                        className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                        onClick={() =>
                          handleDownload("pdf/scholar/APR-JUN_2023.pdf")
                        }
                      >
                        Download Attachment
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleDownload("pdf/scholar/APR-JUN_2023.pdf")}
              style={{ cursor: "pointer" }}
              className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
            >
              <div className="tm-sc-flipbox">
                <div
                  className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                  style={{
                    background: "#202C45",
                    minHeight: "120px",
                    borderRadius: "1rem",
                    padding: "20px",
                    marginLeft: "6rem",
                  }}
                >
                  <div className="flipbox-inner justify-content-center d-flex align-items-center">
                    <h4
                      className="icon-box-title text-white fw-bold text-center"
                      style={{
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      JULY-SEPTEMBER
                    </h4>
                  </div>
                </div>
                <div
                  className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                  style={{
                    marginTop: "1rem",
                    background: "#202C45",
                    minHeight: "7px",
                    borderRadius: "1rem",
                    padding: "20px",
                    marginLeft: "6rem",
                  }}
                >
                  <div className="flipbox-inner justify-content-center d-flex align-items-center">
                    <h4 className="icon-box-title text-white fw-bold text-center">
                      <a
                        href="#"
                        target="_self"
                        className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                        onClick={() =>
                          handleDownload("pdf/scholar/APR-JUN_2023.pdf")
                        }
                      >
                        Download Attachment
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleDownload("pdf/scholar/APR-JUN_2023.pdf")}
              style={{ cursor: "pointer" }}
              className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
            >
              <div className="tm-sc-flipbox">
                <div
                  className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                  style={{
                    background: "#202C45",
                    minHeight: "120px",
                    borderRadius: "1rem",
                    padding: "20px",
                    marginLeft: "6rem",
                  }}
                >
                  <div className="flipbox-inner justify-content-center d-flex align-items-center">
                    <h4
                      className="icon-box-title text-white fw-bold text-center"
                      style={{
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      APRIL-JUNE
                    </h4>
                  </div>
                </div>
                <div
                  className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                  style={{
                    marginTop: "1rem",
                    background: "#202C45",
                    minHeight: "7px",
                    borderRadius: "1rem",
                    padding: "20px",
                    marginLeft: "6rem",
                  }}
                >
                  <div className="flipbox-inner justify-content-center d-flex align-items-center">
                    <h4 className="icon-box-title text-white fw-bold text-center">
                      <a
                        href="#"
                        target="_self"
                        className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                        onClick={() =>
                          handleDownload("pdf/scholar/APR-JUN_2023.pdf")
                        }
                      >
                        Download Attachment
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          <div
            onClick={() => handleDownload("pdf/scholar/APR-JUN_2023.pdf")}
            style={{ cursor: "pointer" }}
            className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
          >
            <div className="tm-sc-flipbox">
              <div
                className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                style={{
                  background: "#202C45",
                  minHeight: "120px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4
                    className="icon-box-title text-white fw-bold text-center"
                    style={{
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                   JANUARY-MARCH
                  </h4>
                </div>
              </div>
              <div
                className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                style={{
                  marginTop: "1rem",
                  background: "#202C45",
                  minHeight: "7px",
                  borderRadius: "1rem",
                  padding: "20px",
                  marginLeft: "6rem",
                }}
              >
                <div className="flipbox-inner justify-content-center d-flex align-items-center">
                  <h4 className="icon-box-title text-white fw-bold text-center">
                    <a
                      href="#"
                      target="_self"
                      className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                      onClick={() =>
                        handleDownload("pdf/scholar/APR-JUN_2023.pdf")
                      }
                    >
                      Download Attachment
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          </div>
          
            
           

          );
        
          case 2021:
            return (
              <div className="row" id="view">
              <div
                onClick={() => handleDownload("pdf/scholar/APR-JUN_2023.pdf")}
                style={{ cursor: "pointer" }}
                className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
              >
                <div className="tm-sc-flipbox">
                  <div
                    className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                    style={{
                      background: "#202C45",
                      minHeight: "120px",
                      borderRadius: "1rem",
                      padding: "20px",
                      marginLeft: "6rem",
                    }}
                  >
                    <div className="flipbox-inner justify-content-center d-flex align-items-center">
                      <h4
                        className="icon-box-title text-white fw-bold text-center"
                        style={{
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                      OCTOBER-DECEMBER
                      </h4>
                    </div>
                  </div>
                  <div
                    className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                    style={{
                      marginTop: "1rem",
                      background: "#202C45",
                      minHeight: "7px",
                      borderRadius: "1rem",
                      padding: "20px",
                      marginLeft: "6rem",
                    }}
                  >
                    <div className="flipbox-inner justify-content-center d-flex align-items-center">
                      <h4 className="icon-box-title text-white fw-bold text-center">
                        <a
                          href="#"
                          target="_self"
                          className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                          onClick={() =>
                            handleDownload("pdf/scholar/APR-JUN_2023.pdf")
                          }
                        >
                          Download Attachment
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => handleDownload("pdf/scholar/APR-JUN_2023.pdf")}
                style={{ cursor: "pointer" }}
                className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
              >
                <div className="tm-sc-flipbox">
                  <div
                    className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                    style={{
                      background: "#202C45",
                      minHeight: "120px",
                      borderRadius: "1rem",
                      padding: "20px",
                      marginLeft: "6rem",
                    }}
                  >
                    <div className="flipbox-inner justify-content-center d-flex align-items-center">
                      <h4
                        className="icon-box-title text-white fw-bold text-center"
                        style={{
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                        JULY-SEPTEMBER
                      </h4>
                    </div>
                  </div>
                  <div
                    className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                    style={{
                      marginTop: "1rem",
                      background: "#202C45",
                      minHeight: "7px",
                      borderRadius: "1rem",
                      padding: "20px",
                      marginLeft: "6rem",
                    }}
                  >
                    <div className="flipbox-inner justify-content-center d-flex align-items-center">
                      <h4 className="icon-box-title text-white fw-bold text-center">
                        <a
                          href="#"
                          target="_self"
                          className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                          onClick={() =>
                            handleDownload("pdf/scholar/APR-JUN_2023.pdf")
                          }
                        >
                          Download Attachment
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => handleDownload("pdf/scholar/APR-JUN_2023.pdf")}
                style={{ cursor: "pointer" }}
                className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
              >
                <div className="tm-sc-flipbox">
                  <div
                    className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                    style={{
                      background: "#202C45",
                      minHeight: "120px",
                      borderRadius: "1rem",
                      padding: "20px",
                      marginLeft: "6rem",
                    }}
                  >
                    <div className="flipbox-inner justify-content-center d-flex align-items-center">
                      <h4
                        className="icon-box-title text-white fw-bold text-center"
                        style={{
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                        APRIL-JUNE
                      </h4>
                    </div>
                  </div>
                  <div
                    className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                    style={{
                      marginTop: "1rem",
                      background: "#202C45",
                      minHeight: "7px",
                      borderRadius: "1rem",
                      padding: "20px",
                      marginLeft: "6rem",
                    }}
                  >
                    <div className="flipbox-inner justify-content-center d-flex align-items-center">
                      <h4 className="icon-box-title text-white fw-bold text-center">
                        <a
                          href="#"
                          target="_self"
                          className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                          onClick={() =>
                            handleDownload("pdf/scholar/APR-JUN_2023.pdf")
                          }
                        >
                          Download Attachment
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
           </div>
            
              
             
  
            );
            case 2019:
              return (
                <div className="row" id="view">
                <div
                  onClick={() => handleDownload("pdf/scholar/APR-JUN_2023.pdf")}
                  style={{ cursor: "pointer" }}
                  className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
                >
                  <div className="tm-sc-flipbox">
                    <div
                      className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                      style={{
                        background: "#202C45",
                        minHeight: "120px",
                        borderRadius: "1rem",
                        padding: "20px",
                        marginLeft: "6rem",
                      }}
                    >
                      <div className="flipbox-inner justify-content-center d-flex align-items-center">
                        <h4
                          className="icon-box-title text-white fw-bold text-center"
                          style={{
                            textTransform: "uppercase",
                            margin: 0,
                          }}
                        >
                        OCTOBER-JANUARY
                        </h4>
                      </div>
                    </div>
                    <div
                      className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                      style={{
                        marginTop: "1rem",
                        background: "#202C45",
                        minHeight: "7px",
                        borderRadius: "1rem",
                        padding: "20px",
                        marginLeft: "6rem",
                      }}
                    >
                      <div className="flipbox-inner justify-content-center d-flex align-items-center">
                        <h4 className="icon-box-title text-white fw-bold text-center">
                          <a
                            href="#"
                            target="_self"
                            className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                            onClick={() =>
                              handleDownload("pdf/scholar/APR-JUN_2023.pdf")
                            }
                          >
                            Download Attachment
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => handleDownload("pdf/scholar/APR-JUN_2023.pdf")}
                  style={{ cursor: "pointer" }}
                  className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
                >
                  <div className="tm-sc-flipbox">
                    <div
                      className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                      style={{
                        background: "#202C45",
                        minHeight: "120px",
                        borderRadius: "1rem",
                        padding: "20px",
                        marginLeft: "6rem",
                      }}
                    >
                      <div className="flipbox-inner justify-content-center d-flex align-items-center">
                        <h4
                          className="icon-box-title text-white fw-bold text-center"
                          style={{
                            textTransform: "uppercase",
                            margin: 0,
                          }}
                        >
                          JANUARY-APRIL
                        </h4>
                      </div>
                    </div>
                    <div
                      className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                      style={{
                        marginTop: "1rem",
                        background: "#202C45",
                        minHeight: "7px",
                        borderRadius: "1rem",
                        padding: "20px",
                        marginLeft: "6rem",
                      }}
                    >
                      <div className="flipbox-inner justify-content-center d-flex align-items-center">
                        <h4 className="icon-box-title text-white fw-bold text-center">
                          <a
                            href="#"
                            target="_self"
                            className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                            onClick={() =>
                              handleDownload("pdf/scholar/APR-JUN_2023.pdf")
                            }
                          >
                            Download Attachment
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => handleDownload("pdf/scholar/APR-JUN_2024.pdf")}
                  style={{ cursor: "pointer" }}
                  className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
                >
                  <div className="tm-sc-flipbox">
                    <div
                      className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                      style={{
                        background: "#202C45",
                        minHeight: "120px",
                        borderRadius: "1rem",
                        padding: "20px",
                        marginLeft: "6rem",
                      }}
                    >
                      <div className="flipbox-inner justify-content-center d-flex align-items-center">
                        <h4
                          className="icon-box-title text-white fw-bold text-center"
                          style={{
                            textTransform: "uppercase",
                            margin: 0,
                          }}
                        >
                          MAY-JULY
                        </h4>
                      </div>
                    </div>
                    <div
                      className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                      style={{
                        marginTop: "1rem",
                        background: "#202C45",
                        minHeight: "7px",
                        borderRadius: "1rem",
                        padding: "20px",
                        marginLeft: "6rem",
                      }}
                    >
                      <div className="flipbox-inner justify-content-center d-flex align-items-center">
                        <h4 className="icon-box-title text-white fw-bold text-center">
                          <a
                            href="#"
                            target="_self"
                            className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                            onClick={() =>
                              handleDownload("pdf/scholar/APR-JUN_2024.pdf")
                            }
                          >
                            Download Attachment
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              <div
                onClick={() => handleDownload("pdf/scholar/APR-JUN_2023.pdf")}
                style={{ cursor: "pointer" }}
                className="col-md-4 mt-2 ps-0 flipbox-hover-cstm-class"
              >
                <div className="tm-sc-flipbox">
                  <div
                    className="tm-sc-flipbox-front bg-theme-colored1-gradient"
                    style={{
                      background: "#202C45",
                      minHeight: "120px",
                      borderRadius: "1rem",
                      padding: "20px",
                      marginLeft: "6rem",
                    }}
                  >
                    <div className="flipbox-inner justify-content-center d-flex align-items-center">
                      <h4
                        className="icon-box-title text-white fw-bold text-center"
                        style={{
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                       JULY-OCTOBER
                      </h4>
                    </div>
                  </div>
                  <div
                    className="tm-sc-flipbox-back bg-theme-colored1-gradient"
                    style={{
                      marginTop: "1rem",
                      background: "#202C45",
                      minHeight: "7px",
                      borderRadius: "1rem",
                      padding: "20px",
                      marginLeft: "6rem",
                    }}
                  >
                    <div className="flipbox-inner justify-content-center d-flex align-items-center">
                      <h4 className="icon-box-title text-white fw-bold text-center">
                        <a
                          href="#"
                          target="_self"
                          className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                          onClick={() =>
                            handleDownload("pdf/scholar/APR-JUN_2023.pdf")
                          }
                        >
                          Download Attachment
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
    
              );
      // Add more cases as needed for other years
      default:
        return <div>No sessions available for this year.</div>;
    }
  };

  return (
    <div className="container">
      <div className="ps-0 mb-4"></div>
      <div id="heading" className="fs-3 text-decoration-underline">
        Session {selectedYear}-{selectedYear + 1}
      </div>
      <div className="row" id="view">
        {renderSessionContent()}
      </div>
    </div>
  );
};

export default Flipbox;
