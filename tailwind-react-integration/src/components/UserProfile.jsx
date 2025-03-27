import src from "../src/assets/react.svg";
function UserProfile() {
  return (
    <div className=" hover:shadow-xl transition-shadow duration-300 ease-in-out bg-gray-100 sm:p-4 sm:p-6 md:p-8 max-w-xs md:max-w-sm mx-auto my-10 sm:my-16 md:my-20 rounded-lg shadow-lg text-center sm:w-24 sm:h-24">
      <img
        src={src}
        alt="User"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className=" hover:text-blue-500 transition-colors duration-300 ease-in-out text-lg sm:text-xl md:text-2xl text-blue-800 my-3 sm:my-4">
        John Doe
      </h1>
      <p className="text-sm sm:text-base text-gray-600 md:text-xl">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;