import { useState } from "react";
import CakeList  from "../components/CakeList";
import CakeForm from "../components/CakeForm";
import SearchForm from "../components/SearchForm";

const CakeContainer = () => {

    const [cakes, setCakes] = useState([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
        
    ]);
    const addCake = (newCake) => {
        
        setCakes([...cakes, newCake]);
    }
    // const filteredCakes = ()

    return (
        <>
            <CakeList cakes={cakes}/>
            <CakeForm cakes={cakes} addCake={addCake}/>
            <SearchForm cakes={cakes} setCakes={setCakes}/>
        </>
    )

};

export default CakeContainer;
