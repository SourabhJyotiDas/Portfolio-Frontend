import React, { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from './components/Skills';
import LoadingBar from 'react-top-loading-bar';
import Project from './components/Project';
import Sidenavbar from './components/Sidenavbar';
import Register from './components/Register';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/user';
import Login from './components/Login';
import Create from './components/admin/Create';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Update from './components/admin/Update';

function App() {
  const [progress, setProgress] = useState(0);

  const { isAuthenticated, message, error } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
    window.scrollTo(0, 0)
  }, [dispatch])

  useEffect(() => {
    if (message) {
      dispatch({ type: "clearMessage" });
    }

    if (error) {
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, message, error, isAuthenticated])




  return (
    <>
      <BrowserRouter>
        <LoadingBar color='#08fdd8' progress={progress} />
        <Navbar setProgress={setProgress} isAuthenticated={isAuthenticated} />
        <div className='lg:flex '>
          <Sidenavbar />
          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/skill' element={<Skills />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/project' element={<Project />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/login' element={<Login />} />



            <Route exact path='/admin/create' element={<Create />} />
            <Route exact path='/admin/project/:id' element={<Update />} />

          </Routes>
        </div>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
