import React, { Component } from "react";
import FormInput from "./reusables/formInputs";
import FormButton from "./reusables/formButtons";
import { EditUserDetail, EditThisUser } from "../services/myrequests";
import { Redirect, withRouter} from "react-router-dom";


class EditUser extends Component {
    state = { 
        isAdded: false,
        user: {}
     }


     componentDidMount () {
        EditUserDetail(this.props.match.params.username).then((resp) => {
            if (resp) {
              this.setState({user :resp});
            } else {
              alert("Sorry, we couldn't fetch users detail");
            }
        });
     }
   
     handleEditUser = () => {
       EditThisUser(this.state.user, this.state.user.username).then((resp) => {
         if (resp) {
           alert("User Updated");
           this.setState({isAdded:true})
         } else {
           alert("Sorry! Task Failed");
         }
       });
     };
   
     handleChange = (event) => {
        const { name, value } = event.target;
        const { user } = this.state;
        user[name] = value;
        this.setState({ user });
     };

    render() { 
        return ( 
            <div className="container">
                {this.state.isAdded ? <Redirect to="/allUser" /> : (
                
                <div
                    className="col-md-5 ml-auto mr-auto my-4 p-4"
                    style={{ background: "whitesmoke" }}
                >
                    <h2 className="text-center">Edit User</h2>
                    <FormInput
                    label="First Name"
                    name="first_name"
                    type="text"
                    value={this.state.user.first_name}
                    placeholder="First Name"
                    onChange={this.handleChange}
                    />
                    <FormInput
                    label="Last Name"
                    name="last_name"
                    type="text"
                    value={this.state.user.last_name}

                    placeholder="Last Name"
                    onChange={this.handleChange}
                    />
                    <FormInput
                    label="Email"
                    name="email"
                    type="text"
                    value={this.state.user.email}
                    placeholder="Email"
                    onChange={this.handleChange}
                    />

                    <FormButton
                    type="submit"
                    label="Add"
                    className="btn btn-primary "
                    handleClick={this.handleEditUser}
                    />
                </div>)}
                </div>
         );
    }
}
 
export default withRouter(EditUser);

