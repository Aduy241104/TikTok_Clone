import { useEffect, useRef, useState } from 'react'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper/Index'
import AccountItem from '../../../AccountItem/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, SetLoading] = useState(false);

    const inputRef = useRef(null);

    const changeSearchValue = (text) => {
        SetLoading(true);
        setSearchValue(text)
    }

    const clearSearchValue = () => {
        inputRef.current.focus();
        setSearchResult([]);
        setSearchValue("");
    }

    const handleHideResult = () => {
        setShowResult(false);
    }


    useEffect(() => {
        if (searchValue.trim() !== "") {
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
                .then(res => res.json())
                .then(res => {
                    SetLoading(false);
                    setSearchResult(res.data)
                })
        } else {
            setSearchResult([]);
        }

    }, [searchValue])


    return (
        <Tippy
            interactive
            visible={ searchResult.length > 0 && showResult }
            offset={ [1, 8] }
            onClickOutside={ () => handleHideResult() }
            render={ attrs => (
                <div className={ cx('search-result') } tabIndex="-1" { ...attrs }>
                    <PopperWrapper>
                        <h4 className={ cx('accounts') }>Accounts</h4>
                        { searchResult.map((item) => {
                            return (
                                <AccountItem
                                    nickName={ item.nickname }
                                    fullName={ item.full_name }
                                    avatar={ item.avatar }
                                    id={ item.id }
                                    tick={ item.tick }
                                    key={ item.id }
                                />
                            )
                        }) }
                    </PopperWrapper>
                </div>
            ) }
        >
            <div className={ cx('search-place') }>
                <input
                    type="text"
                    placeholder='Search accounts and videos'
                    className=''
                    spellCheck={ false }
                    ref={ inputRef }
                    onChange={ (e) => changeSearchValue(e.target.value) }
                    value={ searchValue }
                    onFocus={ () => setShowResult(true) }
                />
                { !!searchValue && (
                    (loading) ? (
                        <button className={ cx('clear-btn') } onClick={ () => clearSearchValue() }>
                            <i class="fa-solid fa-spinner fa-spin-pulse"></i>
                        </button>
                    ) : (
                        <button className={ cx('clear-btn') } onClick={ () => clearSearchValue() }>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>)
                ) }
                <button className={ cx('search-btn') }>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </Tippy>
    )
}

export default Search