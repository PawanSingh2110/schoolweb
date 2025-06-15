import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Schooltime = () => {
  return (
  
    <div>
      <div className="title w-full h-48 py-10 text-white bg-orange-500">
        <h1 className="lg:text-5xl text-3xl font-medium text-center">About</h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">
          Home <FaArrowRight /> Admissions <FaArrowRight />{" "}
          <span className="font-medium"> School Timing</span>
        </h1>
      </div>
      <section className="bg-silver-light" style={{ minHeight: '100vh' }}>
  <div className="container">
    <div className="section-title">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb-60">
            <div className="row justify-content-center">
              <div className="row my-3 justify-content-center">
                <div className="col-sm-12 col-md-8">
                  <div className="row">
                    <div className="col-sm-6 scl-timing-hover mt-2">
                      <div className="d-flex justify-content-center fw-bold align-items-center bg-dark text-white text-center rounded p-4">
                        Summer Timing:- 07:20 am to 1:30 pm
                      </div>
                    </div>
                    <div className="col-sm-6 scl-timing-hover mt-2">
                      <div className="d-flex justify-content-center fw-bold align-items-center bg-dark text-white text-center rounded p-4"
                      style={{ transitionDuration: '0.4s' }}> 

                        Winter Timing:- 07:50 am to 2:00 pm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-12 col-md-8">
                  <table className="table border table-hover">
                    <thead>
                      <tr>
                        <th>Lesson</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1st lesson</td>
                        <td>00:45 Min</td>
                      </tr>
                      <tr>
                        <td>2nd lesson</td>
                        <td>00:40 Min</td>
                      </tr>
                      <tr>
                        <td>3rd lesson</td>
                        <td>00:40 Min</td>
                      </tr>
                      <tr>
                        <td>4th lesson</td>
                        <td>00:40 Min</td>
                      </tr>
                      <tr>
                        <td>5th lesson</td>
                        <td>00:40 Min</td>
                      </tr>
                      <tr>
                        <td>Break/Recess</td>
                        <td>00:20 Min</td>
                      </tr>
                      <tr>
                        <td>6th lesson</td>
                        <td>00:40 Min</td>
                      </tr>
                      <tr>
                        <td>7th lesson</td>
                        <td>00:35 Min</td>
                      </tr>
                      <tr>
                        <td>8th lesson</td>
                        <td>00:35 Min</td>
                      </tr>
                      <tr>
                        <td>9th lesson</td>
                        <td>00:35 Min</td>
                      </tr>
                      <tr>
                        <td colSpan="2" className="text-center">
                          4th Saturday will be a half day.
                        </td>
                      </tr>
                      <tr>
                        <th colSpan="2" className="text-center">
                          Zero lesson plan
                        </th>
                      </tr>
                      <tr>
                        <td colSpan="2">Monday - General Assembly &amp; Unit Test</td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          Wednesday to Friday - Activity lesson / Class wise Assembly/Special Assembly
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* col-sm-12 */}
      </div>
    </div>
  </div>
</section>

      </div>

      );
      };
export default Schooltime;