import React, { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import BlogTitle from "./Components/BlogTitle/BlogTitle";
import BlogForm from "./Components/BlogForm/BlogForm";
import BlogProvider from "./store/BlogProvider";


function App() {

  const [showModal, setShowModal] = useState(false);
  return (
    <BlogProvider>
      <BlogTitle onClick={setShowModal} />
      {showModal && <BlogForm onShowModalChange={setShowModal} />}

      <Blogs onShowModalChange={setShowModal}  />
    </BlogProvider>
  );
}

export default App;
