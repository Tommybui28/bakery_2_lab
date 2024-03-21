const Cake = ({cake, updateRevenue}) => {

    const handleButtonClick = () => {
        updateRevenue(cake.price)
    }

    return(
        <div className="cake">
            <h3>{cake.cakeName}</h3>
            <h4>Ingredients:</h4>
            <ul>
                {cake.ingredients.map( ingredient => {
                    return <li>{ingredient}</li>
                })}
            </ul>
            <p>Rating: {cake.rating}</p>
            <p>Price: £{cake.price}</p>
            <button onClick={handleButtonClick}>Sell Cake</button>
        </div>
    )

}

export default Cake;