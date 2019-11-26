import React, { PureComponent } from 'react';
import '../styles/Server.css';

class Server extends PureComponent {
    constructor(props) {
        super(props);

        this.req = {
            "host": this.props.ip
        }

        this.alive = {
            backgroundColor: 'green'
        }

        this.disabled = {
            backgroundColor: 'red'
        }

        this.state = {
            alive: false,
            hostname: "",
            latency: 0
        }

        this.pollServer = this.pollServer.bind(this);
    }

    componentDidMount() {
        this.pollServer()
        setInterval(this.pollServer, 30 * 1000);
    }

    async pollServer() {
        try {
            const res = await fetch('/', {
                method: "POST",
                body: JSON.stringify(this.req),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            this.setState({
                alive: data['alive'],
                hostname: data['hostname'],
                latency: data['latency']
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return(
            <div className="server">
                <h2>{this.props.name}</h2>
                <p>IP: {this.props.ip}</p>
                <p>
                    Status: <span id="circle" style={this.state.alive ? this.alive : this.disabled}></span>
                </p>
                <p>Latency: {this.state.latency} ms</p>
            </div>
        )
    }
}

export default Server;