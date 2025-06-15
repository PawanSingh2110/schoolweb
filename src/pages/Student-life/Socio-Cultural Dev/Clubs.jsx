import React, { useState } from 'react';
import Arts from '../../images/arts.webp';
import ICT from '../../images/ict.webp';
import Public from '../../images/publications.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


const ClubsSlider = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      adaptiveHeight:true,
      
    };

    const images = [
        { src: Public, alt: 'Image 1' },
        { src: Public, alt: 'Image 2' },
        { src: Public, alt: 'Image 3' }
      ];
      return (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </Slider>
      );
    };

      
const Clubs = () => {
    const [activeSubTab, setActiveSubTab] = useState('IIMUN');
  return (
    
    <div id="clubs" className="content">
      <h2>Clubs - Internationalism</h2>
      <div className="sub-tabs">
        <div 
          className={`sub-tab ${activeSubTab === 'IIMUN' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('IIMUN')}
        >
          IIMUN
        </div>
        <div 
          className={`sub-tab ${activeSubTab === 'Ashoka' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('Ashoka')}
        >
          Ashoka Changemaker Day

        </div>
        <div 
          className={`sub-tab ${activeSubTab === 'Harithkram' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('Harithkram')}
        >
         Harithkram
        </div>
      </div>
      
      {/* Sub-Tab Content */}
      {activeSubTab === 'IIMUN' && (
        <div className="sub-content">
          <h3>IIMUN</h3>
          <img src={Arts} alt="img" />
          <p>I.I.M.U.N. is one of the world’s largest youth-run organisation that aims to bring the world closer. It empowers the youth by enabling them to solve global problems at an individual level. Every student who participates at any I.I.M.U.N. Chapter conference follows a 3-step appraoch :-</p>
          <p>Comprehend* - Discuss agenda through video and face-to-face tutorials.</p>
          <p>Congregate* -Debate possible solutions of each simulation.</p>
          <p>Create- Execute an IIMUN actionable goal and get rewarded with a certificate.</p>
          <h5><strong>Events</strong></h5>
          <p>National</p>
          <p>International</p>
          <p>Championship</p>
          <p>LITTLE SCHOLARS joined IIMUN in 2016 and our delegates have contributed extremely well and have won numerous accolades.</p>
        <h5><strong>ACHIEVEMENTS</strong></h5>
        <p><strong>National</strong></p>
        <p>Little scholars grabbed school trophy, for consecutive two years at Kashipur chapter 2016 and 2017.</p>
        <p>Besides this it won the School trophy in Moradabad chapter 2017</p>
        <p><strong>International</strong></p>
        <p>In 2022 Little Scholars took part in the BEST MUN conference, in Saudi Arabia and won the title of Best Delegate.</p>
        <p><strong>Championship</strong></p>
        <p>By getting high commendation, special mention, verbal mention and Best Delegate, our scholars also proved themselves in Championship conference which was held in Mumbai.</p>
        </div>
      )}

      {activeSubTab === 'Ashoka' && (
        <div className="sub-content">
          <h3>Ashoka Changemaker Day</h3>
          <div className='lg'>
          <div className='logo'>
          <img src={ICT} alt="img" />
          </div>
          <div className='logo2'>
          <p>Little Scholars, Kashipur, and Ashoka Innovators collaborated to conduct Changemaker Day on Jan 23rd,Saturday to promote the idea of “Everyone A Changemaker.”</p>
          <p>Seven schools were a part of the event and, a total of 143 participants were present.</p>
          </div>
          </div>
        
<p>The event began with a presentation by Ms. Preethi Ramachandran, the coordinator from Ashoka. She elaborated on the Ashoka Young Changemakers community and introduced the two guest speakers for the day; Mr. Mathew Jose, the founder of Paperman, and Mr. Hitarth Seth, the founder of Buddhiman and Gujju Student.</p>

<p>They spoke about their journey as a changemaker, which followed an idea pitching event by the students. Some honorable mentions are Quenching the thirst of Animals by Gargi, Applied Learning Program by Prabhleen, and The Open Arms Project by Prisha. The participants received constructive feedback from the speakers at the end of their presentation. The next event was a Q & A round, where the students asked relevant questions to the speakers through the chatbox. The speakers answered them with precision and expertise that perhaps was a result of their intense experience.</p>

<p>The event ended on a positive note. The atmosphere was of learning and development.</p>

        </div>
      )}

      {activeSubTab === 'Harithkram' && (
        <div className="sub-content">
          <h3>Harithkram</h3>
          <div className='lg'>
          <div className='logo'>
          <img src={ICT} alt="img" />
          </div>
          <div className='logo2'>
          <p>The students of Little Scholars Kashipur have always been in the forefront so far as ‘Environmental Awareness’ is concerned, making climate issues occupy centrestage with their enthusiastic participation in such activities.

            The same zeal was on display when Auli Arora, Parth Garg and PrishaBhalla represented the school in the three-day youth conference organized by Harithkram, the Environment Society of Shaheed Bhagat Singh College, Delhi.</p>
        </div>
    </div>
<p>The School Student Conference (SSC) by DUSF under its School Outreach Programme saw not only the coming together of Harithkram’s two flagship events — Delhi University Sustainability Forum (DUSF’20) and Harithkram Model United Nations Environment Assembly (HUMNEA’21), but also intense brainstorming, powerful debates and ardent discussions among youngsters from different schools.</p>

<p>The participants of LS impressed one and all with their views and the school was one of the seven shortlisted schools going to the next round.</p>

<p>Not only this, the children made it a moment to be savoured by the school when Little Scholars Kashipur was declared joint runners-up along with GHHS Edavilangu, Thrissur, Kerala.

We look forward to more such laurels from our talented bunch of children.</p>
<ClubsSlider />
        </div>
      )}
      
    </div>
  );
};

export default Clubs;