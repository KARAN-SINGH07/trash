// import './registration.css';


function Registration() {
  return (
    <body>
    <section clssName="h-100 bg-dark">
        <div clssName="container py-5 h-100">
            <div clssName="row d-flex justify-content-center align-items-center h-100">
                <div clssName="col">
                    <div clssName="card card-registration my-4">
                        <div clssName="row g-0">
                            <div clssName="col-xl-6 d-none d-xl-block">
                                {/* <img src="img/registration.jpg" alt="Sample photo" clssName="img-fluid" style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" /> */}
                            </div>
                            <div clssName="col-xl-6">
                                <div clssName="card-body p-md-5 text-black">
                                    <h3 clssName="mb-5 text-uppercase text-success">Registration form</h3>

                                    <div clssName="row">
                                        <div clssName="col-md-6 mb-4">
                                            <div clssName="form-outline">
                                                <input type="text" id="form3Example1m" clssName="form-control form-control-lg" placeholder="eg: Karan" />
                                                <label clssName="form-label" for="form3Example1m">First name</label>
                                            </div>
                                        </div>
                                        <div clssName="col-md-6 mb-4">
                                            <div clssName="form-outline">
                                                <input type="text" id="form3Example1n" clssName="form-control form-control-lg" placeholder="eg: Singh" />
                                                <label clssName="form-label" for="form3Example1n">Last name</label>
                                            </div>
                                        </div>
                                    </div>



                                    <div clssName="form-outline mb-4">
                                        <input type="text" id="form3Example8" clssName="form-control form-control-lg" />
                                        <label clssName="form-label" for="form3Example8">Address</label>
                                    </div>

                                    <div clssName="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                        <h6 clssName="mb-0 me-4">Gender: </h6>

                                        <div clssName="form-check form-check-inline mb-0 me-4">
                                            <input clssName="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="option1" />
                                            <label clssName="form-check-label" for="femaleGender">Female</label>
                                        </div>

                                        <div clssName="form-check form-check-inline mb-0 me-4">
                                            <input clssName="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="option2" />
                                            <label clssName="form-check-label" for="maleGender">Male</label>
                                        </div>

                                        <div clssName="form-check form-check-inline mb-0">
                                            <input clssName="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" value="option3" />
                                            <label clssName="form-check-label" for="otherGender">Other</label>
                                        </div>

                                    </div>

                                    <div clssName="row">
                                        <div clssName="col-md-6 mb-4">

                                            <select clssName="select">
                            <option value="1">State</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>

                                        </div>
                                        <div clssName="col-md-6 mb-4">

                                            <select clssName="select">
                            <option value="1">City</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>

                                        </div>
                                    </div>

                                    <div clssName="form-outline mb-4">
                                        <input type="Date" id="form3Example9" clssName="form-control form-control-lg" />
                                        <label clssName="form-label" for="form3Example9">DOB</label>
                                    </div>

                                    <div clssName="form-outline mb-4">
                                        <input type="text" id="form3Example90" clssName="form-control form-control-lg" />
                                        <label clssName="form-label" for="form3Example90">Pincode</label>
                                    </div>



                                    <div clssName="form-outline mb-4">
                                        <input type="text" id="form3Example97" clssName="form-control form-control-lg" placeholder="Enter your e-mail" />
                                        <label clssName="form-label" for="form3Example97">Email ID</label>
                                    </div>

                                    <div clssName="d-flex justify-content-end pt-3">
                                        <button type="button" clssName="btn btn-light btn-lg">Reset all</button>
                                        <button type="button" clssName="btn btn-outline-dark btn-lg ms-2">Register</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</body>
  )
}

export default Registration;