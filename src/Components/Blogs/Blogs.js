import React, { useContext } from "react";
import BlogContext from "../../store/blog-context";
import BlogItem from "../BlogItem/BlogItem";
import Card from "../Card/Card";


const Blogs = (props) => {
    const blogCtx = useContext(BlogContext);

    const blogs = blogCtx.blogs;
    // console.log("Blogs Recieved:"+JSON.stringify(blogs))

    const blogItems = blogs.map((blog) => {
        
        return (<BlogItem
            title={blog.title}
            url={blog.url}
            key={blog.id}
        >
        </BlogItem>)

    })
    console.log(blogItems)

    return (
        <Card>
            <ul>
                {blogItems}
            </ul>
        </Card>
    )
}

export default Blogs;