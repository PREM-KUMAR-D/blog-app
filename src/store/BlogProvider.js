import React, { useState } from "react";

import BlogContext from "./blog-context";

const BlogProvider = (props)=>{


    const [blogs,setBlogs] = useState([{
        title:"Test Title",
        url:"https://4kwallpapers.com/images/walls/thumbs_2t/19793.jpg",
        description:"test Description",
        id:1,
    }]);

    const [blogToEdit, setBlogToEdit] = useState(null);



 

    const addBlogHandler = (blog)=>{
        setBlogs((prevBlogs) => [...prevBlogs, blog]);
    }

    const removeBlogHandler = (id)=>{
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    }

    const updateBlogHandler =(id,updatedBlog)=>{
        setBlogs((prevBlogs) =>
            prevBlogs.map((blog) => (blog.id === id ? updatedBlog : blog))
          );
    }


    const blogContext={
        blogs:blogs,
        setBlogs:addBlogHandler,
        removeBlogs:removeBlogHandler,
        editBlogs:updateBlogHandler,
        blogToEdit: blogToEdit,
        setBlogToEdit: setBlogToEdit,

    }

    return(
        <BlogContext.Provider value={blogContext}>
            {props.children}
        </BlogContext.Provider>
    )

}

export default BlogProvider;