import { Ping, Pong } from '../constants';

export default (state = { isPinging: false }, action) => {
    switch (action.type) {
      case Ping:
        return { isPinging: true };
  
      case Pong:
        return { isPinging: false };
  
      default:
        return state;
    }
  };