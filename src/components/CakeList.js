import Cake from "./Cake";

const CakeList = ({ cakes }) => {
    const cakeComponents = cakes.map((cake, index) => {
        return <Cake cake={cake} key={index} />;
    });

    return <ul>{cakeComponents}</ul>
}
export default CakeList;