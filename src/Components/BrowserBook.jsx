import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const BrowserBook = () => {
  const { Books } = useSelector((state) => state.books);
  const [filterBooks, setFilterBooks] = useState(Books);
  const [input, setInput] = useState('');

  useEffect(() => {
    const filtered = Books.filter((book) =>
      book.author.toLowerCase().includes(input.toLowerCase())
    );
    setFilterBooks(filtered.length > 0 || input ? filtered : Books);
  }, [input, Books]);

  const handleFilterBooks = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black px-4 py-6 text-white">
      {/* Home icon */}
      <div className="flex justify-center mb-6">
        <NavLink to="/">
          <FontAwesomeIcon icon={faHouse} className="text-4xl text-white hover:text-teal-400 transition" />
        </NavLink>
      </div>

      {/* Search input */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          value={input}
          onChange={handleFilterBooks}
          placeholder="Search by author..."
          className="w-full max-w-md px-6 py-3 border-2 border-amber-300 rounded-full text-black text-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
      </div>

      {/* Book Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filterBooks.length > 0 ? (
          filterBooks.map((book) => (
            <NavLink key={book.id} to={`/Book/${book.id}`} className="transition-transform hover:scale-95">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-lg">
                <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-xl mb-4" />
                <h3 className="text-2xl font-bold text-sky-300 text-center">{book.title}</h3>
                <p className="text-xl font-semibold text-amber-100 text-center mt-1">{book.author}</p>
                <p className="text-base text-white text-center mt-2">{book.description}</p>
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-full transition"
                    aria-label={`View more about ${book.title}`}
                  >
                    View More
                  </button>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <p className="text-center text-lg text-white col-span-full">No books available matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default BrowserBook;
