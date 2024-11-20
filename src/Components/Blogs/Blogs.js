import React, { useContext } from "react";
import BlogContext from "../../store/blog-context";
import BlogItem from "../BlogItem/BlogItem";
import Card from "../Card/Card";


const Blogs = (props) => {
    const blogCtx = useContext(BlogContext);

    const blogs = blogCtx.blogs;




    const blogItems = blogs.map((blog) => {
        
        return (<BlogItem
            title={blog.title}
            url={blog.url}
            key={blog.id}
            id={blog.id}
            description={blog.description}
            onRemove={blogCtx.removeBlogs}
        >
        </BlogItem>)

    })
  

    return (
        <Card>
            <ul>
                {blogItems}
            </ul>
        </Card>
    )
}

export default Blogs;