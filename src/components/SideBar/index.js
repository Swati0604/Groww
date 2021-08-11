import React from 'react';
import { Link } from 'react-router-dom';

//Custom Component
import Footer from '../../components/Footer';

//Styles
import './styles.scss';

function Sidebar(props) {
    return (
        <div className='page-style'>
            <div className="sidebar">
                <h4 className='bank-name'>Groww Bank</h4>
                <div className='side-link-container'>
                    <Link to="/all-banks" className={`side-link ${props.currentPage ==='All Banks' ? '' : 'opacity'}`}>All Banks</Link>
                    <Link to="/favourite-bank" className={`side-link ${props.currentPage ==='Favourite' ? '' : 'opacity'}`}>Favourites</Link>
                </div>
            </div>
            <div className='page-content'>
                {props.children}
                <Footer />
            </div>
        </div>


    );
}

export default Sidebar;