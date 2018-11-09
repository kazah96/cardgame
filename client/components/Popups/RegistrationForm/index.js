import RegistrationForm from './RegistrationForm';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/login';
import { closeModal } from '../../../actions/modal';

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: ({ username, password, year }) => {
            dispatch(registerUser({ username, password, year }));
            dispatch(closeModal());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);