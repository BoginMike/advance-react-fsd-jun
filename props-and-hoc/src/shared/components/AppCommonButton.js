import React from 'react'
import PropTypes from 'prop-types'

const AppCommonButton = ({ label, children }) => {
    return (
        <div className='app-button'>{children}</div>
    )
}

AppCommonButton.propTypes = {
    label: PropTypes.number
}

export default AppCommonButton
