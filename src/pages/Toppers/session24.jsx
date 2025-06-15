import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./toppers.css";

const session24 = () => {
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
              { name: 'AARNA', percentage: '98.2%', image: 'AARNA.webp' },
              { name: 'ANSH AGARWAL', percentage: '98.2%', image: 'ANSH AGARWAL.webp' },
              { name: 'PRANJALI JOSHI', percentage: '97.6%', image: 'PRANJALI JOSHI.webp' },
              { name: 'ADITI SUYAL', percentage: '96.6%', image: 'ADITI SUYAL.webp' },
              { name: 'PARNEET KAUR', percentage: '96.4%', image: 'PARNEET KAUR.webp' },
              { name: 'SONAKSHI JOSHI', percentage: '96.2%', image: 'SONAKSHI JOSHI.webp' },
              { name: 'ISHA', percentage: '95.6%', image: 'ISHA.webp' },
              { name: 'SANDHYA RAWAT', percentage: '95.6%', image: 'SANDHYA RAWAT.webp' },
              { name: 'ADITYA SINGH', percentage: '95.4%', image: 'ADITYA SINGH.webp' },
              { name: 'SAKSHAM AGARWAL', percentage: '95.4%', image: 'SAKSHAM AGARWAL.webp' },
              { name: 'TAZEEM KHAN', percentage: '95.4%', image: 'TAZEEM KHAN.webp' },
              { name: 'ADITYA YADAV', percentage: '95%', image: 'ADITYA YADAV.webp' },
              { name: 'KANISHK UPADHYAY', percentage: '94.8%', image: 'KANISHK UPADHYAY.webp' },
              { name: 'JASHANDEEP SINGH', percentage: '94.6%', image: 'JASHANDEEP SINGH.webp' }
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
      name: "garv bajaj",
      percentage: "commerce 97%",
      image: "images/toppers/GARV BAJAJ.webp",
    },
    {
      name: "manshi belwal",
      percentage: "commerce 96.2%",
      image: "images/toppers/MANSHI BELWAL.webp",
    },
    {
      name: "swati arya",
      percentage: "commerce 95.6%",
      image: "images/toppers/SWATI ARYA.webp",
    },
    {
      name: "shifa khan",
      percentage: "commerce 94.6%",
      image: "images/toppers/SHIFA KHAN.webp",
    },
    {
      name: "prajjwal pant",
      percentage: "commerce 91.8%",
      image: "images/toppers/PRAJJWAL PANT.webp",
    },
    {
      name: "lakshya goyal",
      percentage: "commerce 91%",
      image: "images/toppers/LAKSHYA GOYAL.webp",
    },
    {
      name: "disha chaudhary",
      percentage: "commerce 90.2%",
      image: "images/toppers/DISHA CHAUDHARY.webp",
    },
    {
      name: "ritika pandey",
      percentage: "commerce 90.2%",
      image: "images/toppers/RITIKA PANDEY.webp",
    },
    {
      name: "arshpreet kaur",
      percentage: "commerce 90%",
      image: "images/toppers/ARSHPREET KAUR.webp",
    },
    {
      name: "shreya bhardwaj",
      percentage: "commerce 90%",
      image: "images/toppers/SHREYA BHARDWAJ.webp",
    },
    {
      name: "avani sharma",
      percentage: "humanities 91.8%",
      image: "images/toppers/AVANI SHARMA.webp",
    },
    {
      name: "akshej gupta",
      percentage: "science 95.2%",
      image: "images/toppers/AKSHEJ GUPTA.webp",
    },
    {
      name: "kavya agarwal",
      percentage: "science 95%",
      image: "images/toppers/KAVYA AGARWAL.webp",
    },
    {
      name: "piyush suyal",
      percentage: "science 95%",
      image: "images/toppers/PIYUSH SUYAL.webp",
    },
    {
      name: "suryansh saxena",
      percentage: "science 95%",
      image: "images/toppers/SURYANSH SAXENA.webp",
    },
    {
      name: "manuj bajaj",
      percentage: "science 94.6%",
      image: "images/toppers/MANUJ BAJAJ.webp",
    }
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

export default session24;
