import * as React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';

import Message from '../components/Message';
import MyForm from '../components/Form';
import { PingAction } from '../actions';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    pingReducer: any;
    ping: typeof PingAction;
  }

  export interface State {

  }
}

const stateProps = (state, props) => {
  return {
    formFields: state.FormReducer,
    pingReducer: state.PingPongReducer
  };
};

const dispatchProps = (dispatch) => {
  return {
    ping: bindActionCreators(PingAction as any, dispatch)
  };
};

export class App extends React.Component<any, any> {
  render() {
    let text = this.props.pingReducer;
    let form = this.props.formFields;
    console.log(text.isPinging, form);
    return (
      <div>
        <Message message='Hello' text='world' />
        <MyForm fields={form} />
      </div>
    );
  }
}

export default connect(stateProps, dispatchProps)(App);