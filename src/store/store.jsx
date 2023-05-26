import { legacy_createStore as createStore} from 'redux';
import reducer from '../reducer/reducer';

//On appelle reducer ici pour y avoir accès partout via store qui contient createStore
const store = createStore(reducer);

export default store;

