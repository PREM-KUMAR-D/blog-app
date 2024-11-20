import React, { useContext, useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import BlogTitle from "./Components/BlogTitle/BlogTitle";
import BlogForm from "./Components/BlogForm/BlogForm";
import BlogProvider from "./store/BlogProvider";
import BlogContext from "./store/blog-context";

function App() {

  const [showModal, setShowModal] = useState(false);
  
  const handleFormShow = () => {
    setShowModal((prev) => !prev);
  }

  return (
    <BlogProvider>
      <BlogTitle onClick={handleFormShow} />
      {showModal && <BlogForm onClose={handleFormShow}  onFormCompletion={handleFormShow}/>}
    
      <Blogs/>
    </BlogProvider>
  );
}

export default App;
