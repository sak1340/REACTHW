import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Toggle2 = (props) => {
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
          I joined Premier League club Arsenal on afour - year contract.He reached prominence with the team in his third season winning the ProfessionalFootballers' Association (PFA) Fans' Player of the Month award on three occasions and being named to theassociation's Team of the Year. In December 2010, he was named the French Player of the Year
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Toggle2;