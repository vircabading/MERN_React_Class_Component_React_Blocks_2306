import React, { Component } from 'react';
import styles from "../Modules/NavigationComp.module.css"

export class NavigationComp extends Component {
    render() {
        return (
            <div className={ styles.navigation }>
                <h3>Navigation Component</h3>
            </div>
        )
    }
}

export default NavigationComp;