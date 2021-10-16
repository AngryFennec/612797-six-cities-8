import Main from '../views/main/main';
import {DefaultPropsType} from '../../types/propsTypes';

function App({offersCount}: DefaultPropsType): JSX.Element {
  return <Main offersCount={offersCount} />;
}

export default App;
