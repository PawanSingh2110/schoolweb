import React, { useState } from 'react';
import BeenaJoshi from '../../images/beena_joshi.webp';
import Archana from '../../images/archana_khanna.webp';
import Divya from '../../images//diviya_arora.webp';
import Manish from '../../images/manish_chandra_sharma.webp';
import Sartja from '../../images/sartja_hussain.webp';
import Public from '../../images/publications.webp';
import Arts from '../../images/arts.webp';
import ICT from '../../images/ict.webp';
import Music from '../../images//music.webp';
import Quiz from '../../images/quiz.webp';


const teacherData = {
  Arts: [
    { name: 'Ms. BEENA JOSHI', photo: BeenaJoshi }
  ],
  Publications: [
    { name: 'Mr. MANISH CHANDRA SHARMA', photo: Manish }
  ],
  Music: [
    { name: 'Ms. ARCHANA KHANNA', photo: Archana }
  ],
  ICT: [
    { name: 'Mr. SARTAJ HUSSAIN', photo: Sartja },
    { name: 'Mr. MANISH CHANDRA SHARMA', photo: Manish }
  ],
  Quiz: [
    { name: 'Ms. DIVYA ARORA', photo: Divya }
  ]
};

const ClubActivities = () => {
  const [activeSubTab, setActiveSubTab] = useState('Arts');

  const renderTeacherDetails = () => {
    const teachers = teacherData[activeSubTab];
    
    if (teachers && teachers.length > 0) {
      return teachers.map((teacher, index) => (
        <div key={index} className="teacher-card">
          <img src={teacher.photo} alt={teacher.name} className="teacher-photo" />
          <h4>{teacher.name}</h4>
        </div>
      ));
    } else {
      return <p>No teachers available for this category.</p>;
    }
  };

  return (
    <div id="clubActivities" className="content">
      <h2>Club Activities</h2>

      {/* Sub-Tab Navigation */}
      <div className="sub-tabs">
        <div 
          className={`sub-tab ${activeSubTab === 'Arts' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('Arts')}
        >
          Arts & Painting
        </div>
        <div 
          className={`sub-tab ${activeSubTab === 'Publications' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('Publications')}
        >
          Publications
        </div>
        <div 
          className={`sub-tab ${activeSubTab === 'Music' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('Music')}
        >
          Music
        </div>
        <div 
          className={`sub-tab ${activeSubTab === 'ICT' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('ICT')}
        >
          ICT
        </div>
        <div 
          className={`sub-tab ${activeSubTab === 'Quiz' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('Quiz')}
        >
          Quiz
        </div>
      </div>
      
      {/* Sub-Tab Content */}
      {activeSubTab === 'Arts' && (
        <div className="sub-content">
          <h3>Arts & Painting</h3>
          <img src={Arts} alt="img" />
          <p>Art is important because it has a powerful impact on our moods and emotions and also allows us to express our individuality. Drawing, painting and other art activities enable students to become more creative. Students also become more observant to the world around them by excelling in art.

Learning art helps students discover and explore their creative sides and become more well - rounded personalities. The students of fine arts participate in art competitions, poster making competitions, board display and exhibitions at various levels. Props stage sets and costumes are also designed by the Art Department for various functions.</p>
          <h4>TEACHERS & STAFF</h4>
          <div className="teacher-details">{renderTeacherDetails()}</div>
        </div>
      )}

      {activeSubTab === 'Publications' && (
        <div className="sub-content">
          <h3>Publications</h3>
          <img src={Public} alt="img" />
          <p>Someone has aptly remarked, "The success of a book can be gauged from those who haven't actually read it, but claim to have."

Likewise, in order to imbibe the exquisite virtue of creative reading, the school publishes a quarterly newsletter, Scholar Times, wherein, students are encouraged to pen down their innate thoughts and real life experiences. Every effort is made to publish original ideas with a touch of wisdom and indigenous creativity. The idea of having our own periodical was conceived by Pankaj Bhalla Sir way back in 2014. Since it inception, Scholar Times has covered various domains of myriad activities, showcasing our accomplishments.</p>
          <h4>TEACHERS & STAFF</h4>
          <div className="teacher-details">{renderTeacherDetails()}</div>
        </div>
      )}

      {activeSubTab === 'Music' && (
        <div className="sub-content">
          <h3>Music</h3>
          <img src={Music} alt="img" />
          <p>School is an important and formative time where students are learning a lot about themselves, and this is a perfect time to pick up a new skill — especially singing!

One of the biggest benefits of singing lessons for teenagers is developing more self-confidence. Our students always end up singing higher than they thought they could.

Being in charge of their own weekly practice can be a way for students to develop a good work ethic that will serve them for the rest of their lives.

There are endless benefits to learning to sing (effectively expressing emotion, learning new cultures and languages, and becoming a more collaborative musician), and the school time is the best time to begin so we as faculty members are giving our best to make our students more confident and skilled.</p>
          <h4>TEACHERS & STAFF</h4>
          <div className="teacher-details">{renderTeacherDetails()}</div>
        </div>
      )}

      {activeSubTab === 'ICT' && (
        <div className="sub-content">
          <h3>ICT</h3>
          <img src={ICT} alt="img" />
          <p>“IT is ever-changing and there is the need to evolve in order to stay relevant.” -Ryan Ogilvie

At Little Scholars, the IT department with 3 efficient IT personals always tries to provide the best and latest IT features with optimum ease. Keeping in mind the above phrase as key point, the IT department, always keeps on exploring new ways and ideas in IT field and is always keen to adopt the latest trends.

During the recent years, when the whole world had surrendered against the pandemic, IT professionals have emerged out as the main warriors to let the professional life continued in an uninterrupted mode. The term “Work from home” has come into fashion only because of the hard work put in by the IT professionals globally.

Little Scholars has always been a pioneer in adopting and applying all the new IT tools and ensured that the process of learning goes on without any interruption.</p>
          <h4>TEACHERS & STAFF</h4>
          <div className="teacher-details">{renderTeacherDetails()}</div>
        </div>
      )}

      {activeSubTab === 'Quiz' && (
        <div className="sub-content">
          <h3>Quiz</h3>
          <img src={Quiz} alt="img" />
          <p>In the world of education, there are many different ways to teach and to consolidate what has been learned. One such tool which is quite common, in education is quizzes. It helps to build concentration, identify gaps in knowledge and help children to retain information.

The school organises different quizzes like Maths Quiz, science Quiz, General knowledge Quiz, Mind wars, Olympiads in different subjects etc.

Most children find that quizzes are fun. Children of all ages love playing quizzes and with education thrown in, they will learn a lot while enjoying themselves.</p>
          <h4>TEACHERS & STAFF</h4>
          <div className="teacher-details">{renderTeacherDetails()}</div>
        </div>
      )}
    </div>
  );
};

export default ClubActivities;