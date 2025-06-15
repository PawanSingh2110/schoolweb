import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./faq.css";

const faq = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="title w-full h-48 py-10 text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center">About</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">
          Home <FaArrowRight /> Admissions <FaArrowRight />{" "}
          <span className="font-medium"> FAQ's</span>
        </h1>
      </div>

      {/* Accordion Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="accordion tm-accordion accordion-classic accordion-theme-colored1" id="accordion500">

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading501">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse501" aria-expanded="true" aria-controls="collapse501">
                      <strong>Does the School have facilities to address Special Education Needs? </strong>
                    </button>
                  </h2>
                  <div id="collapse501" className="accordion-collapse collapse show" aria-labelledby="heading501" data-bs-parent="#accordion500">
                    <div className="accordion-body">
                      The School has a well-equipped Special Education Needs Department. Please visit here regarding the capability of the School to handle Special Education Needs.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading502">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse502" aria-expanded="false" aria-controls="collapse502">
                      <strong>Whom should a parent approach for any extraordinary leave? </strong>
                    </button>
                  </h2>
                  <div id="collapse502" className="accordion-collapse collapse" aria-labelledby="heading502" data-bs-parent="#accordion500">
                    <div className="accordion-body">
                      If the child is in Junior School the parent should contact Head of Junior School. If the child is in Senior School the parent should contact Dean of Student Welfare &amp; Discipline.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading503">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse503" aria-expanded="false" aria-controls="collapse503">
                      <strong>What documentation is needed for the admission of an adopted student?</strong>
                    </button>
                  </h2>
                  <div id="collapse503" className="accordion-collapse collapse" aria-labelledby="heading503" data-bs-parent="#accordion500">
                    <div className="accordion-body">
                      You are advised to contact admission in-charge for the details because requirements may vary from case to case.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading504">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse504" aria-expanded="false" aria-controls="collapse504">
                      <strong>Whom should I contact for admissions? </strong>
                    </button>
                  </h2>
                  <div id="collapse504" className="accordion-collapse collapse" aria-labelledby="heading504" data-bs-parent="#accordion500">
                    <div className="accordion-body">
                      Admission in charge, Little Scholars School, Kashipur - (Off) +91-9105666371 &amp; Email @ littlescholars.kasipur@gmail.com
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading505">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse505" aria-expanded="false" aria-controls="collapse505">
                      <strong>When are the next dates for Aptitude Assessment for admission?</strong>
                    </button>
                  </h2>
                  <div id="collapse505" className="accordion-collapse collapse" aria-labelledby="heading505" data-bs-parent="#accordion500">
                    <div className="accordion-body">
                      The Common Aptitude Assessment (CAA) is conducted during the month of February and March for the admission in April for the year. The Registration is open. Enrolment for this assessment is open till one week prior to the date of the Assessment.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading506">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse506" aria-expanded="false" aria-controls="collapse506">
                      <strong>What are the timings for enquiry?</strong>
                    </button>
                  </h2>
                  <div id="collapse506" className="accordion-collapse collapse" aria-labelledby="heading506" data-bs-parent="#accordion500">
                    <div className="accordion-body">
                      Please call at the School Admission Office between 9 am - 3 pm from Monday to Saturday. After working hours by sending SMS/Whatsapp on + 91 9105666371. The concerned personnel will get back to you in next 24 hours.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading507">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse507" aria-expanded="false" aria-controls="collapse507">
                      <strong>Where can I locate the General Entrance form? </strong>
                    </button>
                  </h2>
                  <div id="collapse507" className="accordion-collapse collapse" aria-labelledby="heading507" data-bs-parent="#accordion500">
                    <div className="accordion-body">
                      Registration Form can be downloaded here or could be collected it in person from the School Office on all working days between 9 am to 3 pm.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading508">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse508" aria-expanded="false" aria-controls="collapse508">
                      <strong>What do I need in order to prepare for the Aptitude Assessments? </strong>
                    </button>
                  </h2>
                  <div id="collapse508" className="accordion-collapse collapse" aria-labelledby="heading508" data-bs-parent="#accordion500">
                    <div className="accordion-body">
                      Syllabus for the Aptitude Assessment in English, Mathematics and Hindi shall be made available on filling the Registration Form.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default faq;
