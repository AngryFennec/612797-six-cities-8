import {Link} from 'react-router-dom';

function Error404(): JSX.Element {
  return (
    <div>
      <p>404 Not Found</p>
      <Link to='/'>Назад на главную</Link>
    </div>
  );
}

export default Error404;
