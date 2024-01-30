import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [dataForm, setDataForm] = useState({});
  const [error, setError] = useState(null);
  const navigate= useNavigate();

  const handleInputChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.id]: event.target.value,
    });
  };


const handleFormSubmit = async(event) => {
    event.preventDefault();
    try{
    const signUpResponse = await fetch('/api/user/signup',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
    });

    const data = await signUpResponse.json();
    if(data.success === false){
        setError(data.message);
        return;
    }
    setError(null);
    navigate('/signin')
    }
    catch(err){
        console.error(err);
    }
};
  
  return (
    <div>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-bold  uppercase my-7">
          Sign up
        </h1>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border p-3 rounded"
            id="username"
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
            id="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded"
            id="password"
            onChange={handleInputChange}
          />
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-70 disabled:opacity-60">
            Sign up
          </button>
        </form>
        <div className="flex gap-2 mt-5">
          <p> have an account ?</p>
          <Link to={"/signin"}>
            <span className="text-blue-700">Sign in </span>
          </Link>
        </div>
      </div>
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}
