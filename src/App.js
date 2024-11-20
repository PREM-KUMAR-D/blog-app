import React, { useState } from "react";
import BlogTitle from "./Components/BlogTitle/BlogTitle";
import BlogForm from "./Components/BlogForm/BlogForm";
import BlogProvider from "./store/BlogProvider";


function App() {

  const [showModal,setShowModal] = useState(false);

  const handleFormAdd = ()=>{
    setShowModal((prev)=>!prev);
  }


  return (
    <BlogProvider>
      <BlogTitle onClick={handleFormAdd}/>
      {showModal && <BlogForm onClose={handleFormAdd}/>}

    </BlogProvider>
  );
}

export default App;
