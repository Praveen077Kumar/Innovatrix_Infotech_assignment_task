export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center pb-48">
        <h2 className="text-4xl text-black font-bold mb-8">
          Assignment Task 
        </h2>

        <div className="flex space-x-8 text-3xl">
          <button className="animate-pulse inline-block py-4 px-8 bg-blue-950 text-white rounded-lg">
            Welcome
          </button>

          <button className="animate-bounce inline-block py-4 px-8 bg-blue-950 text-white rounded-lg">
            To 
          </button>

          <button className="animate-pulse inline-block py-4 px-8 bg-blue-950 text-white  rounded-lg">
            Innovatrix

          </button>

          <button className="animate-bounce inline-block py-4 px-8 bg-blue-950 text-white rounded-lg">
            Infotech
          </button>
        </div>
      </div>
    </div>
  );
}
