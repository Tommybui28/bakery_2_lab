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
    



    return (
       <>
        <h2>Add Recipe Here!</h2>
        <form onSubmit={handleSubmit} />
            <input 
                type="text"
                name="recipeName"
                placeholder="Enter recipe name here"
                value={}
            />
        </>
    );
    
};