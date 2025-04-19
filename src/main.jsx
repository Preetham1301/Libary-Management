import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './Components/Body.jsx'
import Store from './utlies/Store.js'
import { Provider } from 'react-redux'
import { lazy } from 'react'
import { Suspense } from 'react'
import Error from './Components/Error.jsx'

const BrowserBook = lazy (() => import ("./Components/BrowserBook.jsx"))
const AddBook = lazy (() => import ("./Components/AddBook.jsx"))
const GenreBooks = lazy (() => import ("./Components/GenreBooks.jsx"))
const BrowserBookFulldata = lazy (() => import ("./Components/BrowserBookFulldata.jsx"))
const PopularBooksFulldetails = lazy (() => import ("./Components/PopularBooksFulldetails.jsx"))

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />

      },

    ]
  },
  
  {
    path: "/BrowserBooks",
    element: <Suspense fallback = {<div className='text-7xl text-white animate-pulse'>Loading........</div>}>
      <BrowserBook />
    </Suspense>
  },
  
  {
    path: "/AddBook",
    element: <Suspense fallback={<div className='text-7xl text-white animate-pulse'>Loading........</div>}>
       <AddBook />
    </Suspense>
  },
  
  {
    path: "/ct/:catagorey",
    element: <Suspense fallback ={<div className='text-7xl text-white animate-pulse'>Loading........</div>}>
      <GenreBooks />
    </Suspense>
  },
  {
    path: "/Book/:selected",
    element: <Suspense fallback ={<div className='text-7xl text-white animate-pulse'>Loading........</div>}>
      <BrowserBookFulldata />
    </Suspense>
  },
  {
    path : "/populardetails/:id",
    element : <Suspense fallback ={<div className='text-7xl text-white animate-pulse'>Loading........</div>}>
      <PopularBooksFulldetails />
    </Suspense>
  },

  {
    path : "*",
    element : <Error/>
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>

    <RouterProvider router={Router} />
    </Provider>
  </StrictMode>,
)
