import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./toppers.css";



const Session22 = () => {
    
      
    return (
        <div className="row" id="view">
        <div className="section-title">
          <div className="row">
            <div className="col-md-8">
              <div className="mb-60" style={{marginBottom:'1rem'}}>
                <div className="tm-sc tm-sc-section-title section-title">
                  <div className="title-wrapper">
                    <h2 className="text-uppercase line-bottom line-bottom-theme-colored1">Session 2023-24</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="nav nav-tabs boot-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#profile2023-24X" role="tab" aria-controls="profile" aria-selected="false">Class 'X'</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact2023-24XII" role="tab" aria-controls="contact" aria-selected="false">Class 'XII'</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade active show" id="profile2023-24X" role="tabpanel" aria-labelledby="profile-tab">
            <div className="row" id="classX">
              {[
                    { name: "AKSHEJ GUPTA", percentage: "97.8%", image: "1_AKSHEJ GUPTA_97.8.webp" },
                    { name: "VASHITVA AGRAWAL", percentage: "97.8%", image: "2_VASHITVA AGRAWAL_97.8.webp" },
                    { name: "APOORVA RAWAT", percentage: "97.6%", image: "3_APOORVA RAWAT_97.6.webp" },
                    { name: "SURYANSH SAXENA", percentage: "97%", image: "4_SURYANSH SAXENA_97.webp" },
                    { name: "PAKHI AGARWAL", percentage: "97%", image: "5_PAKHI AGARWAL_97.webp" },
                    { name: "GARV BAJAJ", percentage: "95.8%", image: "6_GARV BAJAJ2_95.8.webp" },
                    { name: "SHREY PRATAP SINGH", percentage: "95.8%", image: "7_SHREY PRATAP SINGH_95.8.webp" },
                    { name: "ANAV KUMAR", percentage: "95.8%", image: "8_ANAV KUMAR_95.8.webp" },
                    { name: "PIYUSH SUYAL", percentage: "95.6%", image: "9_PIYUSH SUYAL_95.6.webp" },
                    { name: "ISHAAN PUNETHA", percentage: "95.4%", image: "10_ISHAAN PUNETHA_95.4.webp" },
                    { name: "VANSH NAUTIYAL", percentage: "95.4%", image: "11_VANSH NAUTIYAL_95.4.webp" },
                    { name: "KAVYA AGARWAL", percentage: "95.2%", image: "12_KAVYA AGARWAL_95.2.webp" },
                    { name: "MITUL JOSHI", percentage: "95%", image: "13_MITUL JOSHI_95.webp" },
                    { name: "MANAS CHAUHAN", percentage: "94.6%", image: "14_MANAS CHAUHAN_94.6.webp" },
                    { name: "AVIRAL MATHUR", percentage: "94.4%", image: "15_AVIRAL MATHUR_94.4.webp" },
                ].map((topper, index) => (
                    <div className="col-xs-12 col-sm-6 col-md-2 sm-text-center" key={index}>
                      <div className="pop-out">
                        <div className="topper-img d-flex justify-content-center">
                          <img
                            className="img rounded"
                            style={{ height: '200px', objectFit: 'cover', border: '1px solid #202c45', borderRadius: '5px' }}
                            alt={topper.name}
                            src={`images/toppers/${topper.image}`}
                          />
                        </div>
                        <div className="team-bottom-part bg-lighter text-center p-10 pt-20 pb-10" style={{ width: '100%' }}>
                          <h4 className="text-uppercase font-raleway font-weight-600 m-0">{topper.name}</h4>
                          <h5 className="text-theme-color1 mb-20" style={{ textTransform: 'Capitalize' }}>{topper.percentage}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="tab-pane fade" id="contact2023-24XII" role="tabpanel" aria-labelledby="contact-tab">
          {/* Content for Class XII */}
          <div className="row" id="classXII">
  {[
    {
        name: "Sneha Bisht",
        percentage: 96.6,
        subject: "science",
        imgSrc: "images/toppers/sneha-bisht-966-65aa5dfe97ce6.webp",
      },
      {
        name: "Samriddhi Singh",
        percentage: 96.2,
        subject: "science",
        imgSrc: "images/toppers/samriddhi-singh-962-65aa5dfcb7512.webp",
      },
      {
        name: "Vardaan Gupta",
        percentage: 95.8,
        subject: "science",
        imgSrc: "images/toppers/vardaan-gupta-958-65aa5e002b86f.webp",
      },
      {
        name: "Samriddhi Bansal",
        percentage: 93.6,
        subject: "commerce",
        imgSrc: "images/toppers/manya-agarwal-954-65aa5df9c77ff.webp",
      },
      {
        name: "Manya Agarwal",
        percentage: 95.4,
        subject: "commerce",
        imgSrc: "images/toppers/manya-agarwal-954-65aa5df9c77ff.webp",
      },
      {
        name: "Harshita Singh",
        percentage: 94.6,
        subject: "science",
        imgSrc: "images/toppers/harshita-singh-946-65aa5e05d5c36.webp",
      },
      {
        name: "Ananya Sharma",
        percentage: 94.2,
        subject: "science",
        imgSrc: "images/toppers/ananya-sharma-942-65aa5e06aedd3.webp",
      },
      {
        name: "Krishnansh Sharma",
        percentage: 93.8,
        subject: "science",
        imgSrc: "images/toppers/krishnansh-sharma-938-65aa5e07a00a8.webp",
      },
      {
        name: "Palak Gupta",
        percentage: 93.6,
        subject: "commerce",
        imgSrc: "images/toppers/palak-gupta-936-65aa5e0899c58.webp",
      },
      {
        name: "Arnav Mehra",
        percentage: 93.2,
        subject: "science",
        imgSrc: "images/toppers/arnav-mehra-932-65aa5e09c962d.webp",
      },
      {
        name: "Riya Jain",
        percentage: 93.0,
        subject: "commerce",
        imgSrc: "images/toppers/riya-jain-930-65aa5e0a8b123.webp",
      },
      {
        name: "Naman Sharma",
        percentage: 92.8,
        subject: "science",
        imgSrc: "images/toppers/naman-sharma-928-65aa5e0b7675a.webp",
      },
      {
        name: "Isha Agarwal",
        percentage: 92.6,
        subject: "commerce",
        imgSrc: "images/toppers/isha-agarwal-926-65aa5e0c54324.webp",
      },
      {
        name: "Kavya Mittal",
        percentage: 92.4,
        subject: "science",
        imgSrc: "images/toppers/kavya-mittal-924-65aa5e0d2f86f.webp",
      },
      {
        name: "Yashvardhan Singh",
        percentage: 92.2,
        subject: "commerce",
        imgSrc: "images/toppers/yashvardhan-singh-922-65aa5e0dff549.webp",
      },
    ].map((topper, index) => (
        <div
          key={index}
          className="col-xs-12 col-sm-6 col-md-2 sm-text-center"
        >
          <div className="pop-out">
            <div className="topper-img d-flex justify-content-center">
              <img
                className="img rounded"
                style={{
                  height: "200px",
                  objectFit: "cover",
                  border: "1px solid #202c45",
                  borderRadius: "5px",
                }}
                alt=""
                src={topper.image}
              />
            </div>
            <div
              className="team-bottom-part bg-lighter text-center p-10 pt-20 pb-10"
              style={{ width: "100%" }}
            >
              <h4 className="text-uppercase font-raleway font-weight-600 m-0">
                {topper.name}
              </h4>
              <h5
                className="text-theme-color1 mb-20"
                style={{ textTransform: "capitalize" }}
              >
                {topper.percentage}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
            </div>
          </div>
        </div>
      );
    };
     

export default Session22;