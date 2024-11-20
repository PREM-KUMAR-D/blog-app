import React, { useContext, useState } from "react";

import BlogContext from "./blog-context";

const BlogProvider = (props)=>{


    const [blogs,setBlogs] = useState([{
        title:"Test Title",
        url:"https://4kwallpapers.com/images/walls/thumbs_2t/19793.jpg",
        description:"test Description",
        id:1,
    }]);

 

    const addBlogHandler = (blog)=>{
        setBlogs((prevBlogs) => {
            
            const existingBlogIndex = prevBlogs.findIndex((b) => b.id === blog.id);
            if (existingBlogIndex !== -1) {
            
              const updatedBlogs = [...prevBlogs];
              updatedBlogs[existingBlogIndex] = blog;
              return updatedBlogs;
            } else {
              return [...prevBlogs, blog];
            }
          });
    }

    const removeBlogHandler = (id)=>{
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
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