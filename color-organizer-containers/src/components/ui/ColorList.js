import propTypes from 'prop-types'
import React from 'react'
import '../../stylesheets/ColorList.scss'
import Color from './Color'
const ColorList = ({colors = [], onRate =f =>f , onRemove= f =>f})=>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>No colors Listed. (Add a Color) </p>:
            colors.map((color =>
                <Color
                    key = {color.id}
                    {...color}
                    onRate = {(rating) => onRate(color.id,rating)}
                    onRemove = {()=> onRemove(color.id)}
                />
            ))
        }
    </div>
ColorList.propTypes = {
    colors: propTypes.array,
    onRate: propTypes.func,
    onRemove: propTypes.func
}

export default ColorList