import React from 'react';
import './MealDetail.css'

const MealDetail = (props) => {
    // console.log(props.meal);
    const { strMeal } = props.meal
    return (
        <div >
            <div className='meal-detail'>
                <h4>Meals Summary</h4>
                <p>Meal Name : {strMeal}</p>
            </div>
            <button className='btn-delete'>
                <p>Delete Meal Item</p>
            </button>
        </div>

    );
};

export default MealDetail;