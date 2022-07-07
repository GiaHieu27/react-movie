import React, { useContext } from "react"
import { Link } from "react-router-dom"

import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles"

import { Context } from '../../context'

function Header() {
    const [user] = useContext(Context)

    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <LogoImg src={RMDBLogo} alt='indb-logo' />
                </Link>
                {user ? (
                    <span className='loggedin'>
                        Logged in as: {user.username}
                    </span>
                ) : (
                    <Link to='/login'>
                        <span className='login'>
                            Log in
                        </span>
                    </Link>
                )
                }
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    )
}

export default Header