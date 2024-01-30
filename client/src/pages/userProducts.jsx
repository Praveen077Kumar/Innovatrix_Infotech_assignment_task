import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserProducts() {
  const [userData, setUserData] = useState([]);
  const [itemUpdate, setItemUpdate] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const [showListingError, setListingError] = useState(false);
  const navigate = useNavigate();

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

  const changeHanlder = (e) => {
    setItemUpdate({
      ...itemUpdate,
      [e.target.id]: e.target.value,
    });
  };

  const handleUpdateItem = async (e,ItemId) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/userdata/update/${ItemId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...itemUpdate,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        return;
      }
      setUserData(data);
      navigate("/userData");
    } catch (error) {
      console.log(error);
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
      <p className="text-red-700 font-bold mt-5">
        {showListingError ? "Error showing Items" : ""}
      </p>
      {userData && userData.length > 0 && (
        <div className=" flex flex-col gap-4">
          <h1 className="text-center mt-5 text-3xl font-semibold">
            Your Items
          </h1>
          {userData.map((data) => (
            <div
              key={data._id}
              className="border rounded-lg p-3 flex justify-between items-center gap-4 bg-gray-300"
            >
              <form>
              <div className=" ml-16 flex flex-col font-semibold truncate w-full items-center self-center bg-grey-300">
                <label htmlFor="name">Name: </label>
                <input
                  className="p-3 bg-green-300 text-center font-bold"
                  defaultValue={data.name}
                  id="name"
                  onChange={changeHanlder}
                />
                <br />
                <label htmlFor="name">Age: </label>
                <input
                  className="p-3 bg-grey-300 text-center font-bold"
                  defaultValue={data.age}
                  id="age"
                  onChange={changeHanlder}
                />
              </div>
              <div className="flex flex-col items-center">
                <button className=" ml-40 border text-white m-2 bg-red-700 rounded-lg p-2 uppercase">Delete</button>
                <button
                  type="submit"
                  className="ml-40 border rounded-lg p-2 bg-lime-700 text-white font-bold uppercase"
                  onClick={(e) => handleUpdateItem(e,data._id)}
                >
                  Edit Data
                </button>
              </div>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
