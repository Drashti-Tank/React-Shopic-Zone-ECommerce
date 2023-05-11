import React from 'react';
import "./Header.scss";
import {Link} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <header className='header text-white'>
      <div className='container'>
        <div className='header-cnt'>
          <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
            <div className='header-cnt-top-l'>
              <ul className='flex top-links align-center'>
                <li>
                  {/* dummy links */}
                  <Link to = "/seller">Seller Account</Link>
                </li>
                
              </ul>
            </div>
            <div>
              <h3>Welcome to the ShopicZone... Let's connect virtually!</h3>
            </div>
            <div className='header-cnt-top-r'>
              <ul className='top-links flex align-center'>
                <li className='mx-3'>
                  {
                    isAuthenticated && <p>
                      {user.name}
                    </p>
                  }
                </li>
                {
                  isAuthenticated ? (<li>
                    <Link to="/">
                      <span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                      </span>
                    </Link>
                  </li>
                  ) : (
                      <li>
                        <Link to="/">
                          <span onClick={() => loginWithRedirect()}>Log In / Sign Up</span>
                        </Link>
                      </li>
                   )

                }
                
              </ul>
            </div>
          </div>

          <div className='header-cnt-bottom'>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header