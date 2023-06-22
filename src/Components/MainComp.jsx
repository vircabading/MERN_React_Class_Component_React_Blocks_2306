import React, { Component } from 'react';
import styles from "../Modules/MainComp.module.css"

export class MainComp extends Component {
    render() {
        return (
            <div className={ styles.main } >
                <h3>Main Component</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ad reiciendis laboriosam atque similique! Facere nulla consequatur quam beatae soluta hic nisi in voluptatem quos ab, praesentium modi saepe.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ad reiciendis laboriosam atque similique! Facere nulla consequatur quam beatae soluta hic nisi in voluptatem quos ab, praesentium modi saepe.</p>                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ad reiciendis laboriosam atque similique! Facere nulla consequatur quam beatae soluta hic nisi in voluptatem quos ab, praesentium modi saepe.</p>
            </div>
        )
    }
}

export default MainComp;