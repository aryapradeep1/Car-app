import React, { useEffect, useState } from 'react'
import { NaviBar } from './NaviBar'
import axios from 'axios'

const ViewCar = () => {
    const[data,changeData]=useState([])


    const fetchData= () =>{

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json").then(
       
            (response)=>{
                    changeData(response.data) //this data is not a variable here,it is keyword
            }
        ).catch()

    }

    useEffect( 
        ()=>{
            fetchData()
        },[]
    )

  return (
    <div>
        <NaviBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <div className="row g-3">
                                {data.map(
                                    (value,index)=>{
                                            return(
                                                 <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                 <div class="card">
  <img src={value.image} class="card-img-top" alt="..." height={400}/>
  <div class="card-body">
    <h5 class="card-title">{value.brand}</h5>
    <p class="card-text">{value.carId}</p>
    <p class="card-text">{value.brand}</p>
    <p class="card-text">{value.model}</p>
    <p class="card-text">{value.fuelType}</p>
    <p class="card-text">{value.transmission}</p>
    <p class="card-text">{value.price}</p>
    <p class="card-text">{value.color}</p>
    <p class="card-text">{value.year}</p>
    <p class="card-text">{value.description}</p>
    <a href="#" class="btn btn-primary">details</a>
  </div>
</div>


                                </div>
                                            )

                                    }
                                )}
                           
                               
                            </div>

                    </div>
                </div>
            </div>


    </div>
  )
}

export default ViewCar