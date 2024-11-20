import React, {  useContext } from "react";
import classes from "./BlogItem.module.css";
import BlogContext from "../../store/blog-context";

const BlogItem = (props) => {

    const blogCtx = useContext(BlogContext);

    const editHandler = () => {
        blogCtx.setBlogToEdit(props.blog);
        blogCtx.editBlogs(props.blog.id,props.blog);
        
        props.onShowModalChange(true);
       
    }

    const removeHandler = () => {

        blogCtx.removeBlogs(props.blog.id)
    }

    return (
        <li className={classes["blog-item"]}>
            <h3>{props.blog.title}</h3>
            <img src={props.blog.url} alt="Blog"></img>
            <p>{props.blog.description}</p>
            <button type="button" onClick={editHandler}>Edit Button</button>
            <button type="button" onClick={(removeHandler)}>Delete Button</button>
        </li>
    )
}

export default BlogItem;