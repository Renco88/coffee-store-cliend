import { Outlet } from "react-router-dom";
import UpdateCoffee from "./UpdateCoffee";
import { Link } from "react-router-dom";


const Root = () => {
    return (
        <div>
        <header>
          <h1>Welcome to Coffee Management</h1>
          <nav>
            <Link to="/addcoffee">Add Coffee</Link>
            <Link to="/updatecoffee">Update Coffee</Link>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
};

export default Root;