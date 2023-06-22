import React, { Component } from 'react';
import styles from "../Modules/MainComp.module.css";

export class AdvertComp extends Component {
    render() {
        return (
            <div className={ styles.advert } >
                <h3>Advertisement Component</h3>
            </div>
        )
    }
}

export default AdvertComp;