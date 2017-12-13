import React , { Component } from 'react'
import Star from './Star'
import propTypes from 'prop-types'
const StarRating = ({starsSelected = 0, totalStars=5, onRate = f =>f })=>
    <div className ="star-rating">
        {[...Array(totalStars)].map((n,i)=>
            <Star key={i}
                  selected = { i < starsSelected}
                  onClick = {() => onRate(i+1)}
            />
        )}
        <p>{starsSelected} of {totalStars} star</p>
    </div>

StarRating.propTypes = {
    starsSelected: propTypes.number,
    totalStars: propTypes.number,
    onRate: propTypes.func
}
export default StarRating