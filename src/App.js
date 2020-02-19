import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Step1 from './pages/Step1';
import Pitch from './pages/Pitch';

@inject('formStore')
@withRouter
@observer
export default class App extends React.Component {
  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div>
        <Switch>
          <Route path="/step1" component={Step1} />
          <Route path="/" component={Pitch} />
        </Switch>
      </div>
    );
  }
}
