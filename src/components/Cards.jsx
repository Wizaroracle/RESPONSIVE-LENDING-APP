import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-40 px-4 bg-white">
      <div className="max-w-310 mx-auto grid md:grid-cols-3 gap-8">
        <div
          className="w-full shadow-xl flex-col p-4 my-4 rounded-lg  
         hover:scale-105 duration-300"
        >
          <img
            className="w-20 mx-auto  h-16 -mt-12 bg-white "
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">#149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-solid border-b-2 border-gray-100 mx-8 mt-8">
              500 GB Storage
            </p>
            <p className="py-2 border-solid border-b-2 border-gray-100 mx-8 ">
              1 Granted User
            </p>
            <p className="py-2 border-solid border-b-2 border-gray-100 mx-8 ">
              Send up to 2 GB
            </p>
            <button
              className="bg-[#00df9a] w-50 rounded-md font-medium 
            my-6 mx-auto py-2 text-black"
            >
              Start Trial
            </button>
          </div>
        </div>
        <div
          className="w-full shadow-xl flex-col p-4 my-4 rounded-lg
         hover:scale-105 duration-300 md:my-0 bg-gray-100"
        >
          <img
            className="w-20 h-16 mx-auto -mt-12  bg-transparent"
            src={Double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">#150</p>
          <div className="text-center font-medium">
            <p className="py-2 border-solid border-b-2 border-gray-100 mx-8 mt-8">
              1 TB Storage
            </p>
            <p className="py-2 border-solid border-b-2 border-gray-100 mx-8 ">
              1 Granted User
            </p>
            <p className="py-2 border-solid border-b-2 border-gray-100 mx-8 ">
              Send up to 2 GB
            </p>
            <button
              className="bg-[#00df9a] w-50 rounded-md font-medium 
            my-6 mx-auto py-2 text-black"
            >
              Start Trial
            </button>
          </div>
        </div>
        <div
          className="w-full shadow-xl flex-col p-4 my-4 rounded-lg
         hover:scale-105 duration-300"
        >
          <img
            className="w-20 mx-auto  h-16 -mt-12 bg-white "
            src={Triple}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl font-bold">#151</p>
          <div className="text-center font-medium">
            <p className="py-2 border-solid border-b-2 border-gray-100 mx-8 mt-8">
              3 TB Storage
            </p>
            <p className="py-2 border-solid border-b-2 border-gray-100 mx-8 ">
              1 Granted User
            </p>
            <p className="py-2 border-solid border-b-2 border-gray-100 mx-8 ">
              Send up to 2 GB
            </p>
            <button
              className="bg-[#00df9a] w-50 rounded-md font-medium 
            my-6 mx-auto py-2 text-black"
            >
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
