import {useState} from "react";
const CakeForm =({cakes, addCake}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [rating, setRating] = useState("");

    const[error, setError] = useState("");
    
    const handleValidation = () => {
        let validation = true;
        
        if (cakes.find((cake) => cake.cakeName === cakeName)) {
            setError("Recipe already exists");
            validation = false;
        }
        
        return validation;
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        
        if (handleValidation()){

            let newRecipe = {
                cakeName,
                ingredients: ingredients.split(","),
                rating,
            };
        
            addCake(newRecipe);
            return;
        }
        alert(error);
    }
    



    return (
       <>
        <h2>Add Recipe Here!</h2>
        <form onSubmit={handleSubmit} className="form">
            <input 
                type="text"
                name="cakeName"
                placeholder="Enter cake name here"
                value={cakeName}
                onChange={(evt) => setCakeName(evt.target.value)}
            />
            <input 
                type="text"
                name="ingredients"
                placeholder="Enter ingredients here"
                value={ingredients}
                onChange={(evt) => setIngredients(evt.target.value)}
            />
            <input 
                type="number"
                name="rating"
                min = "1"
                max = "5"
                placeholder="Enter rating here"
                value={rating}
                onChange={(evt) => setRating(evt.target.value)}
            />
            <input type="submit" value="Submit"/>
        </form>
        </>
    );
};

export default CakeForm;
