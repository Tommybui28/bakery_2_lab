const Cake = ({cake}) => {


    return(
        <div className="cake">
            <h3>{cake.cakeName}</h3>
            <h4>Ingredients:</h4>
            <ul>
                {cake.ingredients.map( (ingredient, id) => {
                    return <li key={id}>{ingredient}</li>
                })}
            </ul>
            <p>Rating: {cake.rating}</p>

            
        </div>
    )

}

export default Cake;