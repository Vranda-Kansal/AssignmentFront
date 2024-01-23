const BookContainer = ({ setToggleBookForm }) => {
  const handleBook = () => {
    console.log("clicked");
    setToggleBookForm(true);
  };
  return (
    <div className="flex justify-center items-center">
      {/* Booking Form  */}
      <div className="shadow-xl shadow-blue-500 w-[33%] rounded-xl border-2 border-purple-200 text-center h-[300px]">
        <div>
          <div className="text-blue-500 p-2 dark:text-blue-600 font-bold text-4xl mt-6">
            One Step Closer to a Pain-Free Existence.
          </div>
          <div className="text-sky-400 text-lg font-medium p-1 mx-2 mt-8">
            A Journey Towards a Pain-Free Tomorrow
          </div>
        </div>
        <div onClick={handleBook}>
          <button
            className=" bg-green-400 px-32 py-3 m-8 rounded-lg text-white justify-center font-semibold text-lg border-2 border-green-700 "
            // onClick={handleBook}
          >
            Book Now
          </button>
        </div>
      </div>
      <img
        className="w-[50%] h-[540px] shadow-xl shadow-blue-500 rounded-full ml-11 my-2"
        src="https://img.freepik.com/free-vector/videocalling-with-therapist-concept_23-2148521901.jpg?w=740&t=st=1705985359~exp=1705985959~hmac=589a21d545fc52b50b167ebcfe33da61869de22ce8e2b301794a834cf79068a5"
        alt="doctor-img"
      />
      {/* </div> */}
    </div>
  );
};
export default BookContainer;
