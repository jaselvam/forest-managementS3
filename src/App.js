import React, { Component } from "react";  
import logo from "./logo.svg";  
import "./App.css";  
import PropTypes from 'prop-types';  
import { getAdmin, addAdmin, editAdmin, deleteAdmin } from './Redux/Action';  
import { connect } from 'react-redux';  
  
class App extends Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      id: 0,  
      adminName: "",  
      adminPassword: ""  
    };  
  }  
  
  static propTypes = {  
    admins: PropTypes.array.isRequired,  
    getAdmin: PropTypes.func.isRequired,  
    addAdmin: PropTypes.func.isRequired,  
    editAdmin: PropTypes.func.isRequired,  
    deleteAdmin: PropTypes.func.isRequired  
  };  
  
  componentDidMount() {  
    this.props.getAdmin();  
  }  
  
  submitData = () => {  
    if (this.state.adminName && this.state.adminPassword && !this.state.id) {  
      const newAdmin = {  
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),  
        adminName: this.state.adminName,  
        adminPassword: this.state.adminPassword,  
      };  
  
      this.props.addAdmin(newAdmin);  
    } 
    else if (this.state.adminName && this.state.adminPassword && this.state.id) {  
      const updatedDetails = {  
        id: this.state.id,  
        adminName: this.state.adminName,  
        adminPassword: this.state.adminPassword,  
      };  
  
      this.props.editAdmin(updatedDetails);  
    } 
    else {  
      alert('Enter Admin Details.');  
    }  
    this.clearData();  
  }  
  
  editDetails = (data) => {  
    this.setState({  
      id: data.id,  
      adminName: data.adminName,  
      adminPassword: data.adminPassword  
    })  
  }  
  
  deleteAdmin = (id) => {  
    this.clearData();  
    if (window.confirm("Are you sure?")) {  
      this.props.deleteAdmin(id);  
    }  
  }  
  
  handleNameChange = (a) => {  
    this.setState({  
      adminName: a.target.value  
    });  
  }  
  
  handleDepartmentChange = (a) => {  
    this.setState({  
      adminPassword: a.target.value  
    });  
  }  
  
  clearData = () => {  
    this.setState({  
      id: 0,  
      adminName: "",  
      adminPassword: ""  
    });  
  }  
  
  render() {  
    return (  
      <div className="App">  
        <header className="App-header">  
          <img src={logo} className="App-logo" alt="logo" />  
          <h1 className="App-title">CRUD opeartions for Admin Module</h1>  
        </header>  
        <p className="App-intro">  
          <div className="leftsection">  
            Admin Name : <input onChange={this.handleNameChange} value={this.state.adminName} type="text" placeholder="Admin Name" /> <br />  
            Admin Password :  <input onChange={this.handleDepartmentChange} value={this.state.adminPassword} type="password" placeholder="Admin password" /><br />  
            {this.state.id ? <button onClick={this.submitData}>UPDATE</button> : <button onClick={this.submitData}>ADD</button>}   <button onClick={this.clearData}>CLEAR</button>  
          </div>  
          <div className="rightsection">  
            <table>  
              <thead>  
                <tr>  
                  <th>ID</th>  
                  <th>Name</th>  
                  <th>password</th>  
                  <th>Action(s)</th>  
                </tr>  
              </thead>  
              <tbody>  
                {this.props.admins && this.props.admins.map((data, index) => {  
                  return <tr key={(index + 1)}>  
                    <td>{(index + 1)}</td>  
                    <td>{data.adminName}</td>  
                    <td>{data.adminPassword}</td>  
                    <td><button onClick={() => this.editDetails(data)}>EDIT</button> <button onClick={() => this.deleteAdmin(data.id)}>DELETE</button> </td>  
                  </tr>  
                })}  
              </tbody>  
            </table>  
          </div>  
        </p>  
      </div>  
    );  
  }  
}  
  
const mapStateToProps = state => ({  
  admins: state.admins  
});  
  
export default connect(mapStateToProps, { getAdmin, addAdmin, editAdmin, deleteAdmin })(App); 