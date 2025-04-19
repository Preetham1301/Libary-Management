import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const BrowserBookFulldata = () => {
  const { Books } = useSelector((state) => state.books);
  const { selected } = useParams();
  const navigate = useNavigate();

  const filterBook = Books.filter((book) => book.id === Number(selected));

  return (
    <>
      <div className="flex justify-center mt-5 mr-28">
        <button
          className="px-5 py-2 transition-all duration-100 text-white font-bold font-sans border-2 border-orange-400 bg-orange-300 hover:bg-orange-400 hover:scale-95"
          onClick={() => navigate("/BrowserBooks")}
        >
          Back To Browser
        </button>
      </div>

      <div className="flex justify-center mt-8">
        {filterBook.length > 0 ? (
          filterBook.map((book) => (
            <div
              key={book.id}
              className="border-none shadow-lg shadow-slate-800 rounded-lg p-6 w-full max-w-4xl bg-white/10 backdrop-blur-md hover:scale-95 transition-transform duration-200"
            >
              <img
                src={book.image}
                alt={book.title}
                className="object-contain w-full h-96 rounded-xl mb-6"
              />

              <p className="text-center text-3xl font-bold text-red-400">
                <span className="text-sky-400">Title</span>: {book.title}
              </p>

              <p className="text-center text-2xl font-bold text-yellow-100">
                <span className="text-sky-400">Author</span>: {book.author}
              </p>

              <p className="text-center text-2xl font-bold text-white">
                <span className="text-sky-400">Description</span>: {book.description}
              </p>

              <p className="text-center text-2xl font-bold text-slate-300">
                <span className="text-sky-400">More Info</span>: {book.moreInfo}
              </p>

              <p className="text-center text-2xl font-bold text-slate-300">
                <span className="text-sky-400">Ratings</span>: {book.rating}
              </p>
            </div>
          ))
        ) : (
          <p className="text-white text-xl">No Book Found</p>
        )}
      </div>
    </>
  );
};

export default BrowserBookFulldata;
