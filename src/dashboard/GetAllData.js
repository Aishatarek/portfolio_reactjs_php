import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const GetAllData = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    loadProject();
  }, []);

  const loadProject = async () => {
    const result = await axios.get("http://localhost/portfolio/projects.php");
    setProject(result.data.reverse());
    // console.log(result.data)
  };

  const deleteProject = (productId) => {
    axios.post('http://localhost/portfolio/projects.php/?delete=' + productId)
      .then((result) => {
        loadProject();
      })
      .catch(() => {
        alert('Error in the Code');
      });
  };

  return (
    <div className="getAll">
      <div className="container">
        <Link to="/AddProject" className="addBTN">Add Projects</Link>
        <h3>All Projects</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Link</th>
              <th scope="col">Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.id}>
                <td scope="row">{index + 1}</td>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td><a href={project.link} target="_blank">View</a></td>
                <td><img src={'http://localhost/portfolio/photos/' + project.photo} alt="" height={80} /></td>
                <td className="actions">
                  <Link to={`/UpdateProject/${project.id}`}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                  <button onClick={() => deleteProject(project.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default GetAllData;