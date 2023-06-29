import React from 'react'
import PropTypes from 'prop-types';

export const ThirdComponent = ({name = "Juan Comunication", age, user, phone}) => {
  return (
    <div className='third-component'>
        <h1>ThirdComponent Comunication</h1>
        <ul>
            <li>Name: {name} </li>
            <li>Age: {age} </li>
            <li>Name user in app: {user.firstName} </li>
            <li>Phone: {phone} </li>
        </ul>
    </div>
  )
}

ThirdComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    user: PropTypes.object,
}

ThirdComponent.defaultProps = {
    phone: 123
}
