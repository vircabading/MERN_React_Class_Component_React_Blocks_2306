import React, { Component } from 'react';
import styles from "../Modules/MainComp.module.css"

export class MainComp extends Component {
    render() {
        return (
            <div className={ styles.main } >
                <h3>Main Component</h3>
            </div>
        )
    }
}

export default MainComp;