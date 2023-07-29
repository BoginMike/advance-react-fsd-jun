import React from 'react'
import PropTypes from 'prop-types'

const AppCommonButton = ({ label }) => {
    return (
        <div className='app-button'>{label}</div>
    )
}

AppCommonButton.propTypes = {
    label: PropTypes.number
}

export default AppCommonButton
