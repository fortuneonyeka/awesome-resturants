import * as React from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faGooglePlus, faVimeo, faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

import style from './navigationPanel.module.scss';

const NavigationPanel = () => (
  <nav className={style.container}>
    <img src="https://i.imgur.com/LWIomzF.png" alt="Logo" />
    <ul>
      <li>
        <NavLink to="/" exact activeClassName={style.active}>Restaurants</NavLink>
      </li>
      <li>
        <NavLink exact to="/" activeClassName={style.active}>Reserve</NavLink>
      </li>
      <li>
        <NavLink exact to="/" activeClassName={style.active}>Reservations</NavLink>
      </li>
      <li>
        <NavLink exact to="/" activeClassName={style.active}>Add restaurant</NavLink>
      </li>
      <li>
        <NavLink exact to="/" activeClassName={style.active}>Delete restaurant</NavLink>
      </li>
    </ul>

    <div className={style.socialMediaBlock}>
      <div>
        <Link to="https://www.twitter.com" className={style.socialButton}>
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </Link>
        <Link to="https://www.facebook.com" className={style.socialButton}>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </Link>
        <Link to="https://www.google.com" className={style.socialButton}>
          <FontAwesomeIcon icon={faGooglePlus} size="lg" />
        </Link>
        <Link to="https://www.vimeo.com" className={style.socialButton}>
          <FontAwesomeIcon icon={faVimeo} size="lg" />
        </Link>
        <Link to="https://www.pinterest.com" className={style.socialButton}>
          <FontAwesomeIcon icon={faPinterestP} size="lg" />
        </Link>
      </div>
      <br />
      <span>© PIAGGIO & C.S.P.A - PIVA</span>
    </div>
  </nav>
);

export default NavigationPanel;
