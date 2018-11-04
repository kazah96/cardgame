import Component from './GameObject.jsx';
import { connect } from 'react-redux';
import {changePosition} from '../../actions/gameObject';

function mapStateToProps(state) {
    return {
        position: state.gameObject.position
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changePosition: position => dispatch(changePosition(position))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);