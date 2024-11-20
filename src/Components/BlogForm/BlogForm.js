import React, { useContext, useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import BlogContext from "../../store/blog-context";
const BlogForm = (props) => {

    const blogCtx = useContext(BlogContext);

    const [formData, setFormData] = useState({
        url: "",
        title: "",
        description: "",
    });

    useEffect(() => {
        if ( blogCtx.blogToEdit) {
            setFormData(blogCtx.blogToEdit);
        }else{
            setFormData({
                url: "",
                title: "",
                description: "",
            })
        }
    }, [blogCtx.blogToEdit]);


    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (blogCtx.blogToEdit) {
            blogCtx.editBlogs(blogCtx.blogToEdit.id, formData);
            
        } else {
            blogCtx.setBlogs({ ...formData, id: Math.random().toString() });
        }
        blogCtx.setBlogToEdit(null);
        props.onShowModalChange(false);
    }

    const handleChange= (event)=>{
        const key = event.target.name;
        const value = event.target.value;
        setFormData((prevData)=>{
            return {...prevData, [key]: value}
        })
    }
    const closeButtonHandler =()=>{
        props.onShowModalChange(false);
        blogCtx.setBlogToEdit(null);
    }


    return (
        <Modal onClose={props.onShowModalChange}>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <div>
                        <label htmlFor="url">Image Url: </label>
                        <input
                            id="url"
                            name="url"
                            value={formData.url}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <button type="submit">{blogCtx.editBlog ? "Update Blog" : "Post Blog"}</button>
                    <button type="button" onClick={closeButtonHandler}>
                        Close
                    </button>
                </div>
            </form>
        </Modal>
    );

}

export default BlogForm;