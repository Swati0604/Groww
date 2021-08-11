  
import React from 'react';
import className from 'classnames';

// Style
import './styles.scss';

const PrimaryInput = (props) => {
  return (
    <div className='input-container-style'>
      <input
        className={`input-item ${className ? props.className : ''} ${
          props.rightContent ? 'input-right-style' : ''
        }`}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        autoFocus={props.autoFocus}
        value={props.value}
        disabled={!props.isActive}
        onChange={props.onChange}
      />

      
        <div className='right-icon-style' onClick={props.clickIconHandler}>
          {props.rightContent}
        </div>
      
    </div>
  );
};

export default PrimaryInput;