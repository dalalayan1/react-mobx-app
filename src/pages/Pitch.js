import React from 'react';
import { inject, observer } from 'mobx-react';

@inject()
@observer
export default class Pitch extends React.Component {
  componentWillUnmount() {}

  render() {
    return <div className="pitch-page">this is pitch</div>;
  }
}
