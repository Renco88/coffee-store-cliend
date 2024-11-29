import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";


const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
            <h2>Welcome Coffee home : {coffees.length}</h2>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
           {
                coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
            }
           </div>
        </div>
    );
};

export default Home;