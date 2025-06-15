import React, { useState } from 'react';
import Archana from '../../images/archana_khanna.webp';
import Manish from '../../images/manish_chandra_sharma.webp';
import Arts from '../../images/arts.webp';
import ICT from '../../images/ict.webp';
import Music from '../../images/music.webp';
import Quiz from '../../images/quiz.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";



const teacherData = {
    "DronaSagar": [
      { name: 'Ms. ARCHANA KHANNA', photo: Archana },
      { name: 'Mr. MANISH CHANDRA SHARMA', photo: Manish }
    ],
    "Streets": [
      { name: 'Ms. ARCHANA KHANNA', photo: Archana },
      { name: 'Mr. MANISH CHANDRA SHARMA', photo: Manish }
    ],
    "Sustainability": [
      { name: 'Ms. ARCHANA KHANNA', photo: Archana },
      { name: 'Mr. MANISH CHANDRA SHARMA', photo: Manish }
    ]
  };

  const StreetsSlider = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      adaptiveHeight:true,
      
    };

    const images = [
        { src: ICT, alt: 'Image 1' },
        { src: Music, alt: 'Image 2' },
        { src: Quiz, alt: 'Image 3' }
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

const SETU = () => {
  const [activeSubTab, setActiveSubTab] = useState('DronaSagar');

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
    <div id="setu" className="content">
      <h2>SETU </h2>

      {/* Sub-Tab Navigation */}
      <div className="sub-tabs">
        <div 
          className={`sub-tab ${activeSubTab === 'DronaSagar' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('DronaSagar')}
        >
          Dronasagar – A hydrological Disconnect
        </div>
        <div 
          className={`sub-tab ${activeSubTab === 'Streets' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('Streets')}
        >
          Streets for Me
        </div>
        <div 
          className={`sub-tab ${activeSubTab === 'Sustainability' ? 'active' : ''}`} 
          onClick={() => setActiveSubTab('Sustainability')}
        >
          Sustainability – A way of life
        </div>
      </div>
      
      {/* Sub-Tab Content */}
      {activeSubTab === 'DronaSagar' && (
        <div className="sub-content">
          <h3>Dronasagar – A hydrological Disconnect</h3>
          <img src={Arts} alt="img" />
          <h5>Introduction</h5>
          <p>
        <strong>SETU</strong> is the annual event of Little Scholar School located in Kashipur, Uttarakhand. 
        Building on the work done in previous years, the theme for the 2020 SETU was to ignite the native curiosity of young people 
        and foster their active participation in the affairs of the city. As part of the series of related events, 
        a workshop on <strong>Intergenerational Memories on Water</strong> was facilitated for interested students from schools in 
        and around Kashipur. Given the pandemic in 2020, all events and workshops were conducted online.
      </p>

      <p>
        Water, in all its forms, connects people, places, and other life forms, inspiring and sustaining diverse cultural beliefs, 
        values, and ways of life. The objective of the workshop on Intergenerational Memories was to facilitate students to explore 
        people’s relationships with and through water, directly and indirectly. By mapping narratives of different generations, their 
        associations, and their belief systems, it was expected that the stories would bring forth the values that different generations 
        held for the water bodies in and around Kashipur.
      </p>

      <p>
        It was hoped that the students would also capture physical changes in their neighborhood through observations and by recording 
        memories of different generations (grandparents, parents, and their own). The workshop consisted of two main tasks:
      </p>

        <p>
          a{')'}Mapping the landscape and the changes in the surroundings by the students using innovative maps/diagrams.
        </p>
        <p>
          b{')'}Documenting mental and cultural activities that are associated with water and water bodies by the three generations. 
          They were supposed to highlight customs, festivals, beliefs, and myths associated with water. The students were expected to 
          create a poster, GIF, photomontage, or stop-motion picture which would be the culmination of their learning and the message 
          they wanted to share after doing this exercise.
        </p>

      <p>
        The workshop was initiated on October 2, 2020, and continued for two weeks, culminating on October 17, 2020. 
        In all, eight teams from four schools consisting of more than 100 students participated in the workshop. 
        It consisted of a series of online interactions between students and facilitators. In the first interaction, 
        the facilitators gave an overview of the objectives and expectations of the workshop. This was followed by two more interactions 
        where students presented their ideas, discussed their work plan, and received feedback on focus, content, and delivery. 
        The final presentation was held on October 17, 2020, where eight teams presented their work online, followed by a citation ceremony.
      </p>
      <h5>The Presentations:</h5>
<p>All the teams picked up a topic and were able to work on the key concept of the intergenerational change by collecting data from secondary sources, interviewing people, analysis and presentations in various formats. Special mentions were given to each and every team and three were given citations for overall efforts.</p>
          
<table className="table">
<thead>
<tr>
      <th>S.No.</th>
      <th>Topic</th>
      <th>School</th>
      <th>Comment / Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Different Phases of Katoratal</td>
      <td>Chhauni Childrens’ Academy, Kashipur</td>
      <td>Special mention for most innovative primary research. Looked at local lake, which has almost vanished by documenting the changes in the landscape.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Girital Lake: A Documentary of Lake across Time</td>
      <td>Little Scholars, Kashipur</td>
      <td>Citation for most professional presentation, weaving of the narrative video and bringing out all aspects of change in and around the lake. Also incorporating ideas to go ahead towards its revival and preservation.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Changes in and around Kosi Dam</td>
      <td>Little Scholars, Kashipur</td>
      <td>Special mention for best communication, powerful visuals and illustrations accompanied by strong and informative narrative.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Flooding of Station Road</td>
      <td>Little Scholars, Kashipur</td>
      <td>Innovative and creative submission in the format of a newspaper, incorporating information nuggets and crisp analysis.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Dronasagar</td>
      <td>Little Scholars, Kashipur</td>
      <td>Very comprehensive and well-rounded presentation with special mention for best analysis, video, and accompanying report.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Bhimtal Lake</td>
      <td>Shemford School, Nainital</td>
      <td>Special mention for best documentation covering a large spectrum of mythology, geographical and geological, socio-cultural, and ecological aspects related to the lake.</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Dehghat: A Small Town</td>
      <td>Sri Dashmesh School, Bazpur</td>
      <td>Citation for informative and creative documentation of the changes happening in a small hilly town located by a Himalayan river.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Haripura Dam</td>
      <td>Sri Dashmesh School, Bazpur</td>
      <td>Special mention for best documentation for highlighting the change over the years through research and visuals.</td>
    </tr>
  </tbody>
</table>
          
          <h4>TEACHERS & STAFF</h4>
          <div className="teacher-details">{renderTeacherDetails()}</div>
        </div>
      )}

      {activeSubTab === 'Streets' && (
        <div className="sub-content">
          <h3>Streets for Me</h3>
          <StreetsSlider />
          <h5>Introduction</h5>
          <p>The theme of SETU 2021 is “Streets for Me”. Building onto the multiple editions of SETU over the years and anchored in the broader agenda of sustainable development goals 2030, the overall objective of SETU 2021 was to simulate the native curiosity of young people and foster their active participation in the affairs of the city. Starting September 19, 2021, the event consisted of a series of online workshops and related events, culminating in an offline event on October 2, 2021 at Kashipur, Uttarakhand.

Multiple resource persons from all over India anchored and facilitated the workshop for 14 teams consisting of students from around thirteen schools/colleges/institutions in and around Kashipur. In total, 140 students participated in the workshops.</p>
          <h5>About the Workshop</h5>
        <p>Sustainable Cities are those that seek to make our cities inclusive, safe, resilient and sustainable. It calls for taking steps to simultaneously foster green sustainability, social sustainability and economic sustainability. It also calls for minimizing required inputs of energy, water, and food, and drastically reducing waste, output of heat, water and air pollution by all stakeholders. The objective of the workshop on Streets for Me was to facilitate students to explore people’s relationships with the place, directly and indirectly. By mapping narratives of different stakeholders, their associations and their belief systems, it was expected that the stories will bring forth the values that different stakeholders from various walks of life held for the place Kashipur. It was hoped that the students will also capture physical changes in their neighbourhood thru observations and will present the most desirable outcome on how they perceive the place by presenting the same as artilized. The workshop was organized around the framework consisting of the tasks to observe, relate, design, action:</p>
        
        <h5>The Presentations:</h5>
        <p>All the teams were allotted certain area on the street approx. 50 m to 100 m in a centrally located street of Kashipur</p>

        <p>
        <span className='underline'>Observe</span> - Observe who and what constitute your city and understand its functions. 
        Observe your surroundings using all five senses:
        </p> 
        
        <p>o What do you see? What are the different sounds? What do the different smells tell us?</p>
        <p>
        o How do you feel when you connect with the social fabric? and Can you elaborate on the flavors of the city with the change in season/function?
        </p>
      

      <p>
      <span className='underline'>Relate</span> - Mapping the observations during the visits to the location on a digital map:
      </p>
   
        <p>
        o Relating your city with other similar cases by understanding their methodologies and best practices 
          while keeping in mind the SDG goals.
        </p>
        <p>
        o Categorizing stakeholders and assessing their integration in the social fabric to promote sustained, 
          inclusive, and sustainable growth.
        </p>
      

      <p><span className='underline'>Design</span> - Creating goals for sustainable growth for an inclusive society:</p>
      
        <p>
        o Transport:Ensuring convenience in using public transport and promoting walking and cycling 
          for last-mile connectivity to foster sustainable transport.
        </p>
        <p>
          Management of Resources: Sustainable land-use planning and management while integrating 
          environmental infrastructure, including water, sanitation, drainage, and solid waste management.
        </p>
      

      <p><span className='underline'>Action</span> -Creating a sustainable solution:</p>
      
        <p>
        o Addressing local authorities about the identified issues and asking for action to be taken.
        </p>
        <p>
        o Collaborating with the community to promote sustainable practices and implementation of design through 
          presentations, art, street plays, etc.
        </p>
      

      <p>They were asked to work on the key concept of "Streets for Me" by collecting data from secondary sources, interviewing people, analysis and presentations in various formats. The workshop consisted of a series of online interactions between students and facilitators. In the first interaction the facilitators gave an overview of the objectives and expectations from the workshop. It was followed by 5 more interactions whereby students came up with their ideas, discussed their workplan and were given due suggestions and feedback on focus, content and delivery.

The final submission consisted of two components. In the first part, students created a story about their part of the street and presented it online along with their plan for creating the offline artifact. On October 2, 2021, fourteen teams presented their final work on the main street in the form of street plays, posters, props and artifacts spreading the message of inclusive, safe, and sustainable streets. In the final event, teams from prominent NGOs and civil society organizations also participated. The final results were a cumulative score of both online and offline presentations along with the score of the stakeholders from various walks of life, who were an integral part of the live voting process. The winners were felicitated and special mentions were given to three teams for overall efforts.</p>

          <h4>TEACHERS & STAFF</h4>
          <div className="teacher-details">{renderTeacherDetails()}</div>
        </div>
      )}

      {activeSubTab === 'Sustainability' && (
        <div className="sub-content">
          <h3>Sustainability – A way of life</h3>
        </div>
      )}

    </div>
  );
};

export default SETU;