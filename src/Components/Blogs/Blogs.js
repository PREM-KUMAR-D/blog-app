import React, { useContext } from "react";
import BlogContext from "../../store/blog-context";
import BlogItem from "../BlogItem/BlogItem";
import Card from "../Card/Card";


const Blogs = (props) => {
    const blogCtx = useContext(BlogContext);

    const blogs = blogCtx.blogs;




    const blogItems = blogs.map((blog) => {
        
        return (<BlogItem
            blog={blog}
            key={blog.id}
            onEdit={props.onEdit}
            onEditCompletion={props.onEditCompletion}
            onShowModalChange={props.onShowModalChange}
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