import React, { Component } from 'react'
import styles from "../Modules/SubContentComp.module.css"

export class SubContentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content
        };
    }
    render() {
        return (
            <div className={ styles.subcontent }> 
                <p>{ this.state.content }</p>
            </div>
        )
    }
}

export default SubContentComp;