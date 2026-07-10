import React from 'react'

const AddCars = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                              <label htmlFor="" className="form-label">CarId</label>
                              <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Brand</label>
                              <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Fuel Type:</label>
                              <select name="" id="" className="form-control">
                                <option className="options">petrol</option>
                                 <option className="options">Desel</option>
                                  <option className="options">Electric</option>
                              </select>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                     
                                        
                            <label htmlFor="" className="form-label">Tramsmission</label>
                              <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                
                            <label htmlFor="" className="form-label">Price</label>
                              <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                
                            <label htmlFor="" className="form-label">colour</label>
                              <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                    
                            <label htmlFor="" className="form-label">Manufacturing Year</label>
                              <input type="Date" className="form-control" />


                                       
                            <label htmlFor="" className="form-label">Image url</label>
                              <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                            
                            <label htmlFor="" className="form-label">image url</label>
                              <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success">Submit</button>

                        </div>
                    </div>



                </div>
            </div>
        </div>


    </div>
  )
}

export default AddCars