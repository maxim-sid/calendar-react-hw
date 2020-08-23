import React, { Component } from 'react'
import moment from 'moment';
import styles from './Week.module.css';

export default class Week extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            weekdaysShort: moment.weekdaysShort(),
        }
    }

    render() {
        var generateWeekday = this.state.weekdaysShort.map((day) => {
            return <td key={day} className={styles.weekdays}>{day}</td>
        })

        return <tr>
        {generateWeekday}
        </tr>
    }
}
