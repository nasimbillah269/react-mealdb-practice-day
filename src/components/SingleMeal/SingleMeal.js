import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './SingleMeal.css'

const SingleMeal = (props) => {
    // console.log(props.meal);
    const { strMealThumb, strMeal, strArea, } = props.meal;

    return (
        <div className='meal-itme'>
            <img src={strMealThumb} alt="" />
            <div className='meal-info'>
                <h3 className='meal-name'>{strMeal}</h3>
                <p className='area'>Area: {strArea}</p>
            </div>
            <button onClick={() => props.handleAddToMeal(props.meal)} className='btn-meal'>
                <p>Add To Meal</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default SingleMeal;