export default function reducer(state={
  user: null,
  fetching: false,
  fetched: false,
  error: null
}, action){

  switch(action.type){
    case "FETCH_USER": {
      return {...state, fetching: true};
    }
    case "FETCH_USER_REJECTED": {
      return {...state, fetching: false};
    }
    case "FETCH_USER_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload
      };
    }
  }

  return state;
}
