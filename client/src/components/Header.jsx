import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
   const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-blue-950 shadow-md">
      <div className="p-3 flex justify-between items-center max-w-6xl mx-auto text-1.5xl ">
        <Link to="/">
          <h1 className="font-extrabold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-600">Innovatrix </span>
            <span className="text-white">Infotech</span>
          </h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-white hover:underline">
              Home
            </li>
          </Link>
          <Link to="/create">
            {currentUser ? (
             <li className="sm:inline text-white hover:underline">Create</li>
            ) : (
              <li className="sm:inline text-white hover:underline uppercase ">
                SignIn
              </li>
            )}
          </Link>
          <Link to="/userData">
            {currentUser ? (
             <li className="sm:inline text-white hover:underline">User Data</li>
            ) : (
             ''
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
