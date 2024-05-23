import React, { useContext } from 'react';
import AppContext from '../../Context';
import TokenService from '../../Services/token-service';
import { Link } from 'react-router-dom';
import { Style } from 'radium';

export default function NavBar() {
  const contextFunctions = useContext(AppContext);

  const renderLoginLink = () => {
    return (
      <header>
        <div id='desktop-header'>
          <h1 id='neighbr'>Neighbr</h1>
          <nav >
            <Style
              scopeSelector='.links'
              rules={{
                a: { color: 'white' },
                'a:visited': { color: 'white' },
              }}
            />
            <Link to='/about'>
              about
            </Link>
            <Link to='/login'>
              login
            </Link>
            <Link to='/register'>
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
          <nav >
            <Style
              scopeSelector='.links'
              rules={{
                a: { color: 'white' },
                'a:visited': { color: 'white' },
              }}
            />
            <Link to='/'>
              home
            </Link>
            <Link to='/profile'>
              profile
            </Link>
            <Link to='/about'>
              about
            </Link>
            <Link
              to='/login'
              onClick={(e) => contextFunctions.processLogout(e)}
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
