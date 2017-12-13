import  React, { Component } from 'react'
import '../../stylesheets/Star.scss'
import propTypes from 'prop-types'
const Star = ({selected=false, onClick=f=>f}) =>
    <div className={(selected) ? "star selected" : "star"}
        onClick={onClick}
    >

    </div>

Star.prototype = {
    selected : propTypes.bool,
    onClick: propTypes.func
}
export default Star