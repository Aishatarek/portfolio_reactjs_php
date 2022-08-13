import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";


function Projects() {
    const [projects, setProject] = useState([]);

    useEffect(() => {
        loadProject();
    }, []);

    const loadProject = async () => {
        const result = await axios.get("http://localhost/portfolio/projects.php");
        setProject(result.data.reverse());
        // console.log(result.data)
    };

    return (
        <div>
            <section className="allprojectsec">
                <h3>All Projects</h3>
            <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="" className="waves" />
                <Container>
                    <Row>

                        {projects.map((project) => (
                            <Col md={4} sm={12} key={project.id}>
                                <div>
                                <img src={'http://localhost/portfolio/photos/' + project.photo} alt="" />
                                <h5>{project.title}</h5>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank">View</a>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

        </div>
    )
}

export default Projects