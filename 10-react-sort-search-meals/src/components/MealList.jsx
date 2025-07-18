import React, {useEffect, useState} from "react";
import {MealService} from "../services/MealService.js";
import Spinner from "../ui/Spinner.jsx";

const MealList = () => {

    const [mealSearch, setMealSearch] = useState("");
    const [filteredMeal, setFilteredMeal] = useState([]);
    const [state, setState] = useState({
        loading: false,
        mealArray: [],
        error: null,
    });

    const getAllMeals = async () => {
        try {
            setState({...state, loading: true});
            const response = await MealService.getAllSeaFood();
            setState({
                ...state,
                loading: false,
                mealArray: response.data.meals,
            });
            setFilteredMeal(response.data.meals)

        } catch (error) {
            setState({
                ...state,
                loading: false,
                error: error,
            })
        }
    }

    useEffect(() => {
        getAllMeals();
    }, []);

    const {loading, mealArray, error} = state;

    if (loading) {
        return <Spinner/>
    }

    if (!loading && error) {
        return <div className="bg-gray-100 p-6">
            <p className="text-red-500">{error.message}</p>
        </div>
    }

    const searchMeal = (e) => {
        setMealSearch(e.target.value);
        let filteredArray = [...mealArray].filter(meal => meal.strMeal.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredMeal(filteredArray); // 10
    };

    const mealAscOrder = () => {
        const sortedMeals = [...filteredMeal].sort((a, b) => a.strMeal.toLowerCase().localeCompare(b.strMeal.toLowerCase()));
        setFilteredMeal(sortedMeals); // 10
    };

    const mealDescOrder = () => {
        const sortedMeals = [...filteredMeal].sort((a, b) => b.strMeal.toLowerCase().localeCompare(a.strMeal.toLowerCase()));
        setFilteredMeal(sortedMeals); // 10
    };

    return (
        <>
            <div className="flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-5">
                        <input
                            value={mealSearch}
                            onChange={e => searchMeal(e)}
                            type="text" placeholder="Search..."
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <button onClick={mealAscOrder}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Asc
                        </button>
                        <button onClick={mealDescOrder}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Desc
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-4 gap-6">
                    {filteredMeal.map((meal) => (
                        <div key={meal.idMeal} className="bg-white shadow-lg rounded-2xl overflow-hidden">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
export default MealList;