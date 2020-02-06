import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Toggle1 = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');

  const onEntered = () => setStatus('Opened');

  const onExiting = () => setStatus('Closing...');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>READ</Button>
      <h5>Table: {status}</h5>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Card>
          <CardBody>
          Samir Nasri (Arabic: سمير نصري‎) was born in Septèmes-les-Vallons, a northern suburb of Marseille, to French nationals of Algeriandescent.[10][11] His mother, Ouassila Ben Saïd, and father, Abdelhafid Nasri, were both born in France;his father being born and raised in Marseille, while his mother being from nearbySalon-de-Provence Nasri's grandparents emigrated to France from Algeria.[13] His mother is ahousewife and his father previously worked as a bus driver before becoming his son's personal manager.
           </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Toggle1;