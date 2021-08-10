import React, { Component } from 'react';

//Custom Component
import NotFoundPage from '../../components/NotFoundPage';

//Images
import Page404Icon from '../../assets/Page404.svg';

class Page404 extends Component {
  render() {
    return (
      <div className='Page'>
        <NotFoundPage
          notFoundImg={Page404Icon}
          title='Oopsie! Something’s missing...'
          subTitle='What you’re looking for maye have been replaces in long term memory.'
          buttonText='Back to home'
          buttonLink='/'
        />
      </div>
    );
  }
}
export default Page404;