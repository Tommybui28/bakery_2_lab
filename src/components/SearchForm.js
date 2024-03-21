const SearchForm = (cakes) => {

    return (
        <>
        <h2>Search Here: </h2>
        <form role="search" >
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