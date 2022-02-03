import React, { useState } from "react";
import { FaFacebook,FaPhoneAlt,FaSimCard,FaMapMarkerAlt } from "react-icons/fa";

const Form = () => {
  const [state, Setstate] = useState({
    name: "",
    email: "",
    password: "",
  });

  const FormInputChanges = (events) => {
    Setstate((prvstate) => ({
      ...prvstate,
      [events.target.name]: events.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <section>
        <div className="container pt-5 pb-5 text-center">
          <div className="row">
            <div className="col-lg-5 col-sm-12">
              <h3 className="text-center">Contact Info</h3>
              <div className="icons d-flex  ">
              <li><FaFacebook /></li>
              <li><FaPhoneAlt /></li>
              <li><FaSimCard /></li>
              <li><FaMapMarkerAlt /></li>

              </div>
              <div className="info-content d-flex flex-column ">
                <span>FaceBook : Nerob Ahamed</span>
                <span>Phone : 01756808137</span>
                <span>Email : nerob0000@gmail.com</span>
                <address>Address : Dhanmondi-32</address>
              </div>
           
            </div>
            <div className="col-lg-7 col-sm-12">
              <h3>Contact Form</h3>
              <div className="border py-5 px-5">
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label">
                  Name :
                </label>
                <input
                  className="form-control"
                  autoComplete="Off"
                  type="text"
                  name="name"
                  placeholder="Enter The Name"
                  value={state.name}
                  onChange={FormInputChanges}
                />
                <br />

                <label htmlFor="name" className="form-label">
                  Email :
                </label>
                <input
                  className="form-control"
                  autoComplete="Off"
                  type="email"
                  name="email"
                  placeholder="Enter The Email"
                  value={state.email}
                  onChange={FormInputChanges}
                />
                <br />

                <label htmlFor="name" className="form-label">
                  PassWord :
                </label>
                <input
                  className="form-control"
                  autoComplete="Off"
                  type="password"
                  name="password"
                  placeholder="Enter The Password"
                  value={state.password}
                  onChange={FormInputChanges}
                />
                <br />
                <button type="submit">Submit</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
