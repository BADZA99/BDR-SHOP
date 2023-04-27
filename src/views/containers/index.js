import {connect} from 'react-redux';
import App from '../components/App'
import {updateCart} from '../../lib/actions';

export const AppContainer = connect(
  function mapStateToProps(state) {
    return {
      items: state.items,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      onUpdateCart: (item, quantity) => dispatch(updateCart(item, quantity)),
    };
  }
)(App);


