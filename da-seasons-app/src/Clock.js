import React from 'react';

class Clock extends React.Component{
    state = {timeChange : ''};
    componentDidMount() {
        setInterval(() => {
            this.time = new Date().toLocaleTimeString();
            this.setState({timeChange : this.time});
        }, 1000)
    }
    
    render() {
        return (
            <div className="time">
                The time is: {this.state.timeChange}
            </div>
        );
    }
}

export default Clock;