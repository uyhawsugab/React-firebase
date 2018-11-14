import React from 'react'
import moment from 'moment'
import Naye12 from '../../../src/naye1.jpg'


const ProjectSummary = ({project}) => {
    return(
        <div className="card large z-depth-0 project-summary pink lighten-4">
            <div className="card-image">
                <img className="img1" src={Naye12} alt=""/>
                <span className="card-title center white-text">{project.title}</span>
            </div>
            <div className="card-contect grey-text text-darken-3">
                <p> Posted By {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
            <div className="card-action grey-text text-darken-3">
                <a href="">This is Links</a>
            </div>
        </div>
    )
}


export default ProjectSummary