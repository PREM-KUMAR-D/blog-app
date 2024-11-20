import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import BlogContext from "../../store/blog-context";
const BlogForm = (props) => {
    
    const blogCtx = useContext(BlogContext);

    const handleFormSubmit =(event) =>{
        event.preventDefault();
        const toAddBlog = {
          title: event.target.title.value,
          id: Math.random().toString(),
          description: event.target.description.value,
          url: event.target.url.value,
        }
        blogCtx.setBlogs(toAddBlog);
        props.onFormCompletion();
    }
    

    return (
        <Modal onClose={props.onClose}>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <div>
                        <label htmlFor="url"> Image Url : </label>
                        <input id="url" name="url"></input>
                    </div>
                    <div>
                        <label htmlFor="title"> Title : </label>
                        <input id="title" name="title"></input>
                    </div>
                    <div>
                        <label htmlFor="description"> Image Description : </label>    
                        <input id="description" name="description"></input>
                    </div>
                </div>
                <div>
                    <button type="submit" >Post Blog</button>
                    <button type="button" onClick={props.onClose}>Close</button>
                </div>
            </form>
        </Modal>
    )

}

export default BlogForm;