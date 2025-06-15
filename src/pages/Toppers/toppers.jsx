import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Session24 from './session24';
import Session23 from './Session23';
import Session22 from './Session22';
import "./toppers.css";

const toppers = () => {
    const [selectedYear, setSelectedYear] = useState(null);

   

    const handleYearClick = (year) => {
        setSelectedYear(year);
    };

    return (
        <div>
            {/* Title Section */}
            <div className="title w-full h-48 py-10 text-white bg-blue-500">
                <h1 className="lg:text-5xl text-3xl font-medium text-center">Top Performers</h1>
                <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">
                    Home <FaArrowRight /> Top Performers <FaArrowRight />{" "}
                    <span className="font-medium"> Yearly Top Performers</span>
                </h1>
            </div>
            <section className="bg-light-gray">
                <div className="container">
                    <div className="section-title">
                        <div className="ps-0 mb-4">
                            <button
                                className="btn-plain-text-with-arrow arrow-theme-colored4 backward-btn"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setSelectedYear(null)}
                            >
                                Go Back
                            </button>
                        </div>
                        <div className="row" id="view">
                            {!selectedYear ? (
                                <>
                                    <div className="p-3 col-md-4 col-sm-12">
                                        <div
                                            className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                                            onClick={() => handleYearClick(2023)}
                                            style={{
                                                textTransform: 'capitalize',
                                                borderRadius: '1rem',
                                                cursor: 'pointer',
                                                backgroundColor: '#202C45', // Example background color
                                            }}
                                        >
                                            2023-24
                                        </div>
                                    </div>
                                    <div className="p-3 col-md-4 col-sm-12">
                                        <div
                                            className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                                            onClick={() => handleYearClick(2022)}
                                            style={{
                                                textTransform: 'capitalize',
                                                borderRadius: '1rem',
                                                cursor: 'pointer',
                                                backgroundColor: '#202C45', // Example background color
                                            }}
                                        >
                                            2022-23
                                        </div>
                                    </div>

                                    <div className="p-3 col-md-4 col-sm-12">
                                        <div
                                            className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                                            onClick={() => handleYearClick(2021)}
                                            style={{
                                                textTransform: 'capitalize',
                                                borderRadius: '1rem',
                                                cursor: 'pointer',
                                                backgroundColor: '#202C45', // Example background color
                                            }}
                                        >
                                            2021-22
                                        </div>
                                    </div>

                                    <div className="p-3 col-md-4 col-sm-12">
                                        <div
                                            className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                                            onClick={() => handleYearClick(2020)}
                                            style={{
                                                textTransform: 'capitalize',
                                                borderRadius: '1rem',
                                                cursor: 'pointer',
                                                backgroundColor: '#202C45', // Example background color
                                            }}
                                        >
                                            2020-21
                                        </div>
                                    </div>

                                    <div className="p-3 col-md-4 col-sm-12">
                                        <div
                                            className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                                            onClick={() => handleYearClick(2019)}
                                            style={{
                                                textTransform: 'capitalize',
                                                borderRadius: '1rem',
                                                cursor: 'pointer',
                                                backgroundColor: '#202C45', // Example background color
                                            }}
                                        >
                                            2019-20
                                        </div>
                                    </div>

                                    <div className="p-3 col-md-4 col-sm-12">
                                        <div
                                            className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                                            onClick={() => handleYearClick(2018)}
                                            style={{
                                                textTransform: 'capitalize',
                                                borderRadius: '1rem',
                                                cursor: 'pointer',
                                                backgroundColor: '#202C45', // Example background color
                                            }}
                                        >
                                            2018-19
                                        </div>
                                    </div>

                                    <div className="p-3 col-md-4 col-sm-12">
                                        <div
                                            className="fs-5 hoverShadow text-center border rounded py-5 text-white"
                                            onClick={() => handleYearClick(2018)}
                                            style={{
                                                textTransform: 'capitalize',
                                                borderRadius: '1rem',
                                                cursor: 'pointer',
                                                backgroundColor: '#202C45', // Example background color
                                            }}
                                        >
                                            2017-18
                                        </div>
                                    </div>
                                    {/* Add more years here */}
                                </>
                                  ) : selectedYear === 2023 ? (
                               <Session24 />
                            ) :
                            selectedYear === 2022 ? (
                                <Session23 />
                            ):(
                                selectedYear === 2021 ? (
                                    <Session22 />
                                ):
                               
                                
                                toppers[selectedYear].map((topper, index) => (
                                    <div key={index} className="p-3 col-md-3 d-flex flex-column hoverShadow rounded col-sm-12">
                                        <div
                                            className="img mx-auto"
                                            style={{ border: '1px solid #202C45', borderRadius: '5px' }}
                                        >
                                            <img
                                                className="rounded object-fit-contain"
                                                style={{ height: '200px' }}
                                                src={topper.img}
                                                alt={topper.name}
                                            />
                                        </div>
                                        <div className="d-flex text-center flex-column description">
                                            <div className="name" style={{ textTransform: 'capitalize' }}>
                                                {topper.name}
                                            </div>
                                            <div style={{ textTransform: 'capitalize' }}>{topper.role}</div>
                                        </div>
                                    </div>
                                ))
                            )};
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default toppers;
