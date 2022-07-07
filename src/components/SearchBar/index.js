import React, { useState, useEffect, useRef } from "react"
import PropTypes from 'prop-types'

// image
import searchIcon from '../../images/search-icon.svg'

// style
import { Wrapper, Content } from "./SearchBar.styles"

function SearchBar({ setSearchTerm }) {
    const [state, setState] = useState('')
    const initial = useRef(true)

    useEffect(() => {
        if(initial.current){
            initial.current = false
            return
        }

        const timer = setTimeout(setSearchTerm(state), 500)

        return () => clearTimeout(timer)
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input
                    value={state}
                    type="text"
                    placeholder="Search Movie"
                    onChange={e => setState(e.target.value)}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    setState: PropTypes.func
}

export default SearchBar