import * as React from 'react';
import { render } from 'react-dom';
import { Route, Router, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import 'rxjs';

import App from './containers/App';
import store from './store';
import { PingAction } from './actions';

const history = createBrowserHistory();

class Root extends React.Component {
  componentDidMount() {
    let data = store.getState()['PingPongReducer'];
    console.log(data);
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path='/' component={App} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

render(
  <Root />,
  document.getElementById('root')
) as HTMLElement;