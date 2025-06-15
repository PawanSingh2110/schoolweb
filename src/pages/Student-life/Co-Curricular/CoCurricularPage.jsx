import React from 'react';
import CoCurricular from './CoCurricular';
import Sidebar from './Sidebar';
import ClubActivities from './ClubActivities';
import CoBread from './CoBread';


const CoCurricularPage = () => {
    return (
      <div>
      <CoBread />
      <div className="CoApp">
        <Sidebar />
        <div className="Co-content">
        <CoCurricular />
        <ClubActivities />
        </div>
      </div>
      </div>
      );
    };

    export default CoCurricularPage;