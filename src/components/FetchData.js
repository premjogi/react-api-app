import React, { Component } from 'react'
import axios from 'axios'
class FetchData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            services: [],
        }
    }

    componentDidMount() {
        // requestify.get('https://jsonkeeper.com/b/356L', {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*'
        //     },
        //     mode: 'no-cors'
        // })
        //     .then(function (response) {
        //         // Get the response body
        //         response.getBody();
        //     });
        // Method - 2
        // axios.get('https://jsonkeeper.com/b/356L', {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //     }
        // })
        //     .then((response) => { console.log(response.data.purchased_services) })
        //     .catch((error) => console.log(error))
        // Method - 3
        // axios.defaults.baseURL = 'http://localhost:3000/';
        // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        // axios.get("https://jsonkeeper.com/b/356L")
        //     .then(resp => {
        //         let result = resp.data;
        //         console.log(result);
        //     }).catch(error => {
        //         console.log(error)
        //     })
        // Method - 4 I have created:-https://jsonkeeper.com/b/6MET
        axios.get('https://jsonkeeper.com/b/356L')
            .then((response) => {
                this.setState({ services: response.data.data.purchased_services })
            }).catch((error) => console.log(error))

    }

    render() {
        const { services } = this.state
        return (
            <div>
                <ul>
                    {
                        services.length ? services.map(service => <li key={service.id}>{service.name}</li>) : null
                    }
                </ul>
            </div>
        )
    }
}

export default FetchData
