import React from 'react';
import { Sparklines, SparklinesBars, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

class SparkLineChart extends React.Component{
    state = {data:[5, 10, 5, 20, 8, 15, 10, 11, 18, 19, 11, 12, 17, 23,12]};

    componentDidMount(){
        this.setState({data: [...this.state.data, Math.random()*100]})
    }

    render(){
        return (
            <div>
                <Sparklines 
                    data={this.state.data} 
                        width={180} 
                        height={80} 
                    >
                    <SparklinesLine color="blue" />
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                <Sparklines 
                    data={this.state.data} 
                    width={180} 
                    height={80} 
                    >
                    <SparklinesBars color="yellow"/>
                </Sparklines>
                <Sparklines 
                    data={this.state.data} 
                    width={180} 
                    >
                    <SparklinesLine style={{ fill: "none" }} />
                    <SparklinesSpots />
                </Sparklines>
            </div>
            
        );
    }
}

export default SparkLineChart;