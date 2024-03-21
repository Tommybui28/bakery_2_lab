const SearchForm = ({cakes, setCakes}) => {


    const handleSearchSubmit = (evt) => {
        evt.preventDefault();

        const wantedCake = evt.target["cakeName"].value;
        const filteredCakes = cakes.filter((cake) =>
        {
            return cake.cakeName.toLowerCase().includes(wantedCake.toLowerCase())
        
        } 
        
        );
        setCakes(filteredCakes);
    };
    

    return (
        <>
        <h2>Search Here: </h2>
        <form onSubmit={handleSearchSubmit} className="form">
            <input 
                type="search"
                name="cakeName"
                placeholder="Search for cake name here"
            />
            <button>Search</button>
        </form>
        </>
    );
};
export default SearchForm;