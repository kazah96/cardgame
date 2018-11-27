import { connect } from 'react-redux';
import mapActions from 'actions/map';
import Component from './Map';

function mapStateToProps(state, props) {
  return {
    map: state.map[props.mapname],
    tiles: state.tiles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMap: name => dispatch(mapActions.load(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
