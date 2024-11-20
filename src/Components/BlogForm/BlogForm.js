import React from "react";
import Modal from "../Modal/Modal";
const BlogForm = (props) => {

    return (
        <Modal onClose={props.onClose}>
            <form>
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
                    <button type="submit">Post Blog</button>
                    <button type="button" onClick={props.onClose}>Close</button>
                </div>
            </form>
        </Modal>
    )

}

export default BlogForm;