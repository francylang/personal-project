import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../../containers/HeaderContainer';
import ClassroomContainer from '../../containers/ClassroomContainer';
import CoreValueContainer from '../../containers/CoreValueContainer';
import NewStudentContainer from '../../containers/NewStudentContainer';
import NewCoreValueContainer from '../../containers/NewCoreValueContainer';
import LoginContainer from '../../containers/LoginContainer';

class Routes extends Component {

  render() {
    return (
      <div className="routes">
        <HeaderContainer />
        <Route path="/login" component={ LoginContainer } />
        <Route exact path="/" component={ ClassroomContainer }/>
        <Route path="/newstudent" component={ NewStudentContainer }/>
        <Route path="/newcorevalue" component={ NewCoreValueContainer }/>
        <Route path="/students/:id" component={ CoreValueContainer }/>
      </div>
    );
  }
}

export default Routes;
