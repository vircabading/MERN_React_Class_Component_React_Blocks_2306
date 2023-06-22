import React, { Component } from 'react';
import styles from "../Modules/MainComp.module.css";
import SubContentComp from './SubContentComp';
import AdvertComp from './AdvertComp';

export class MainComp extends Component {
    render() {
        return (
            <div className={styles.main} >
                <h3>Main Component</h3>
                <div className={styles.columnsContainer} >
                    <SubContentComp content="first column Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ad reiciendis laboriosam atque similique! Facere nulla consequatur quam beatae soluta hic nisi in voluptatem quos ab, praesentium modi saepe.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ad reiciendis laboriosam atque similique! Facere nulla consequatur quam beatae soluta hic nisi in voluptatem quos ab, praesentium modi saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ad reiciendis laboriosam atque similique! Facere nulla consequatur quam beatae soluta hic nisi in voluptatem quos ab, praesentium modi saepe." />
                    <SubContentComp content="second columnLorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ad reiciendis laboriosam atque similique! Facere nulla consequatur quam beatae soluta hic nisi in voluptatem quos ab, praesentium modi saepe.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ad reiciendis laboriosam atque similique! Facere nulla consequatur quam beatae soluta hic nisi in voluptatem quos ab, praesentium modi saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ad reiciendis laboriosam atque similique! Facere nulla consequatur quam beatae soluta hic nisi in voluptatem quos ab, praesentium modi saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ad reiciendis laboriosam atque similique! Facere nulla consequatur quam beatae soluta hic nisi in voluptatem quos ab, praesentium modi saepe." />
                    <SubContentComp content="third column Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt ad reiciendis laboriosam atque similique! Facere nulla consequatur quam beatae soluta hic nisi in voluptatem quos ab, praesentium modi saepe." />
                </div>
                <AdvertComp />
            </div>
        )
    }
}

export default MainComp;