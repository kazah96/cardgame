import Component from './Map';
import { connect } from 'react-redux';
import mapActions from 'actions/map';
import tiles from 'actions/tiles';

function mapStateToProps(state, props) {
    return {
        map: state.map[props.mapname],
        tiles: state.tiles,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      getMap: (name) => dispatch(mapActions.load(name)),
      getTiles: (name) => dispatch(tiles.load(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);