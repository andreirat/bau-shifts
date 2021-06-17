import constants from "./constants";

const initialApi = {
  loading: false,
  error: false,
  success: false
};

const emptyState = {
  shiftInfo: {
    todayShift: null,
    yesterdayShift: null
  },
  api: initialApi
};

const initialState = JSON.parse( localStorage.getItem( "ShiftInfo" ) ) || emptyState;

export default ( state = initialState, action = {} ) => {
  switch ( action.type ) {
    
    case constants.GET_SHIFT_INFO_PENDING : {
      return {
        ...state,
        api: {
          ...initialApi,
          loading: true
        }
      };
    }
    
    case constants.GET_SHIFT_INFO_SUCCESS: {
      const shifts = action.payload;
      let newState = {
        ...state,
        shiftInfo: {
          todayShift: shifts.todayShift,
          yesterdayShift: shifts.yesterdayShift
        },
        api: initialApi
      };
      
      localStorage.setItem( "ShiftInfo", JSON.stringify( newState ) );
      return newState;
    }
    
    case constants.GET_SHIFT_INFO_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        api: {
          ...initialApi,
          error
        }
      };
    }
    
    case constants.ASSIGN_ENGINEERS_PENDING : {
      return {
        ...state,
        api: {
          ...initialApi,
          loading: true
        }
      };
    }
    
    case constants.ASSIGN_ENGINEERS_SUCCESS: {
      const shifts = action.payload;
      let newState = {
        ...state,
        shiftInfo: {
          todayShift: shifts.todayShift,
          yesterdayShift: shifts.yesterdayShift
        },
        api: initialApi
      };
      
      localStorage.setItem( "ShiftInfo", JSON.stringify( newState ) );
      return newState;
    }
    
    case constants.ASSIGN_ENGINEERS_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        api: {
          ...initialApi,
          error
        }
      };
    }
    
    default:
      return state;
  }
};
