import _ from 'lodash';

const INITIAL_STATE = {
  time: new Date().toLocaleTimeString()
};


const reducers = (state = INITIAL_STATE, action) => {

  switch( action.type ) {

    case 'TIME_CHANGED': {
        state = _.assign({}, state, {
                                      time: action.data.time
                                    });
    }
    break;

  }
  return state;

};

export default reducers;
