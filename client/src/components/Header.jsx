import { Link } from "react-router-dom";

export default function Header() {
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
          <Link to="/signin">
            <li className="sm:inline text-white hover:underline cursor-pointer uppercase">
              Sign in
            </li>
          </Link>
          <Link to="signup">
            <li className="sm:inline text-white hover:underline cursor-pointer uppercase">
              Sign up
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
