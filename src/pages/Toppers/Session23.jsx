import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./toppers.css";



const session23 = () => {
    
      
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
                  { name: 'SUKHMEET KAUR', percentage: '98%', image: '1-SUKHMEET KAUR_98.webp' },
                  { name: 'HARSHI RAJPUT', percentage: '97%', image: '2-HARSHI RAJPUT_97.webp' },
                  { name: 'KOMALPREET KAUR', percentage: '97%', image: '3-KOMALPREET KAUR_97.webp' },
                  { name: 'GUNJAN RAWAT', percentage: '96.8%', image: '4-GUNJAN RAWAT_96.8.webp' },
                  { name: 'VANSH NARULA', percentage: '96.6%', image: '5-VANSH NARULA_96.6.webp' },
                  { name: 'PARTH PUNIT JOSHI', percentage: '96.4%', image: '6-PARTH PUNIT JOSHI_96.4.webp' },
                  { name: 'ARUSH DHASMANA', percentage: '96.2%', image: '7-ARUSH DHASMANA_96.2.webp' },
                  { name: 'GAURAV BISHT', percentage: '95.6%', image: '8-GAURAV BISHT_95.6.webp' },
                  { name: 'OJASV MITTAL', percentage: '95.6%', image: '9-OJASV MITTAL_95.6.webp' },
                  { name: 'YASH LAKHCHAURA', percentage: '95.4%', image: '10-YASH LAKHCHAURA_95.4.webp' },
                  { name: 'ADITYA CHAUHAN', percentage: '94.8%', image: '11-ADITYA CHAUHAN_94.8.webp' },
                  { name: 'SUDARSHAN SINGH', percentage: '94.4%', image: '12-SUDARSHAN SINGH_94.4.webp' },
                  { name: 'GURMIL KAUR SAHNI', percentage: '94%', image: '13-GURMIL KAUR SAHNI_94.webp' },
                  { name: 'SHREY MEHROTRA', percentage: '94%', image: '14-SHREY MEHROTRA_94.webp' },
                  { name: 'SAUMAY AGARWAL', percentage: '93.8%', image: '15-SAUMAY AGARWAL_93.8.webp' },
                  { name: 'PRACHI PANDEY', percentage: '93.4%', image: '16-PRACHI PANDEY_93.4.webp' },
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
        image: "sneha-bisht-966-65aa5dfe97ce6.webp",
      },
      {
        name: "Samriddhi Singh",
        percentage: 96.2,
        subject: "science",
        image: "samriddhi-singh-962-65aa5dfcb7512.webp",
      },
      {
        name: "Vardaan Gupta",
        percentage: 95.8,
        subject: "science",
        image: "vardaan-gupta-958-65aa5e002b86f.webp",
      },
      {
        name: "Samriddhi Bansal",
        percentage: 93.6,
        subject: "commerce",
        image: "manya-agarwal-954-65aa5df9c77ff.webp",
      },
      {
        name: "Manya Agarwal",
        percentage: 95.4,
        subject: "commerce",
        image: "manya-agarwal-954-65aa5df9c77ff.webp",
      },
      {
        name: "Harshita Singh",
        percentage: 94.6,
        subject: "science",
        image: "harshita-singh-946-65aa5e05d5c36.webp",
      },
      {
        name: "Ananya Sharma",
        percentage: 94.2,
        subject: "science",
        image: "ananya-sharma-942-65aa5e06aedd3.webp",
      },
      {
        name: "Krishnansh Sharma",
        percentage: 93.8,
        subject: "science",
        image: "krishnansh-sharma-938-65aa5e07a00a8.webp",
      },
      {
        name: "Palak Gupta",
        percentage: 93.6,
        subject: "commerce",
        image: "palak-gupta-936-65aa5e0899c58.webp",
      },
      {
        name: "Arnav Mehra",
        percentage: 93.2,
        subject: "science",
        image: "arnav-mehra-932-65aa5e09c962d.webp",
      },
      {
        name: "Riya Jain",
        percentage: 93.0,
        subject: "commerce",
        image: "riya-jain-930-65aa5e0a8b123.webp",
      },
      {
        name: "Naman Sharma",
        percentage: 92.8,
        subject: "science",
        image: "naman-sharma-928-65aa5e0b7675a.webp",
      },
      {
        name: "Isha Agarwal",
        percentage: 92.6,
        subject: "commerce",
        image: "isha-agarwal-926-65aa5e0c54324.webp",
      },
      {
        name: "Kavya Mittal",
        percentage: 92.4,
        subject: "science",
        image: "kavya-mittal-924-65aa5e0d2f86f.webp",
      },
      {
        name: "Yashvardhan Singh",
        percentage: 92.2,
        subject: "commerce",
        image: "yashvardhan-singh-922-65aa5e0dff549.webp",
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
                src={`images/toppers/${topper.image}`}
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
     

export default session23;