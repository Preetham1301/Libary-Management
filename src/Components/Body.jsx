import React from 'react';
import FilterCategory from './FilterCategory';
import PopularBooks from './PopularBooks';

const Body = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black min-h-screen p-4 sm:p-8 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Category Filter Section */}
        <section className="bg-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-4">Browse by Category</h2>
          <FilterCategory />
        </section>

        {/* Popular Books Section */}
        <section className="bg-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-4">Popular Books</h2>
          <PopularBooks />
        </section>
      </div>
    </div>
  );
};

export default Body;
