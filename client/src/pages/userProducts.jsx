import { useState } from 'react';
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";

export default function UserProducts() {
  const [userData, setUserData] = useState([])
  const {currentUser} = useSelector((state => state.user));
    const [showListingError, setListingError] = useState(false);


  const handleShowData = async () => {
    try {
      setListingError(false);
      const res = await fetch(`/api/userdata/data/${currentUser._id}`);
      const data = await res.json();

      if (data.success === false) {
        setListingError(true);
        return;
      }
      setUserData(data);
      setListingError(false);
    } catch (error) {
      setListingError(true);
    }
  };
  
  return (
      <div className="p-3 max-w-lg mx-auto bg-slate-400 ">
      <button
        onClick={handleShowData}
        className="p-3 ml-40 border rounded-lg bg-blue-950 text-2xl text-white  my-7"
      >
        Show Items
      </button>
      <p className="text-red-700 mt-5">
        {showListingError ? "Error showing Listing" : ""}
      </p>
      {userData &&
        userData.length > 0 &&
        <div className=" flex flex-col gap-4">  
          <h1 className="text-center mt-5 text-3xl font-semibold">Your Items</h1>
          {userData.map((data) => (
          <div
            key={data._id}
            className="border rounded-lg p-3 flex justify-between items-center gap-4 bg-black"
          >
           <Link className="text-white font-semibold flex-1 hover:underline truncate" to={`/listings/${data._id}`}>
            <p>Name : {data.name}</p>
            <p>age:{data.age}</p>
            </Link>

          </div>
        ))}
        </div>}
        </div>
  )
}
