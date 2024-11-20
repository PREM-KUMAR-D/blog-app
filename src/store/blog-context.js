import React from "react";

const BlogContext =React.createContext({
    blogs:[],
    setBlogs:(blog)=>{},
    removeBlogs:(id)=>{},
    editBlog:(id,updateBlog)=>{},
    blogToEdit: null,
    setBlogToEdit:(blog)=>{},
})

export default BlogContext;