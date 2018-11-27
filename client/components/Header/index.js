import { connect } from 'react-redux';
import Header from './Header';
import { showModal } from '../../actions/modal';
import { logout } from '../../actions/login';

function mapStateToProps(state) {
  return {
    user: state.currentUser.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: () => dispatch(showModal(`loginform`)),
    onLogout: () => dispatch(logout()),
    onRegister: () => dispatch(showModal(`regform`)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
