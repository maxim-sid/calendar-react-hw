import React, { Component } from 'react'
import moment from 'moment'
import styles from './Year.module.css'

export default class Year extends Component {
    constructor(props){
        super(props);

        this.state = {
            year: moment().format("YYYY")
        }
    }

    render() {
        return (
        <p className={styles.year}>{this.state.year}</p>
        )
    }
}
