import React from 'react'
import './footer.css';

function Footer() {
  return (
    <div className="footer">
        <a href="https://github.com/Brod8362/snowbee-site" target="_blank" rel='noreferrer'>
            <h3>Website Source</h3>
        </a>
        <a href="https://github.com/Brod8362/snowbee-api" target="_blank" rel='noreferrer'>
            <h3>Backend Source</h3>
        </a>
        <a href="https://github.com/Brod8362/snowbee-bot" target="_blank" rel='noreferrer'>
            <h3>Discord Bot Source</h3>
        </a>
    </div>
  )
}

export default Footer;