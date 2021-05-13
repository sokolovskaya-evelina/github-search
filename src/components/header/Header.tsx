import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import style from './Header.module.scss'
import githubIcon from './../../assets/icons/github.svg'
import {useDispatch} from 'react-redux';
import {searchUserTC} from '../../Redux/user-reducer';

const Header = () => {
    const dispatch = useDispatch()

    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            dispatch(searchUserTC(value))
            console.log('enter press here! ' + value)
        }
    }

    return (
        <header className={style.header}>
            <img src={githubIcon} alt="github"/>
            <input onChange={onChangeHandler}
                   onKeyPress={handleKeyPress}
                   value={value}
                   className={style.searchInput}
                   type="text"
                   name="search"
                   placeholder="Enter GitHub username"
            />
        </header>
    );
};

export default Header;