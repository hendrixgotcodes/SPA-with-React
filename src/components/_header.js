import React from 'react';
import PropTypes from 'prop-types';
import Button from './_buttons';

const Header = ({title, onShowForm})=>{

    return (
        
        <header className="header">
            <h1>{title}</h1>
            <Button color="rgb(50, 150, 100)" innerText='Hello' onClick={onShowForm}/>

        </header>

    )

}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;