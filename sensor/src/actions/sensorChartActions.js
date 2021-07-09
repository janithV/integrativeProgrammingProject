import React, { Component } from 'react';
import '../index.css';
import SensorChart from '../Screens/SensorChart';

class sensorChartActions extends Component {
    constructor(){
    super();
    this.state = {
        chartData:{}
    }
    }

    componentWillMount(){
        this.getChartData();
    }

    getChartData(){
        this.setState({
        chartData:{
            labels: ['time 1', 'time 2', 'time 3', 'time 4', 'time 5', 'time 6'],
            datasets:[
            {
                label:'Temperature',
                data:[
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
                ],
                backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
                ]
            }
            ]
        }
        });
    }

    render() {
        return (
        <div className="App">
            <SensorChart chartData={this.state.chartData} TempType="Outdoor" legendPosition="bottom"/>
        </div>
        );
    }
}

export default sensorChartActions;