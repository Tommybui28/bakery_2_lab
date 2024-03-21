import Cake from "./Cake";

const CakeList = ({ cakes }) => {
    const cakeComponents = cakes.map((cake, id) => {
        return <Cake cake={cake} key={id} />;
    });

    return <ul className="list">{cakeComponents}</ul>
}
export default CakeList;