import React, { Component } from 'react'
import Day from '../Day/index'
import Week from '../Week/index'
import Month from '../Month/index'
import Year from '../Year/index'
import styles from './Calendar.module.css'

export default class Calendar extends Component {
    render() {
        return (
            <>
            <div className={styles.container}>
                <Month /><Year />

            </div>
            <div>    
                <table className={styles.tableContainer}>
                        <tbody className={styles.tbody}>
                        <Week />
                        <Day /> 
                        </tbody>
                </table>
            </div>
            </>
        )
    }
}
