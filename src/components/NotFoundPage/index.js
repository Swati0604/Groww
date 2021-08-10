import { Link } from 'react-router-dom';

//Styles
import './styles.scss';

function NotFoundPage(props) {
  return (
    <div className='not-found-style'>
      <div className='img-container'>
        <img src={props.notFoundImg} className='not-found' alt='not-found' />
      </div>
      <p className='title'>{props.title}</p>
      <p className='sub-title'>{props.subTitle}</p>
      <Link to={props.buttonLink} className='link-button'>
        {props.buttonText}
      </Link>
    </div>
  );
}

export default NotFoundPage;