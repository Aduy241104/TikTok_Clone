import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper/Index';
import AccountItem from '../../../AccountItem/AccountItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '../../../../hooks';
import { search } from '../../../../apiServices/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, SetLoading] = useState(false);

    const inputRef = useRef(null);
    const debounceValue = useDebounce(searchValue, 500)

    const changeSearchValue = (text) => {
        if (text.length > 0 && text.trim() !== "") {
            SetLoading(true);
            setSearchValue(text)
        } else if (text === "") {
            setSearchValue(text)
        }
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
        console.log("re-render");

        if (!!debounceValue.trim()) {

            const fetchAPI = async () => {
                const searchResult = await search(debounceValue);
                SetLoading(false);
                setSearchResult(searchResult.data)
            }
            fetchAPI();
        } else {
            setSearchResult([]);
        }
    }, [debounceValue])

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
                { !!searchValue.trim() && (
                    (loading) ? (
                        <button className={ cx('clear-btn') } onClick={ () => clearSearchValue() }>
                            <i class="fa-solid fa-spinner fa-spin-pulse"></i>
                        </button>
                    ) : (
                        <button className={ cx('clear-btn') } onClick={ () => clearSearchValue() }>
                            <i className="fa-solid fa-circle-xmark"></i>
                        </button>)
                ) }
                <button className={ cx('search-btn') } onMouseDown={(e) => e.preventDefault()}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </Tippy>
    )
}

export default Search