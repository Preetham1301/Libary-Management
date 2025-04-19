import { NavLink, useNavigate, useParams } from 'react-router-dom'
import BooksP from '../utlies/popularbooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const GenreBooks = () => {
  const data = useParams();
  const filterBooks = BooksP.filter((catBook) => catBook.category === data.catagorey);
  const navigate = useNavigate();

  return (
    <>
      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')}
        className='flex items-center text-white hover:text-gray-300 hover:scale-95 transition-all px-5 py-3 mt-5 mb-8 cursor-pointer border-2 border-gray-600 rounded-full shadow-lg hover:shadow-xl'
      >
        <FontAwesomeIcon icon={faHome} className="mr-3" />
        Back to Home
      </button>

      {/* Genre Books Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filterBooks.length > 0 ? (
          filterBooks.map((each) => (
            <div
              key={each.id}
              className='group bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300'
            >
              <img
                className='object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105'
                src={each.image}
                alt={each.title}
              />
              <div className='p-4'>
                <p className='text-2xl font-semibold text-orange-400'>{each.title}</p>
                <p className='text-white text-lg mt-2'>{each.description}</p>
              </div>

              {/* View More Button */}
              <NavLink to={`/populardetails/${each.id}`}>
                <button className='w-full py-2 mt-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gradient-to-l'>
                  View More
                </button>
              </NavLink>
            </div>
          ))
        ) : (
          <div className='flex justify-center items-center w-full h-full text-3xl text-yellow-400 animate-pulse'>
            <p>No Books Available</p>
          </div>
        )}
      </div>
    </>
  );
};

export default GenreBooks;
