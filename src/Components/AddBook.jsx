import React, { useState } from 'react';
import { faBook, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../utlies/LibarySlice';

const AddBook = () => {
    const { Books } = useSelector((state) => state.books);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");
    const [moreinfo, setMoreInfo] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const newBook = {
        id: Books.length + 1,
        title,
        author,
        category,
        description,
        rating: parseInt(rating),
        image,
        moreinfo
    };

    const validateForm = () => {
        const formErrors = {};

        if (!newBook.title) formErrors.title = "Please enter the book title.";
        if (!newBook.author) formErrors.author = "Please enter the author's name.";
        if (!newBook.category) formErrors.category = "Please enter a category.";
        if (!newBook.description) formErrors.description = "Please enter a description.";
        if (!newBook.image) formErrors.image = "Please provide a valid image URL.";
        if (!newBook.moreinfo) formErrors.moreinfo = "Please provide more information.";
        if (newBook.rating < 1 || newBook.rating > 5) formErrors.rating = "Rating must be between 1 and 5.";

        return Object.keys(formErrors).length > 0 ? formErrors : null;
    };

    function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = validateForm();

        if (validationErrors) {
            return setErrors(validationErrors);
        }

        dispatch(addBook(newBook));

        setTitle("");
        setAuthor("");
        setCategory("");
        setDescription("");
        setRating("");
        setImage("");
        setMoreInfo("");

        navigate("/BrowserBooks");
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-fuchsia-950 to-black py-10 px-4">
            <div className="mb-8 flex items-center justify-between max-w-4xl mx-auto">
                <NavLink to={"/"}>
                    <FontAwesomeIcon className="text-4xl text-white hover:text-fuchsia-400 transition" icon={faHouse} />
                </NavLink>
                <h1 className="text-4xl font-extrabold font-serif text-fuchsia-300 text-center shadow-xl">
                    Add New Book
                </h1>
                <div className="w-10" /> {/* spacer */}
            </div>

            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-fuchsia-700 rounded-2xl shadow-2xl max-w-4xl mx-auto p-8 space-y-6">
                {/* Input Field */}
                {[
                    { id: 'BookName', label: 'Book Title', value: title, onChange: setTitle, error: errors.title },
                    { id: 'BookAuthor', label: 'Author', value: author, onChange: setAuthor, error: errors.author },
                    { id: 'BookGenre', label: 'Category', value: category, onChange: setCategory, error: errors.category },
                    { id: 'BookImage', label: 'Image URL', value: image, onChange: setImage, error: errors.image },
                    { id: 'MoreInfo', label: 'More Info', value: moreinfo, onChange: setMoreInfo, error: errors.moreinfo }
                ].map(({ id, label, value, onChange, error }) => (
                    <div key={id}>
                        <label htmlFor={id} className="block text-lg font-semibold text-fuchsia-200 mb-2">{label}</label>
                        <input
                            id={id}
                            type="text"
                            value={value}
                            onChange={(e) => {
                                onChange(e.target.value);
                                setErrors(prev => ({ ...prev, [id.toLowerCase()]: null }));
                            }}
                            placeholder={`Enter ${label}`}
                            className="w-full p-3 rounded-lg bg-black/40 border border-fuchsia-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                        />
                        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
                    </div>
                ))}

                {/* Description */}
                <div>
                    <label className="block text-lg font-semibold text-fuchsia-200 mb-2" htmlFor="Description">Description</label>
                    <textarea
                        id="Description"
                        rows="4"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                            setErrors(prev => ({ ...prev, description: null }));
                        }}
                        placeholder="Enter book description"
                        className="w-full p-3 rounded-lg bg-black/40 border border-fuchsia-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    />
                    {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-lg font-semibold text-fuchsia-200 mb-2" htmlFor="Rating">Rating (1-5)</label>
                    <input
                        id="Rating"
                        type="number"
                        value={rating}
                        onChange={(e) => {
                            setRating(e.target.value);
                            setErrors(prev => ({ ...prev, rating: null }));
                        }}
                        placeholder="Rating"
                        className="w-full p-3 rounded-lg bg-black/40 border border-fuchsia-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    />
                    {errors.rating && <p className="text-sm text-red-500 mt-1">{errors.rating}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 text-lg font-bold text-white bg-gradient-to-r from-fuchsia-700 to-pink-500 rounded-xl hover:from-fuchsia-800 hover:to-pink-600 transition duration-300 shadow-lg hover:shadow-xl"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
