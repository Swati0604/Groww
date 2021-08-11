//Images
import notFound from '../../assets/not-found.svg';

//Styles
import './styles.scss';

function NotFound(props) {
  return (
    <div className='not-found-style'>
      <div className='img-container'>
        <img src={notFound} className='not-found' alt='not-found' />
      </div>
      <p className='title'>{props.title}</p>
      <p className='sub-title'>{props.subTitle}</p>
    </div>
  );
}

export default NotFound;