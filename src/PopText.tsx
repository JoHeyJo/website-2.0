import React, { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./styles/Footer.css"

function PopText() {
  const [text, setText] = useState("Copy email address.");
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  const handleCopy = () => {
    navigator.clipboard.writeText("JPF0628@gmail.com")
      .then(() => {
        setText("copied to clipboard!")
      })
      .catch(err => {
        console.log("error", err)
        console.error('Failed to copy text: ', err);
      });
    };
    
    return (
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <button id="Footer-copy-email" onClick={handleCopy}>
          <FontAwesomeIcon size="xl" icon={faEnvelope} />
        </button>
      </OverlayTrigger >
    );
  }

  export default PopText;