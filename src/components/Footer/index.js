import React from 'react';

//Custom Component
import Emoji from '../EmojiImport';

// Style
import './styles.scss';

function Footer(){
    return (
      <div className='footer-style'>
        <p className='sub-title footer-text'>
          Copyright 2020 - Made with <Emoji symbol='❤️' /> by{' '}Swati Jha
        </p>
      </div>
    );
}

export default Footer;