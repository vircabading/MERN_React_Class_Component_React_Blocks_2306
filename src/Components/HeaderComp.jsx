import React, { Component } from 'react'
import styles from "../Modules/HeaderComp.module.css"

export class HeaderComp extends Component {
  render() {
    return (
        <div className={ styles.header }>
            <h1>React Blocks</h1>
        </div>
    )
  }
}
;
export default HeaderComp;