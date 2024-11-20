import React from "react";

const BlogContext =React.createContext({
    blogs:[],
    setBlogs:(blog)=>{},
    removeBlogs:(id)=>{},
})

export default BlogContext;