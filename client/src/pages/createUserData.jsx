import {useSelector} from 'react-redux';
import {useState} from 'react'

import {useNavigate}  from 'react-router-dom'

export default function CreateUserData() {
    const {currentUser} = useSelector(state => state.user)
     const navigate = useNavigate()
    const [formdata, setFormData] = useState({
        name:"",
        age:null,
        userRef: "",
    });    
    console.log(formdata)
    const handleInputChange = (event)=>{
        setFormData({
          ...formdata,    
        [event.target.id] : event.target.value,
    });
    }

    const handleSubmitData = async(event) =>{
        event.preventDefault(); 
        try {
             const res = await fetch("/api/userdata/create", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...formdata,
                userRef: currentUser._id,
                [event.target.id] : event.target.value,
              })
      });
      const data = await res.json();
      if(data.success === false){
        console.log(data.message);
        return;
      }
      navigate(`/`)
    } catch (error) {
      console.log(error.message);
    }
    };

  return (
    <div className="p=3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-6 uppercase p-2">
        Listing Product
      </h1>
      <form
        className="flex flex-col sm:flex-row gap-4 mb-5"
        onSubmit={handleSubmitData}
      >
        <div className="flex flex-col gap-4 flex-1 ">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded"
            id="name"
            required
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Age"
            className="border p-3 rounded"
            id="age"
            onChange={handleInputChange}
            required
          />
          <button
              type="submit"
              className=" my-3 hover:shadow-lg shadow-sm rounded-lg border text-white p-3 uppercase bg-blue-950"
            >Create Data</button>
          </div>
        </form>
    </div>
        
  )
}
