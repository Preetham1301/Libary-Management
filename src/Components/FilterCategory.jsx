import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const FilterCategory = () => {
  const categories = [
    "Sci-Fi",
    "Fiction",
    "Romance",
    "Fantasy",
    "Historical",
    "Comedy"
  ];

  return (
    <div className="grid grid-cols-2 gap-3 text-white list-none mt-3">
      {categories.map((category) => (
        <NavLink key={category} to={`ct/${category}`}>
          <li className="border-2 border-teal-400 text-center px-4 py-2 rounded hover:bg-teal-700 hover:font-bold transition-all duration-150 font-mono hover:scale-95 shadow-sm shadow-slate-800">
            <FontAwesomeIcon className="mr-2" icon={faBookAtlas} />
            {category}
          </li>
        </NavLink>
      ))}
    </div>
  );
};

export default FilterCategory;
