import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Engineers from "./engineers"
import EngineersState from "../../reducers/Engineers";

function mapStateToProps( state, props ) {
  return {
    engineers: state.Engineers.engineers,
  };
}

function mapDispatchToProps( dispatch, props ) {
  return bindActionCreators(
    {
      getEngineers: EngineersState.actions.getEngineers
    },
    dispatch
  );
}

export default connect( mapStateToProps, mapDispatchToProps )( Engineers );
