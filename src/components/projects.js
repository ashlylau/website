import React from "react"
import {Row, Col, Container } from 'react-bootstrap'
import style from "../styles/projects.module.css"
import SectionHeader from "./section-header"

import cinect from "../images/projects/cinect.png"
import charje from "../images/projects/charje.png"
import stitchcall from "../images/projects/stitch-call.png"


const projectInfo = [
    {
        image: cinect,
        title: 'Cinect',
        desc: 'React-native mobile app to help you choose movies with your friends',
    },
    {
        image: charje,
        title: 'CHARJE',
        desc: 'An agent-based prediction marketplace implemented on a blockchain',
    },
    {
        image: stitchcall,
        title: 'Stitch-Call',
        desc: 'A non-conventional video call platform',
    }
]

export default function ProjectsSection() {
    return (
        <div>
            <SectionHeader props={{title:'PROJECTS', color: '#30838D'}} />
            <Container>
                <Row>
                {projectInfo.map((item) => <ProjectItem props={item}/>)}
                </Row>
            </Container>
        </div>
    );
}

const ProjectItem = ({props}) => (
    <Col sm={4}>
        <img className={style.project}
        src={props.image}
        alt={props.title}/>
        <div className={style.container}>
            <p className='my-h2'>{props.title}</p>
            <p className='my-body'>{props.desc}</p>
        </div>
    </Col>
);
