import React from "react";
import { Formik, Form, Field, ErrorMessage, validationSchema } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  const initialValue = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a title."),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios
      .post("https://full-stack-sidan.herokuapp.com/posts", data)
      .then((response) => {
        navigate(`/`);
      });
  };

  return (
    // <div className="createPostBody">
    //   <h1>Animation Input</h1>

    //   <div className="form">
    //     <input type="text" name="name" autoComplete="off" required />
    //     <label htmlFor="name" className="label-name">
    //       <span class="content-name">Name</span>
    //     </label>
    //   </div>
    // </div>

    <div className="createPostPage">
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. Anson Banana ...)"
            autocomplete="off"
          />
          <label>Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex. Today is a good day!)"
            autocomplete="off"
          />
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. John ...)"
            autocomplete="off"
          />
          <button type="submit"> Create Post </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
