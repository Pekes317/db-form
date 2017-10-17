import  { combineEpics } from 'redux-observable';

import { pingEpic} from './pingpong.epic';

export default combineEpics(
    pingEpic
);