import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faEnvelope,
  faGear,
  faMessage,
  faMusic,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <a>
            <FontAwesomeIcon icon={faCircleUser} className={s.item_icon} />
            <span>Profile</span>
          </a>
        </li>
        <li className={s.item}>
          <a>
            <FontAwesomeIcon icon={faEnvelope} className={s.item_icon} />
            <span>Messages</span>
          </a>
        </li>
        <li className={s.item}>
          <a>
            <FontAwesomeIcon icon={faNewspaper} className={s.item_icon} />
            <span>News</span>
          </a>
        </li>
        <li className={s.item}>
          <a>
            <FontAwesomeIcon icon={faMusic} className={s.item_icon} />
            <span>Music</span>
          </a>
        </li>
        <li className={s.item}>
          <a>
            <FontAwesomeIcon icon={faGear} className={s.item_icon} />
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
