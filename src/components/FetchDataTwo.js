import React, { Component } from 'react'
import axios from 'axios'
class FetchDataTwo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            services: [],
            total: 0
        }
    }

    componentDidMount() {
        // Method - 4 I have created:-https://jsonkeeper.com/b/6MET
        axios.get('https://jsonkeeper.com/b/356L')
            .then((response) => {
                this.setState({ services: response.data.data.purchased_services })
            }).catch((error) => console.log(error))

    }

    render() {
        const { services } = this.state
        var sum = 0
        const { total } = this.state

        // Purchased Services
        const purchasedServices = services.map((service) => {
            return (service.purchased_office_template.purchased_office_services).map((sub, index) => {
                return (sub.service_selected == null || undefined ? '' : <div className="container">
                    <div className="container bcontent" key={sub.id} style={{ height: "40%" }} >
                        <h2 align="left">{service.name}:</h2>
                        <div className="card" >
                            <div className="row no-gutters">
                                <div className="col-sm-5">
                                    <img className="card-img" src="https://picsum.photos/200" style={{ height: "70px", width: "70px", marginTop: "18px", marginLeft: "-350px" }} alt="Suresh Dasari Card" />
                                </div>
                                <div className="col-sm-7" style={{ marginLeft: "-300px", marginBottom: "-10px" }}>
                                    <div className="card-body">
                                        <div>
                                            <h6 className="card-title" align="left" style={{ marginLeft: "-70px" }}>{sub.name}</h6>
                                            <p align="right" style={{ marginRight: "-280px", marginTop: "-35px" }}><b>Rs. {sub.price}/-</b></p>
                                            <p className="-text" style={{ marginLeft: "-80px", marginTop: "-10px", marginBottom: "20px" }}>{sub.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>

                )
            })
        })
        // Additional Services
        const additionalServices = services.map((service) => {
            return (service.purchased_office_template.purchased_office_services).map((sub, index) => {
                return (sub.service_selected == null || undefined ?
                    <div className="container">
                        <div className="container bcontent" key={sub.id} style={{ height: "40%" }} >
                            <h2 align="left">{service.name}:</h2>
                            <div className="card" >
                                <div className="row no-gutters">
                                    <div className="col-sm-5">
                                        <img className="card-img" src={sub.image} style={{ height: "70px", width: "70px", marginTop: "18px", marginLeft: "-350px" }} alt="Suresh Dasari Card" />
                                    </div>
                                    <div className="col-sm-7" style={{ marginLeft: "-300px", marginBottom: "-10px" }}>
                                        <div className="card-body">
                                            <div>
                                                <h6 className="card-title" align="left" style={{ marginLeft: "-70px" }}>{sub.name}</h6>
                                                <p align="right" style={{ marginRight: "-280px", marginTop: "-35px" }}><b>Rs. {sub.price}/-</b></p>
                                                <p className="-text" style={{ marginLeft: "-80px", marginTop: "-10px", marginBottom: "20px" }}>{sub.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div> : ''

                )
            })
        })

        const purchasedServicesTotal = services.map((service) => {
            return (service.purchased_office_template.purchased_office_services).map((sub, index) => {
                return (sub.service_selected == null ? '' :
                    <div className="container">
                        <div className="container bcontent" style={{ height: "90%" }}  >
                            <div className="card bg-dark" >
                                <div className="row no-gutters">
                                    <div className="col-sm-5">

                                    </div>
                                    <div className="col-sm-7" style={{ marginLeft: "-300px", marginBottom: "0px" }}>
                                        <div className="">
                                            <div>
                                                <h6 className="card-title text-white" align="left" style={{ marginLeft: "-120px" }}>{sub.name}</h6>
                                                <p align="right" className="text-white" style={{ marginRight: "-280px", marginTop: "-35px" }}><b>Rs.{sub.price}/-</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })
        })
        return (
            <div>
                <div className="container">
                    <h1 className="font" align="left">Purchased Services:</h1>
                    <p align="left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    {purchasedServices}
                </div>
                <br />
                <div className="container">
                    {purchasedServicesTotal}
                </div>
                <br />
                <div className="container">
                    <h1 className="font" align="left">Additional Services:</h1>
                    <p align="left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    {additionalServices}
                </div>
            </div >
        )
    }
}

export default FetchDataTwo

