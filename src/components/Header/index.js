import React from 'react';

//icons
import { BsSearch } from 'react-icons/bs';

//Custom Component
import SelectPrimary from '../SelectPrimary';
import PrimaryInput from '../PrimaryInput';

// Style
import './styles.scss';

function Header(props) {
    return (
        <div className='header-style'>
            <h4 className='page-name heading'>{props.pageName}</h4>
            <div className='select-search-tag'>
                <SelectPrimary
                    title='Select City'
                    list={props.city}
                    itemSelected={(index) => props.citySelected(index)}
                    toggleList={() => props.toggleCityList()}
                    selectedValue={props.selectedCity}
                    listOpen={props.cityListOpen}
                />
                <div className='mid'>
                    <SelectPrimary
                        title='Select Category'
                        list={props.category}
                        itemSelected={(index) => props.categorySelected(index)}
                        toggleList={() => props.toggleCategoryList()}
                        selectedValue={props.selectedCategory}
                        listOpen={props.categoryListOpen}
                    />
                </div>
                <PrimaryInput
                    type='text'
                    name='search'
                    value={props.value}
                    onChange={(e) => props.handleChange(e)}
                    placeholder='Search'
                    isActive={true}
                    rightContent={<BsSearch />}
                />
            </div>
        </div>
    );
}

export default Header;