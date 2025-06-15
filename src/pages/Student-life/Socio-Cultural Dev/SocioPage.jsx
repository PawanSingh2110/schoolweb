import React from 'react';
import SocioCulture from './SocioCulture';
import ARMS from './ARMS';
import Sidebar2 from './Sidebar2';
import Clubs from './Clubs';
import SETU from './SETU';
import IIMUN from './IIMUN';
import IIMUNForm from './Form';
import SocioBread from './SocioBreadcrumb';



const SocioPage = () => {
    return (
        <div>
        <SocioBread />
        <div className="SocioApp">
        <Sidebar2 />
        <div className="Socio-content">
        <SocioCulture />
        <SETU />
        <ARMS />
        <Clubs />
        <IIMUN />
        <IIMUNForm />
        </div>
        </div>
    
        </div>
      );
    };

    export default SocioPage ;