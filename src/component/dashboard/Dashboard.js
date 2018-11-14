import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase' 
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component{
    render(){
        const { projects, auth } = this.props;

        if(!auth.uid) return <Redirect to='/signin'/>


        return(
            <div className="container">
                <div className="row">
                    <div className="col s12 m7">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1"></div>
                    <Notifications/>
                </div>
                
                </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        projects: state.firestore.ordered.projects,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)