import React from 'react';
import PropTypes from 'prop-types';

const Button = ({color, innerText, onClick})=>{

    return <button 
                onClick={onClick} 
                style={{backgroundColor:color}} 
                className='btn'
            >
                {innerText}
            </button>

}

Button.defaultProps = {
    innerText: 'I am a button',
    onClick: (e)=>{
        console.log(e);
    }
}

Button.propTypes = {
    innerText: PropTypes.string.isRequired
}

export default Button;