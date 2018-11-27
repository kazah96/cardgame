import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../../actions/login';
import { closeModal } from '../../../actions/modal';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: ({ username, password }) => {
      dispatch(login({ username, password }));
      dispatch(closeModal());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
