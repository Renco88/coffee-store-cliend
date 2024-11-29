import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior.
  
      // Explicitly get the form element
      const form = e.currentTarget;
  
      // Extract values from form inputs
      const name = form.name.value;
      const chef = form.chef.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
  
      // Create a new coffee object
      const newCoffee = { name, chef, supplier, taste, category, details, photo };
      console.log(newCoffee);
  
      // Optionally reset the form after submission
    //   form.reset();
      fetch('http://localhost:5000/coffee',{
        method : 'POST',
        headers:{
            'content-type':'application/json'

        },
        body:JSON.stringify(newCoffee)
      })
      .then(res=> res.json())
      .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success!',
                text: 'User Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      })


    };
  
    return (
      <div className="lg:w-3/4 mx-auto">
        <div className="text-center p-10">
          <h1 className="text-5xl font-bold">Add Coffee!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleAddCoffee} className="card-body">
            {/* form first row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Coffee name" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input type="text" name="chef" placeholder="Chef name" className="input input-bordered" required />
              </div>
            </div>
            {/* form second row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input type="text" name="supplier" placeholder="Coffee supplier" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input type="text" name="taste" placeholder="Taste" className="input input-bordered" required />
              </div>
            </div>
            {/* form third row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input type="text" name="category" placeholder="Coffee category" className="input input-bordered" required />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input type="text" name="details" placeholder="Coffee details" className="input input-bordered" required />
              </div>
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddCoffee;
  