import React from "react";
import classes from "./BlogItem.module.css";

const BlogItem = (props) => {

    return (
        <li className={classes["blog-item"]}>
            <h3>{props.title}</h3>
            <img src={props.url}></img>
            <button>Edit Button</button>
            <button>Delete Button</button>
        </li>
    )
}

export default BlogItem;