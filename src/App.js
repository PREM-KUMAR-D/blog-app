import React, { useContext, useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import BlogTitle from "./Components/BlogTitle/BlogTitle";
import BlogForm from "./Components/BlogForm/BlogForm";
import BlogProvider from "./store/BlogProvider";


function App() {

  const [showModal, setShowModal] = useState(false);

  const handleFormAdd = () => {
    setShowModal((prev) => !prev);
  }

  return (
    <BlogProvider>
      <BlogTitle onClick={handleFormAdd} />
      {showModal && <BlogForm onClose={handleFormAdd} />}
    
      <Blogs/>
    </BlogProvider>
  );
}

export default App;
