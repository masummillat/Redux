import React, { Component } from 'react'
import propTypes from 'prop-types'
import FaTrash from 'react-icons/lib/fa/trash-o'
import '../../stylesheets/Color.scss'
import TimeAgo from './TimeAgo'
import StarRating from './StarRating'
class Color extends Component {

    render(){
        const {title,color,rating,timestamp,onRemove,onRate} = this.props
        console.log(this.props.color)
        return(
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={onRemove}>
                    <FaTrash/>
                </button>
                <div className="color" style={{backgroundColor: color}}>

                </div>
                <TimeAgo timestamp = {timestamp}/>

                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        )
    }
}

Color.propTypes = {
    title:propTypes.string.isRequired,
    color:propTypes.string.isRequired,
    rating:propTypes.number,
    onRemove: propTypes.func,
    onRate: propTypes.func

}

Color.defaultProps = {
    rating: 0,
    onRemove: f => f,
    onRate : f => f
}

export default Color