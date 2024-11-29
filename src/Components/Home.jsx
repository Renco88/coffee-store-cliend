import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();
    // const [loadedCoffees, setLoadedCoffees] = useState(coffees); // Move useState inside the component
    const [coffees,setCoffees]=useState(loadedCoffees);

    return (
        <div>
            <h2>Welcome Coffee Home: {loadedCoffees.length}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {loadedCoffees.map(coffee => (
                    <Coffee 
                        key={coffee._id} 
                        coffee={coffee} 
                        coffees={coffees}
                        setCoffees={setCoffees}
                        
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
