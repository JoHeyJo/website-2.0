import React from 'react';
import { Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function PopText() {
  const renderTooltip = (props:any) => (
    <Tooltip id="button-tooltip" {...props}>
      Copy email address.
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <FontAwesomeIcon size="xl" icon={faEnvelope} />
    </OverlayTrigger>
  );
}

export default PopText;