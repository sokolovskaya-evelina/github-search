import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react'
import style from './Header.module.scss'
import githubIcon from './../../assets/icons/github.svg'
import {useDispatch} from 'react-redux';
import {getData, setCurrentPage} from '../../Redux/reducer';

const Header = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const handleKeyPress = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(getData(value))
            dispatch(setCurrentPage(1))
            setValue('')
        }
    }, [value, setValue, dispatch])

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