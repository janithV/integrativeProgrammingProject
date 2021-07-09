import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import '../index.css'

class SensorChart extends Component{
    constructor(props){
    super(props);
    this.state = {
        chartData:props.chartData
    }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        TempType:'Temperature'
    }

    render(){
        return (
        <div className="chart">
            <Bar
            data={this.state.chartData}
            options={{
                title:{
                display:this.props.displayTitle,
                text:'Past Sensor Data - '+ this.props.TempType,
                fontSize:25
                },
                legend:{
                display:this.props.displayLegend,
                position: this.props.legendPosition
                }
            }}
            />

            <Line
            data={this.state.chartData}
            options={{
                title:{
                display:this.props.displayTitle,
                text:'Past Sensor Data - '+this.props.TempType,
                fontSize:25
                },
                legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
                }
            }}
            />
            <div className="chart-box">
            <Pie
            data={this.state.chartData}
            options={{
                title:{
                display:this.props.displayTitle,
                text:'Past Sensor Data - '+this.props.TempType,
                fontSize:25
                },
                legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
                }
            }}
            />
            </div>
        </div>
        )
    }
}

export default SensorChart;