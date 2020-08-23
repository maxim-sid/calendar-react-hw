import React, { Component } from 'react'
import moment from 'moment'
import styles from './Month.module.css'

export default class Month extends Component {
    constructor(props){
        super(props);

        this.state = {
            month: moment().format("MMMM")
        }
    }
    
    render() {
        return (
                <p className={styles.month}>{this.state.month}</p>
        )
    }
}
