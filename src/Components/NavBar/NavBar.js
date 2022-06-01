import React, { useContext } from 'react';
import AppContext from '../../Context';
import TokenService from '../../Services/token-service';
import { Link } from 'react-router-dom';
import { Style } from 'radium';

import './NavBar.css';

export default function NavBar() {
  const contextFunctions = useContext(AppContext);

  const renderLoginLink = () => {
    return (
      <header>
        <div id='desktop-header'>
          <h1 id='neighbr'>Neighbr</h1>
          <nav className='links'>
            <Style
              scopeSelector='.links'
              rules={{
                a: { color: 'white' },
                'a:visited': { color: 'white' },
              }}
            />
            <Link className='link' to='/about'>
              about
            </Link>
            <Link className='link' to='/login'>
              login
            </Link>
            <Link className='link' to='/register'>
              register
            </Link>
          </nav>
        </div>
      </header>
    );
  };

  const renderLogoutLink = () => {
    return (
      <header>
        <div id='desktop-header'>
          <h1 id='neighbr'>Neighbr</h1>
          <nav className='links'>
            <Style
              scopeSelector='.links'
              rules={{
                a: { color: 'white' },
                'a:visited': { color: 'white' },
              }}
            />
            <Link className='link' to='/'>
              home
            </Link>
            <Link className='link' to='/profile'>
              profile
            </Link>
            <Link className='link' to='/about'>
              about
            </Link>
            <Link
              className='link'
              to='/login'
              onClick={(e) => contextFunctions.handleLogout(e)}
            >
              logout
            </Link>
          </nav>
        </div>
      </header>
    );
  };

  return (
    <>{TokenService.hasAuthToken() ? renderLogoutLink() : renderLoginLink()}</>
  );
}
