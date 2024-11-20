import React from "react";
import classes from "./BlogItem.module.css";

const BlogItem = (props) => {

    const id = props.id;
    const removeHandler = ()=>{
        props.onRemove(id);
    }

    return (
        <li className={classes["blog-item"]}>
            <h3>{props.title}</h3>
            <img src={props.url}></img>
            <p>{props.description}</p>
            <button>Edit Button</button>
            <button type="button" onClick={removeHandler}>Delete Button</button>
        </li>
    )
}

export default BlogItem;