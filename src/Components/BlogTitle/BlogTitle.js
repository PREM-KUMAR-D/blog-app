import React from "react";
import classes from "./BlogTitle.module.css";

const BlogTitle =(props)=>{

    return(
     <div className={classes.title}>
        <h1>Blog Title</h1>
        <button type="button" onClick={props.onClick}>Add New Blog</button>
        <div className={classes.underline}></div>
     </div>   
    )
}

export default BlogTitle;

