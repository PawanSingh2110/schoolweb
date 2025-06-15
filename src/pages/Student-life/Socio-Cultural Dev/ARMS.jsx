import React, { useState } from 'react';
import Arts from '../../images/arts.webp';
import ICT from '../../images/ict.webp';

const ARMS = () => {
    const [activeSubTab, setActiveSubTab] = useState('JSR');
  return (
    
    <div id="arms" className="content">
      <h2>The open ARMS Project – Inclusive Education</h2>
      <p>
      The journey to becoming an Inclusive School may be long and challenging at times, but ultimately this journey can strengthen a school community and benefit ALL children. "Inclusion" does not simply mean the placement of students with disabilities in general education classes. This process must incorporate fundamental change in the way a school community supports and addresses the individual needs of each child. In 2018, Little Scholars incorporated ‘The open ARMS project after a pilot project carried out by their own students in collaboration with JSR Indu Samiti; a Residential School for the Specially Abled of creating a space within its curriculum planner which has now collaborated with other NGO’s and schools. As such, effective models of inclusive education not only benefit students with disabilities, but also create an environment in which every student; including those who do not have disabilities, has the opportunity to flourish.

One of the most important principles of inclusive education is that no two learners are alike, and so inclusive schools place great importance on creating opportunities for students to learn and be assessed in a variety of ways. Teachers therefore must consider a wide range of learning modalities (visual, auditory, kinaesthetic, etc.) in designing instruction and help diversify the educational experience of the students.
      </p>

      <div className="sub-tabs">
        <div 
          className={`sub-tab ${activeSubTab === 'JSR' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('JSR')}
        >
          JSR Indu Samiti
        </div>
        <div 
          className={`sub-tab ${activeSubTab === 'NGO' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('NGO')}
        >
          Khwahish NGO

        </div>
        <div 
          className={`sub-tab ${activeSubTab === 'Lepers' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('Lepers')}
        >
         Lepers Colony
        </div>
      </div>
      
      {/* Sub-Tab Content */}
      {activeSubTab === 'JSR' && (
        <div className="sub-content">
          <h3>JSR Indu Samiti</h3>
          <img src={Arts} alt="img" />
          <p>i. Educational: Special Educators specialized in the respective fields along with volunteers and part time physiotherapists, speech therapists and care takers provides a healthy learning environment to differently abled children belonging to the categories of Mental Retardation, Hearing Impaired, Visually Impaired and Physically disabled.</p>
          <p>ii. Residential: Residential facility along with healthy meals is provided to the students. Daily extra-curricular activities are designed by Hostel warden to keep the students fresh and shining all the time.</p>
          <p>iii. Vocational Training: Vocational training is provided to the students to make them self reliant. Skill centre at JSR have Computer lab, Sewing and Tailoring Lab, Electronics Lab, Sanitary and Plubming Lab, Beauty Parlour cum Salon, Candle Making Lab and Sweater Machine Room wherein the students are trained in works with respect to their interest.</p>
        </div>
      )}

      {activeSubTab === 'NGO' && (
        <div className="sub-content">
          <h3>Khwahish NGO</h3>
          <img src={ICT} alt="img" />
          <p>Khwahish is a humble effort by students and teachers to sow the seeds of primary education among the children as well as adults. Some of the students attend schools while some others are housewives or daily wage earners. The aim is to motivate people to come forward and share their valuable time and knowledge with these educationally malnourished sections. These souls appreciate even half an hour of your time.Though there's nothing more important than your knowledge, but donations too are necessary .Be a philanthropist by donating your time or money.

Apart from this, khwahish works for the animal welfare and have rescued more than 1000 stray animals till date. Visiting hours 4-6 pm.</p>
          
        </div>
      )}

      {activeSubTab === 'Lepers' && (
        <div className="sub-content">
          <h3>Lepers Colony</h3>
        </div>
      )}
      
    </div>
  );
};

export default ARMS;