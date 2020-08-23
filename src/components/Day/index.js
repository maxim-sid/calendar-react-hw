import React, { Component } from 'react'
import moment from 'moment'
import styles from './Day.module.css'

export default class Day extends Component {
    constructor(props){
        super(props);

        this.state = {
            momentObject: moment(),
        }
    }

    daysInMonth = () => {
        return this.state.momentObject.daysInMonth();
    }

    firstDay = () => {
        const momentObject = this.state.momentObject;
        const dayFirst = moment(momentObject).startOf('M').format('d')
        return dayFirst;
    }

    currentDay = () => {
        return this.state.momentObject.format("D");
    };

    render() {

            const blank = [];
            for (let i = 0;i < this.firstDay();i++) {
            blank.push(<td key={i} className={styles.empty}>{' '}</td>);
            }
            
            const daysInMonth = [];
            for (let d = 1; d <= this.daysInMonth(); d++) {
                let className = (d == this.currentDay() ? styles.current_day: styles.day);
                daysInMonth.push(
                    <td key={d} className={className} >
                        <span>{d}</span>
                    </td>
                );
            }
              

            
            const slots = [...blank, ...daysInMonth];
            let cells = [];
            let rows = [];
            
            slots.forEach((row, i) => {
                if (i % 7 !== 0) {
                  cells.push(row); 
                } else {
                  rows.push(cells); 
                  cells = []; 
                  cells.push(row); 
                }
                if (i === slots.length - 1) { 
                  rows.push(cells);
                }
              });
              let daysinmonth = rows.map((d, i) => {
                return <tr>{d}</tr>;
              });
            return daysinmonth;
    }
}
