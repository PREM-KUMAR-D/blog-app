import React, { useState } from "react";

import BlogContext from "./blog-context";

const BlogProvider = (props)=>{


    const [blogs,setBlogs] = useState([]);

    const addBlogHandler = (blog)=>{

    }

    const removeBlogHandler = (id)=>{

    }


    const blogContext={
        blogs:blogs,
        setBlogs:addBlogHandler,
        removeBlogs:removeBlogHandler,
    }

    return(
        <BlogContext.Provider value={blogContext}>
            {props.children}
        </BlogContext.Provider>
    )

}

export default BlogProvider;