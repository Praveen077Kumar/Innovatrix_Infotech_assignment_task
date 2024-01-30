import { useState } from "react";
export default function Signin() {
  const [dataForm, setDataForm] = useState({});
  const handleInputChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/user/signin",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataForm)
      })
      const dataResponse = await res.json();
      if(dataResponse.success=== false) {
        res.status(401).send('Login failed! Please try again')
        return;
      }
    } catch (error) {
      console.error(error.message);
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
        <button className="bg-blue-950 p-3 text-white border rounded-lg uppercase hover:opacity-75">
          Sign in
        </button>
      </form>
    </div>
  );
}
