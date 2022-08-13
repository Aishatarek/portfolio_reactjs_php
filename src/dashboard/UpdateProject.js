import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const UpdateProject = () => {
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  const [user, setUser] = useState({
    title: "",
    description: "",
    photo: "",
    link: ""
  });
  const Photo = useRef("")
  const { title, description, photo, link } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('title', title)
    formData.append('description', description)
    if (Photo.current.files[0]) {
      formData.append('photo', Photo.current.files[0])
    }
    formData.append('link', link)
    await axios({
      method: 'post',
      url: `http://localhost/portfolio/projects.php/?id=${id}`,
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(function (response) {
        //handle success
        console.log(response)
        alert('New Contact Successfully Added.');
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      });

    // await axios.put(`http://localhost/ci_cart_geek/update-product/update/${id}`, user);
    // history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost/portfolio/projects.php/?id=${id}`);
    // console.log(result.data)

    setUser(result.data);
  };
  return (
    <div className="dashboardfom">
      <div className="container">
        <h3>Edit Project</h3>
        <form onSubmit={e => onSubmit(e)}>
          <p>Id</p>
          <input
            type="text"
            placeholder="Id"
            name=""
            value={id}
            onChange={e => onInputChange(e)}
            disabled
          />
          <p>Title</p>
          <input
            type="text"
            placeholder="Enter title"
            name="title"
            value={title}
            onChange={e => onInputChange(e)}
          />
          <p>Description</p>
          <textarea
            placeholder="description"
            name="description"
            value={description}
            onChange={e => onInputChange(e)}
          ></textarea>
          <p>Photo</p>
          <img src={'http://localhost/portfolio/photos/' + photo} alt="" />
          <input
            type="file"
            name="photo"
            ref={Photo}
          />
          <p>Link</p>
          <input
            type="text"
            placeholder="Enter link"
            name="link"
            value={link}
            onChange={e => onInputChange(e)}
          />
          <button>Update project</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;