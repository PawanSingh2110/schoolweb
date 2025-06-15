import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Feestructure.css';


const Feesstructure = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="title w-full h-48 py-10 text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center">About</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">
          Home <FaArrowRight /> Admissions <FaArrowRight />{" "}
          <span className="font-medium"> Fee-structure</span>
        </h1>
      </div>
      <section>
  <div className="container">
    <div className="section-title">
      {/* <div className="ps-0 mb-4">
        <a
          className="btn-plain-text-with-arrow arrow-theme-colored4 backward-btn"
          style={{ cursor: 'pointer' }}
          onClick={() => getSessions()}
        >
          Go Back
        </a>
      </div> */}
      <div className="row" id="view">
        <div
          onClick={() => download('pdf/2024-25fees.pdf')}
          style={{ cursor: 'pointer' }}
          className="col-md-4 mt-2 flipbox-hover-cstm-class"
        >
          <div className="tm-sc-flipbox">
            <div
              className="tm-sc-flipbox-front bg-theme-colored1-gradient"
              style={{ minHeight: '120px', borderRadius: '1rem' }}
            >
              <div className="flipbox-inner justify-content-center d-flex align-items-center">
                <h4 className="icon-box-title text-white fw-bold">Session 2024-25</h4>
              </div>
            </div>
            <div
              className="tm-sc-flipbox-back bg-theme-colored1-gradient"
              style={{ minHeight: '120px', borderRadius: '1rem' }}
            >
              <div className="flipbox-inner justify-content-center d-flex align-items-center">
                <h4 className="icon-box-title text-white fw-bold">
                  <a
                    target="_self"
                    className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                    href="#"
                  >
                    Download Attachment
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* flipbox (just change url only) */}
        <div
          onClick={() => download('pdf/2023-24fees.pdf')}
          style={{ cursor: 'pointer' }}
          className="col-md-4 mt-2 flipbox-hover-cstm-class"
        >
          <div className="tm-sc-flipbox">
            <div
              className="tm-sc-flipbox-front bg-theme-colored1-gradient"
              style={{ minHeight: '120px', borderRadius: '1rem' }}
            >
              <div className="flipbox-inner justify-content-center d-flex align-items-center">
                <h4 className="icon-box-title text-white fw-bold">Session 2023-24</h4>
              </div>
            </div>
            <div
              className="tm-sc-flipbox-back bg-theme-colored1-gradient"
              style={{ minHeight: '120px', borderRadius: '1rem' }}
            >
              <div className="flipbox-inner justify-content-center d-flex align-items-center">
                <h4 className="icon-box-title text-white fw-bold">
                  <a
                    target="_self"
                    className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                    href="#"
                  >
                    Download Attachment
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* flipbox (just change url only) */}
        <div
          onClick={() => download('pdf/2022-23fees.pdf')}
          style={{ cursor: 'pointer' }}
          className="col-md-4 mt-2 flipbox-hover-cstm-class"
        >
          <div className="tm-sc-flipbox">
            <div
              className="tm-sc-flipbox-front bg-theme-colored1-gradient"
              style={{ minHeight: '120px', borderRadius: '1rem' }}
            >
              <div className="flipbox-inner justify-content-center d-flex align-items-center">
                <h4 className="icon-box-title text-white fw-bold">Session 2022-23</h4>
              </div>
            </div>
            <div
              className="tm-sc-flipbox-back bg-theme-colored1-gradient"
              style={{ minHeight: '120px', borderRadius: '1rem' }}
            >
              <div className="flipbox-inner justify-content-center d-flex align-items-center">
                <h4 className="icon-box-title text-white fw-bold">
                  <a
                    target="_self"
                    className="btn-plain-text-with-arrow arrow-theme-colored2 download-btn text-white"
                    href="#"
                  >
                    Download Attachment
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* flipbox (just change url only) */}
      </div>
    </div>
  </div>
</section>

      </div>
      )};

export default Feesstructure