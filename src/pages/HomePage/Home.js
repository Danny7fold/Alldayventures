import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
  return (
    <>
      {/* Hero: Who we are */}
      <InfoSection {...homeObjOne} />
      {/* CEO quote / About */}
      <InfoSection {...homeObjThree} />
      {/* Mission */}
      <InfoSection {...homeObjTwo} />
      {/* Pricing / Sectors */}
      <Pricing />
      {/* Values */}
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;