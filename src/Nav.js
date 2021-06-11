import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { FaBars, FaDollarSign, FaChartLine, FaUserAlt } from 'react-icons/fa';

// const styles = StyleSheet.create({
//   navList: {
//     display: 'flex',
//     flexDirection: 'column-reverse',
//   },
// });

export default function Nav() {
  const [isClosed, setIsClosed] = useState(true);

  const handleClick = () => {
    setIsClosed(!isClosed);
  };

  const menuState = () => (isClosed ? 'closed' : null);


  return (
    <nav>
      <ul>
        <Link onClick = {() => setIsClosed(true)} to = "/input-expenses">
          <li className = {menuState()}>
            <span className = {`label ${menuState()}`}>
              Add Expenses
            </span>

            <span className = "logo">
              <FaDollarSign size = "50%" />
            </span>
          </li>
        </Link>

        <Link onClick = {() => setIsClosed(true)} to = "/statistics">
          <li className = {menuState()}>
            <span className = {`label ${menuState()}`}>
              Statistics
            </span>

            <span className = "logo">
              <FaChartLine size = "50%" />
            </span>
          </li>
        </Link>

        <Link to = '/account/profile'>
          <li className = {menuState()}>
            <span className = {`label ${menuState()}`}>
              Profile
            </span>

            <span className = "logo">
              <FaUserAlt size = "50%" />
            </span>

          </li>
        </Link>
      </ul>
      <div className = "menu-icon" onClick = {handleClick}>
        <FaBars size = "50%" />
      </div>
    </nav>
  );
}