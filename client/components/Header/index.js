import Header from './Header.jsx';
import { connect } from 'react-redux';
import { showLoginModal, logout } from '../../actions/login';

function mapStateToProps(state) {
    return {
        user: state.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLogin: () => dispatch(showLoginModal),
        onLogout: () => dispatch(logout),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);