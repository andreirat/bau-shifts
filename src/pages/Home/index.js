import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "./home"
import MainState from "../../reducers/Main";
import EngineersState from "../../reducers/Engineers";

function mapStateToProps( state, props ) {
  return {
    shiftInfo: state.Main.shiftInfo,
    engineers: state.Engineers.engineers
  };
}

function mapDispatchToProps( dispatch, props ) {
  return bindActionCreators(
    {
      getShiftInfo: MainState.actions.getShiftInfo,
      assignEngineers: MainState.actions.assignEngineers,
      getEngineers: EngineersState.actions.getEngineers
    },
    dispatch
  );
}

export default connect( mapStateToProps, mapDispatchToProps )( Home );
