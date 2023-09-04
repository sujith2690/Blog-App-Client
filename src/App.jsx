import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MyBlogs from './components/MyBlogs';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog';
import Header from './components/Header';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Error from './Pages/Error';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.userDetails._id);
  console.log(user,'-----------loged user')
  const token = useSelector((state)=>state.user.accessToken)
  const [darkMode, setDarkMode] = useState(true);

 

  return (
    <>
      <Routes>
        <Route path="/auth" element={user ? <Home /> : <Auth />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/myBlogs" element={user ? <MyBlogs /> : <Navigate to="/auth" />} />
        <Route path="/myBlogs/:id" element={user ? <BlogDetails /> : <Navigate to="/auth" />} />
        <Route path="/addBlog" element={user ? <AddBlog /> : <Navigate to="/auth" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;