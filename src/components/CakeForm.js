import {useDebugValue, useState} from "react";
const CakeForm =({cakes, newCake}) => {

    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState("");

    useState("");
    const[error, setError] = useState("");
    
    const handleValidation = () => {
        let validation = true;
        let errorMessage ="";
        
        if (cakes.find((cake) => cake.recipeName === recipeName)) {
            errorMessage = "This Recipe already exists";
            validation = false;
        }
        setError(errorMessage);
        return errorMessage !== "";
    }
    c
    



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
