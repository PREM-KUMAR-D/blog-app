import React, { useState } from "react";
import BlogTitle from "./Components/BlogTitle/BlogTitle";
import BlogForm from "./Components/BlogForm/BlogForm";


function App() {

  const [showModal,setShowModal] = useState(false);


  return (
    <>
      <BlogTitle/>
      {showModal && <BlogForm/>}

    </>
  );
}

export default App;
