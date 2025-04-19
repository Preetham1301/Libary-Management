import React, { useState } from 'react';
import BooksP from '../utlies/popularbooks';
import { NavLink } from 'react-router-dom';

const PopularBooks = () => {
  const [PBooks, setPBooks] = useState(BooksP);

  return (
    <>
      <div className="border-2 h-[600px] w-full overflow-x-auto overflow-y-auto mx-auto mt-14 py-10 border-teal-900 shadow-lg shadow-teal-800 rounded-lg">
        <h1 className="text-4xl font-mono font-bold text-emerald-100 text-center mb-6">Showing Popular Books</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {PBooks.map((eachBook) => (
            <div
              key={eachBook.id}
              className="w-full sm:w-1/2 p-4 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 border-2 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <p className="text-2xl font-bold text-white">{eachBook.title}</p>
              <p className="font-sans font-semibold text-xl text-yellow-100">{eachBook.author}</p>
              <p className="text-lg font-medium text-teal-200">{eachBook.description}</p>
              <p className="font-bold text-xl text-white">{eachBook.year}</p>
              <NavLink to={`/populardetails/${eachBook.id}`}>
                <button className="text-white hover:font-bold hover:scale-95 px-6 mt-4 py-3 cursor-pointer border-2 rounded-full shadow-md shadow-teal-700 bg-teal-900 hover:bg-teal-700 transition-all duration-200">
                  View More
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularBooks;
