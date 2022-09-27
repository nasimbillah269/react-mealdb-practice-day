import React, { useEffect, useState } from 'react';
import MealDetail from '../MealDetail/MealDetail';
import SingleMeal from '../SingleMeal/SingleMeal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [meal, setMeal] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const handleAddToMeal = (meal) => {
        setMeal(meal)

    }

    return (
        <div className='meals-container'>
            <div className="meal-continer">
                {
                    meals.map(meal => <SingleMeal
                        key={meal.idMeal}
                        meal={meal}
                        handleAddToMeal={handleAddToMeal}
                    ></SingleMeal>)
                }
            </div>
            <div className="meals-summury-container">
                <MealDetail meal={meal}></MealDetail>
            </div>
        </div>
    );
};

export default Meals;