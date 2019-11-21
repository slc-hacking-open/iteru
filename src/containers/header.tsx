import { connect } from "react-redux";
import { Dispatch } from "redux";

import Header from "../components/header";
import { RootState } from "../reducer";

export interface StateProps {
  showingLocationName: string;
}

interface DispatchProps {
  openSlideMenu: () => void;
}

const mapStateToProps = (state: RootState): StateProps => ({
  showingLocationName: state.app.showingLocationName
});

/*
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  function: () => dispatch(function())
});
*/

export default connect(mapStateToProps)(Header);
