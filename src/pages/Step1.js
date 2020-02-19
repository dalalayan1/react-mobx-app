import React from 'react';
import { inject, observer } from 'mobx-react';

@inject()
@observer
export default class Step1 extends React.Component {
  componentWillUnmount() {}

  render() {
    return <div className="step1-page">this is step1</div>;
  }
}
