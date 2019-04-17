import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProject } from '../../actions/projectActions';
import Spinner from '../common/Spinner';
import { Link } from 'react-router-dom';

class Project extends Component {
  componentDidMount() {
    this.props.getProject(this.props.match.params.id);
  }

  renderSkillList = skills => {
    return skills.length > 0 ? (
      skills.map(skill => (
        <li key={skill} className="skill-interest-list-item">
          {skill}
        </li>
      ))
    ) : (
      <p>No skills</p>
    );
  };
  renderInterestList = interests => {
    return interests.length > 0 ? (
      interests.map(interest => (
        <li key={interest} className="skill-interest-list-item">
          {interest}
        </li>
      ))
    ) : (
      <p>No interests</p>
    );
  };

  render() {
    const { project, loading } = this.props.projects;
    let projectContent;

    if (project === null) {
      //getProject returned error
      projectContent = (
        <div className="col text-center mt-5">
          <i class="fas fa-search-minus fa-7x text-black-50 mb-2" />
          <h1 className="display-4 text-black-50">Project not found</h1>
        </div>
      );
    } else if (Object.keys(project).length > 0) {
      //everything fine
      projectContent = (
        <div className="col border rounded p-3">
          <div className="project-header d-flex justify-content-between align-items-center">
            <h2>{project.title}</h2>

            <div className="dropdown">
              <i
                className="fas fa-ellipsis-v"
                id="project-options"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <div className="dropdown-menu" aria-labelledby="project-options">
                <Link
                  to={`/project/edit/${project._id}`}
                  className="dropdown-item"
                >
                  Edit project
                </Link>
                <Link className="dropdown-item">Delete project</Link>
              </div>
            </div>
          </div>
          <p>{project.publicDescription}</p>
          <p>Skills</p>
          <ul className="skill-interest-list">
            {this.renderSkillList(project.skills)}
          </ul>
          <p>Interests</p>
          <ul className="skill-interest-list">
            {this.renderInterestList(project.interests)}
          </ul>
        </div>
      );
    }

    return (
      <div className="container mt-4">
        {loading ? <Spinner /> : <div className="row">{projectContent}</div>}
      </div>
    );
  }
}
Project.propTypes = {
  getProject: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  projects: state.projects
});
export default connect(
  mapStateToProps,
  { getProject }
)(Project);