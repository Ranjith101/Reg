import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      errorList: [],
      fieldList: {},
      name: "",
      no: "",
      email: "",
      responsemsg: "",
      stateNames: [],
      districtName: [],
      indiaState: [{

        "id": 1,

        "name": "Andhra Pradesh",

        "districts": [{

          "id": 1001,

          "name": "Anantpur "

        },

        {

          "id": 1002,

          "name": "Chittoor"

        },

        {

          "id": 1003,

          "name": "Nellore"

        },

        {

          "id": 1004,

          "name": "Prakasam "

        }

        ]

      },

      {

        "id": 2,

        "name": "Arunachal Pradesh",

        "districts": [{

          "id": 2001,

          "name": "Anjaw"

        },

        {

          "id": 2002,

          "name": "Changlang"

        },

        {

          "id": 2003,

          "name": "East Siang"

        },

        {

          "id": 2004,

          "name": "Tawang"

        },

        {

          "id": 2005,

          "name": "West Kameng"

        }

        ]

      },

      {

        "id": 3,

        "name": "Assam",

        "districts": [{

          "id": 3001,

          "name": "Baksa"

        },

        {

          "id": 3002,

          "name": "Barpeta"

        },

        {

          "id": 3003,

          "name": "Bongaigaon"

        },

        {

          "id": 3004,

          "name": "Cachar "

        },

        {

          "id": 3005,

          "name": "Chirang"

        },

        {

          "id": 3006,

          "name": "Darrang"

        },

        {

          "id": 3007,

          "name": "Dhemaji"

        }

        ]

      }]
    }
  }
  componentDidMount() {
    let stateArray = []
    this.state.indiaState.map((item) => {
      stateArray.push(item.name)
    })
    let initialDistrictNames = this.state.indiaState[0].districts
    this.setState({ stateNames: stateArray, districtName: initialDistrictNames })
  }

  //only one function to pick the value of all fields
  pickValue = (obj) => {
    let fieldList = this.state.fieldList;
    fieldList[obj.target.name] = obj.target.value; //fieldlist{name=['ram'],mobile:['9566443778'],email:['ram@rm.com']}
    this.setState({
      fieldList
    })

  }

  save = () => {
    let formStatus = true;
    let fieldList = this.state.fieldList;
    let errorList = this.state.errorList;
    if (!fieldList["fname"]) {
      formStatus = false;
      errorList["nameError"] = "Please Enter Name !";
    } else {
      errorList["nameError"] = "";
    }
    //mobile Validation
    let mpattern = /^[6-9]\d{9}$/; //starting number 6-9 ,10 digits
    if (!mpattern.test(fieldList["mobile"])) {
      formStatus = false;
      errorList["mobileError"] = "Please Enter Mobile Number !";
    } else {
      errorList["mobileError"] = "";
    }
    //mail validation
    let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //starting number 6-9 ,10 digits
    if (!epattern.test(fieldList["email"])) {
      formStatus = false;
      errorList["emailError"] = "Please Enter Mail Id !";
    } else {
      errorList["emailError"] = "";
    }
    //city validation
    if (!fieldList["city"]) {
      formStatus = false;
      errorList["cityError"] = "Please Select Your City !";
    } else {
      errorList["cityError"] = "";
    }

    //district Validation
    if (!fieldList["district"]) {
      formStatus = false;
      errorList["districtError"] = "Please Select Your District !";
    } else {
      errorList["districtError"] = "";
    }

    //Gender Validation
    if (!fieldList["gender"]) {
      formStatus = false;
      errorList["genderError"] = "Please Select Your Gender !";
    } else {
      errorList["genderError"] = "";
    }

    //Dob Validation
    if (!fieldList["Date Of Birth"]) {
      formStatus = false;
      errorList["dobError"] = "Please Select Your DOB !";
    } else {
      errorList["dobError"] = "";
    }

    //address validation
    if (!fieldList["message"]) {
      formStatus = false;
      errorList["messageError"] = "Please Type Your Message ! "
    } else {
      errorList["messageError"] = "";
    }
    if (formStatus == true) {
      var msg = "Please wait processing...";
    } else {
      var msg = "Invalid input"
    }

    this.setState({
      errorList,
      responsemsg: msg
    })
    console.log('coming', this.state.responsemsg)
    console.log('filed', fieldList)
  }
  
  handleStates = (e) => {
    console.log('working', e.target.value)
    let getStateName = e.target.value;
    this.state.indiaState.map((item) => {
      if (item.name == getStateName) {
        console.log('one')
        this.setState({ districtName: item.districts })
      } else {
        console.log('its not matched')
      }
    })
    console.log('district name', this.state.districtName)
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-4 offset-4">
            <h2 className="text-center text-primary"> Form Validation </h2>
            <em className="text-danger"> * Marked fields are mandatory</em>
            <p className="text-primary text-center">{this.state.responsemsg}</p>
            <div className="mb-3">
              <label> Your Full Name <em className="text-danger">*</em></label>
              <input type="text" className="form-control" name="fname" onChange={this.pickValue} />
              <small className="text-danger">{this.state.errorList.nameError}</small>
            </div>
            <div className="mb-3">
              <label> Your Mobile Number <em className="text-danger">*</em></label>
              <input type="text" className="form-control" name="mobile" onChange={this.pickValue} />
              <small className="text-danger">{this.state.errorList.mobileError}</small>
            </div>
            <div className="mb-3">
              <label> Your E-mail<em className="text-danger">*</em></label>
              <input type="email" className="form-control" name="email" onChange={this.pickValue} />
              <small className="text-danger">{this.state.errorList.emailError}</small>
            </div>
            <div className="mb-3">
              <label> Date Of Birth<em className="text-danger">*</em></label>
              <input type="date" className="form-control" name="dob" onChange={this.pickValue} />
              <small className="text-danger">{this.state.errorList.dobError}</small>
            </div>
            <div className="mb-3 radio-buttons">
              <label> Gender<em className="text-danger">*</em></label><br/>
              <input type="radio" id="male" name="gender" value="male" onChange={this.handleChange}/> Male <br/>
              <input type="radio" id="female" name="gender" value="female" onChange={this.handleChange}/> Female
              <small className="text-danger">{this.state.errorList.genderError}</small>
            </div>
            {/* <div className="mb-3">
                                 <label>State<em className="text-danger">*</em></label>
                                 <select className="form-control" name="city" onChange={this.pickValue}>
                                         <option>Choose</option>
                                         <option>Bangalore</option>
                                         <option>Chennai</option>
                                         <option>Hyderabad</option>
                                         <option>Pune</option>
                                 </select>
                                 <small className="text-danger">{this.state.errorList.cityError}</small>
                            </div> */}
            <div className="mb-3">
              <label>State<em className="text-danger">*</em></label>
              <select className="form-control" name="city" onChange={this.handleStates}>
                {this.state.stateNames.map((item, i) => <option key={i}>{item}</option>)}
                {/* <option>Choose</option>
                                         <option>Bangalore</option>
                                         <option>Chennai</option>
                                         <option>Hyderabad</option>
                                         <option>Pune</option> */}
              </select>
              <small className="text-danger">{this.state.errorList.cityError}</small>
            </div>
            {/* <div className="mb-3">
                                 <label> District<em className="text-danger">*</em></label>
                                 <select className="form-control" name="city" onChange={this.pickValue}>
                                         <option>Choose</option>
                                         <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option>
                                 </select>
                                 <small className="text-danger">{this.state.errorList.districtError}</small>
                            </div> */}
            <div className="mb-3">
              <label> District<em className="text-danger">*</em></label>
              <select className="form-control" name="district" onChange={this.pickValue}>
                {this.state.districtName.map((item, i) => <option key={item.id}>{item.name}</option>)}
                {/* <option>Choose</option>
                                         <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option> */}
              </select>
              <small className="text-danger">{this.state.errorList.districtError}</small>
            </div>
            <div className="mb-3">
              <label> Your Message<em className="text-danger">*</em></label>
              <textarea className="form-control" name="message" onChange={this.pickValue}></textarea>
              <small className="text-danger">{this.state.errorList.messageError}</small>
            </div>
            <div className="text-center">
              
              <Link to={{
                pathname: "/posts",
                state: {
                  allValue:this.state.fieldList
                }
              }} >
                <button type="button" className="btn btn-success" onClick={this.save}>Send Message</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ContactUs;