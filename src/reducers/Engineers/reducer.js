import constants from "./constants";

const initialApi = {
  loading: false,
  error: false,
  success: false
};

const emptyState = {
  engineers: [],
  api: initialApi
};

const initialState = JSON.parse( localStorage.getItem( "Engineers" ) ) || emptyState;

export default ( state = initialState, action = {} ) => {
  switch ( action.type ) {
    case constants.GET_ENGINEERS_PENDING : {
      return {
        ...state,
        api: {
          ...initialApi,
          loading: true
        }
      };
    }
    
    case constants.GET_ENGINEERS_SUCCESS: {
      const engineers = action.payload.engineers;
      let newState = {
        ...state,
        engineers,
        api: initialApi
      };
      
      localStorage.setItem( "Engineers", JSON.stringify( newState ) );
      return newState;
    }
    
    case constants.GET_ENGINEERS_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        api: {
          ...initialApi,
          error
        }
      };
    }
  
    case constants.SET_ENGINEERS_SUCCESS: {
      const engineers = action.payload;
      let newState = {
        ...state,
        engineers,
        api: initialApi
      };
    
      localStorage.setItem( "Engineers", JSON.stringify( newState ) );
      return newState;
    }
    
    default:
      return state;
  }
};
