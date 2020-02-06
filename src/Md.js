import React from 'react';
import { Media } from 'reactstrap';
import N1 from './N1.jpg'

const Md = () => {
  return (
    <Media className="mt-4">
      <Media left href="#">
        <Media img src={N1} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Samir Nasri
        </Media>
        I am a French professional footballer who currently plays for Belgian club Anderlecht. He primarily plays as an attacking midfielder and a winger, although he has also been deployed in central midfield. He was suspended from football for eighteen months until January 2019 following a doping violation.
        </Media>
    </Media>
  );
};

export default Md;