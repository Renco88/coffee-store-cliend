import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault();

       const form=e.target;
       const email =form.email.value;
       const password =form.password.value;
       console.log(email,password);

        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            const createdAt=result.user?.metadata?.creationTime;
            const user ={email,createdAt:createdAt};
            fetch('http://localhost:5000/user',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)

            })
            .then(res=> res.json())
            .then(data => {
                if(data.insertedId){
                    console.log('user added to database');
                }
            })
        })
        .catch(error=> {
            console.error(error);
        })
    }    

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <p>Already have an account: <Link to="/signin">Sign In</Link></p>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;