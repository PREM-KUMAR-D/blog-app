import React, { useState } from "react";

import BlogContext from "./blog-context";

const BlogProvider = (props)=>{


    const [blogs,setBlogs] = useState([{
        title:"test Title",
        url:"https://4kwallpapers.com/images/walls/thumbs_2t/19793.jpg",
        id:1,
    }]);

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