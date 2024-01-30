import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/Slices/userSlice";

export default function Signin() {
  const [dataForm, setDataForm] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      const dataResponse = await res.json();
      if (dataResponse.success === false) {
        dispatch(signInFailure(dataResponse.message));
        return;
      }
      dispatch(signInSuccess(dataResponse));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7 uppercase">Sign in</h1>

      <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleInputChange}
        />
       <button
          disabled={loading}
          className="bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p> haven&apos;t an account ?</p>
        <Link to={"/signup"}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
       {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}
