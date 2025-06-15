import React, { useState } from "react";
import "./component.css";

const Message = () => {
  const [value, setValue] = useState("Founder");
  return (
    <div className="message mt-16  p-5   ">
      <div className="px-10 py-16">
        <h1 className="text-4xl text-white font-bold">Message's</h1>
        <hr className="border-[3px] border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full xl:w-[90%]  bg-black/60 rounded-3xl text-white mx-auto p-5 mb-28">
        {/* founder/priciple */}
        <div className=" col-span-1 p-5 ">
          <div className="flex flex-col gap-4 ">
            <button
              className= {`px-5 py-3  : text-start rounded-xl ${value=== "Founder"? "bg-slate-800": "bg-transparent"} `}
              onClick={() => setValue("Founder")}
            >
              Founder
            </button>
            <button
              className={`px-5 py-3  : text-start rounded-xl ${value=== "Principle"? "bg-slate-800": "bg-transparent"} `}
              onClick={() => setValue("Principle")}
            >
              Principle
            </button>
          </div>
        </div>
        {/* comtainer */}
        <div className=" col-span-2 p-9 border-[3px]  rounded-3xl">
          <div>
            {value === "Founder" ? (
              <div>
                <div className="wrapper ">
                  <img
                    src="https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D"
                    className=" xl:max-w-[320px] rounded-lg float-left mr-4 "
                    alt=""
                  />
                  <div className="text-box mt-5 xl:mt-0">
                    <p className=" tracking-tighter text-white">
                      Dear Parents & Students, Foundation of every nation is
                      education. The objective of education is to prepare the
                      young to educate themselves. It is a continuous life long
                      process and school is one of the most important components
                      of this process. At LITTLE SCHOLARS, Kashipur the task of
                      guiding children towards their journey to adulthood is
                      taken up with utmost seriousness through strategically and
                      scientifically planned steps so that the students and
                      parents relax and enjoy the process of becoming lifelong
                      learners...
                      <button className="text-red-600">Learn More</button>
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className="font-bold text-xl text-white  ">
                    Ms. Ritu Bhalla
                  </h1>
                  <h1 className="font-bold text-xl text-white ">(Founder)</h1>
                </div>
              </div>
            ) : (
              <div>
                <div className="wapper">
                  <img
                    width={400}
                    src="https://images.unsplash.com/photo-1558962009-34fff2bd2e9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className=" xl:max-w-[320px] float-left mr-5 rounded-xl "
                  />
                  <p className=" tracking-tighter text-white mt-5 xl:mt-0">
                    Little Scholars is a journey of self-discovery for a child
                    as they grow to become young adults. The school will equip
                    him to excel in academics, and to be savvy in through a
                    Hybrid learning platform. The student will be encouraged to
                    discover their interests, talents and aptitudes, and learn
                    to form their opinions and role in society. This is achieved
                    in a nurturing environment, where the Mentor enacts the role
                    of a Second Parent. An important feature of this process is
                    the school’s provision of rich choices, be they in courses
                    of academics, co-curricular activities in artistic, creative
                    and intellectual activities...
                    <button className="text-red-600">Learn More</button>
                  </p>
                </div>
                <div className="mt-5 text-start ">
                  <h1 className="font-bold text-xl text-white  ">
                    Ms. Shikha Gautum
                  </h1>
                  <h1 className="font-bold text-xl text-white ">(Principal)</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

