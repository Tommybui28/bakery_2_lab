import {useState} from "react";
const CakeForm =({cakes, addCake}) => {

    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState("");

    useState("");
    const[error, setError] = useState("");
    
    const handleValidation = () => {
        let validation = true;
        
        if (cakes.find((cake) => cake.recipeName === recipeName)) {
            setError("Recipe already exists");
            validation = false;
        }
        
        return validation;
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if (handleValidation()){
            const newRecipe = {
                recipeName,
                ingredients,
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
        <form onSubmit={handleSubmit} />
            <input 
                type="text"
                name="recipeName"
                placeholder="Enter recipe name here"
                value={recipeName}
                onChange={(evt) => setRecipeName(evt.target.value)}
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
        </>
    );
};

export default CakeForm;
