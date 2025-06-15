import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Managementcommittie = () => {
  return (
    <div className="w-full ">
      <div className=" title w-full h-48 py-10  text-white bg-orange-500 ">
        <h1 className="lg:text-5xl text-3xl font-medium text-center ">
          SCHOOL MANAGEMENT
        </h1>
        <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">
          Home <FaArrowRight /> About Us <FaArrowRight />{" "}
          <span className="font-medium tracking-tighter "> Management-Committie </span>{" "}
        </h1>
      </div>
      <div className="mt-16 px-6 xl:px-24">
        <h1 className="lg:text-4xl text-3xl font-bold ">Managing Committee</h1>
        <hr className="border-[3px] border-black rounded-md w-[20%] lg:w-[15%] xl:w-[6%] mt-3" />
      </div>
      <p className=" px-2 m-4 xl:px-16 text-start tracking-wide lg:m-8">It was a long cherished dream of Late Maj. S.N. Bhalla and Mrs. Ritu Bhalla to start a school in the Kumaun Region to provide quality education at affordable price to the people of this region. With this vision they put their shoulders to the wheel to sow the seed of LITTLE SCHOLARS in April 1983. They were assisted in this onerous task by some very dedicated and diligent teachers who helped them in nourishing the seed into a lofty banyan and a citadel of learning.</p>
      <div className="overflow-x-auto px-6 xl:px-24 mb-20 mt-10">
        <table className="w-full border-collapse">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="border px-4 py-2">S.No</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">
                Category & Clause of Affiliation Bye-Laws. 2018
              </th>
              <th className="border px-4 py-2">Clause</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                name: "Mrs. Ruma Agarwal",
                category: "Officiating Principal & Member secretary",
                clause: "Clause 8.2.2(a)",
              },
              {
                id: 2,
                name: "Mrs. Manjula Arora",
                category: "Member (Parent/Mother)",
                clause: "Clause 8.2.2(b)",
              },
              {
                id: 3,
                name: "Mr. Gaurav Sharma",
                category: "Member (Parent/Father)",
                clause: "Clause 8.2.2(b)",
              },
              {
                id: 4,
                name: "Mrs. Kamna Chhabra",
                category: "Member (Teacher)",
                clause: "Clause 8.2.2(c)",
              },
              {
                id: 5,
                name: "Mrs. Rashmi Agarwal",
                category: "Member (Teacher)",
                clause: "Clause 8.2.2(c)",
              },
              {
                id: 6,
                name: "Mrs. Sonia Kapoor",
                category: "Member (Educationist)",
                clause: "Clause 8.2.2(d)",
              },
              {
                id: 7,
                name: "Mr. Pradeep K Sapra",
                category: "Member (Educationist)",
                clause: "Clause 8.2.2(d)",
              },
              {
                id: 8,
                name: "Mr. Rohit Bhalla",
                category: "President (BoG Nominee)",
                clause: "Clause 8.2.2(e)",
              },
              {
                id: 9,
                name: "Mr. Pankaj Bhalla",
                category: "Asst Manager (BoG Nominee)",
                clause: "Clause 8.2.2(e)",
              },
              {
                id: 10,
                name: "Mrs. Ritu Bhalla",
                category: "Manager (BoG Nominee)",
                clause: "Clause 8.2.2(e)",
              },
              {
                id: 11,
                name: "Mrs. Ritu Bhalla",
                category: "Manager (BoG Nominee)",
                clause: "Clause 8.2.2(e)",
              },
            ].map((member) => (
              <tr key={member.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-center">{member.id}</td>
                <td className="border px-4 py-2">{member.name}</td>
                <td className="border px-4 py-2">{member.category}</td>
                <td className="border px-4 py-2 text-center">
                  {member.clause}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Managementcommittie;
