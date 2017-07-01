import React from 'react'
import PropTypes from 'prop-types'
import {
  NavLink
} from 'react-router-dom'
import styles from './styles.css'

import BaseComponent from 'BaseComponent'

export default function Component(props) {
  return (
    <div className={styles.Component}>
      <div className={styles.content}>
        <div className={styles.left}>
          <NavigationLink to="/">Main page</NavigationLink>
        </div>
        {/*<div className={styles.right}>
          <NavigationLink to="/profile">Profile</NavigationLink>
          <NavigationLink to="/logout">Log Out</NavigationLink>
        </div>*/}
      </div>
    </div>
  )
}

function NavigationLink(props) {
  return <NavLink {...props} className={styles.NavigationLink} activeClassName={styles.currentLink} />
}
