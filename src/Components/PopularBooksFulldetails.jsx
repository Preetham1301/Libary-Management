import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BooksP from '../utlies/popularbooks';

const PopularBooksFulldetails = () => {
    const { id } = useParams();

    const filterPopularBook = BooksP.filter((popular) => popular.id === Number(id));

    const navigate = useNavigate();

    return (
        <>
            {/* Button to navigate back */}
            <div className="flex justify-center">
                <button 
                    className="px-6 py-3 mt-6 text-white font-bold font-sans border-2 border-orange-400 bg-orange-300 hover:bg-orange-400 hover:scale-95 transition-all duration-200 rounded-lg"
                    onClick={() => navigate("/BrowserBooks")}
                >
                    Back To Browser
                </button>
            </div>

            {/* Display book details if found */}
            {filterPopularBook.length > 0 ? (
                filterPopularBook.map((popularBook) => (
                    <div 
                        className="w-full mt-8 p-6 bg-gradient-to-r from-fuchsia-900 to-fuchsia-950 rounded-lg shadow-lg shadow-fuchsia-900 transition-all duration-300 hover:scale-105"
                    >
                        <img 
                            src={popularBook.image} 
                            className="object-contain w-full h-96 rounded-lg mb-6" 
                            alt={popularBook.title} 
                        />
                        <h2 className="text-center text-4xl font-bold text-red-400 mb-4">
                            <span className="text-blue-400">Title:</span> {popularBook.title}
                        </h2>
                        <h3 className="text-center text-3xl font-bold text-yellow-100 mb-4">
                            <span className="text-blue-400">Author:</span> {popularBook.author}
                        </h3>
                        <p className="text-center text-xl font-medium text-white mb-4">
                            <span className="text-blue-400">Description:</span> {popularBook.description}
                        </p>
                        <p className="text-center text-xl font-medium text-white mb-4">
                            <span className="text-blue-400">More Info:</span> {popularBook.moreInfo}
                        </p>
                        <p className="text-center text-xl font-medium text-white mb-4">
                            <span className="text-blue-400">Year:</span> {popularBook.year}
                        </p>
                    </div>
                ))
            ) : (
                <div className="text-center text-xl font-semibold text-white mt-10">
                    <p>No More Details Available</p>
                </div>
            )}
        </>
    );
}

export default PopularBooksFulldetails;
