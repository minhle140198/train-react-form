import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/inforForm.css';

class InforForm extends React.Component {
	state = {
		defaultMessage : null,
		name: '',
		phoneNumber : '',
		email : '',
		birthday : null,
		isDisabled : false,
	}
	handleSubmit = (event) => {
		event.preventDefault();
		alert('success');
	}
	checkAllValidation = () => {
		const nameCheck = this.checkNameValidation(this.state.name);
		const phoneNumberCheck = this.checkPhoneNumeValidation(this.state.phoneNumber) ;
		const birthdayCheck = this.checkBirthdayValidation(this.state.birthday);
		const emailCheck = this.checkEmailValidation(this.state.email);
		return nameCheck && phoneNumberCheck && birthdayCheck && emailCheck;
	}
	handleNameChange = (event) => {
		const name = event.target.value.trim();
		console.log('name check: ' + this.checkNameValidation(name));
		this.setState({ name });
	}
	handleEmailChange = (event) => {
		const email = event.target.value;
		console.log('email check: ' + this.checkEmailValidation(email));
		this.setState({ email });
	}
	handlePhoneNumberChange = (event) => {
		const phoneNumber = event.target.value.trim();
		console.log('phone number check: ' + this.checkPhoneNumeValidation(phoneNumber));
		this.setState({ phoneNumber });
	}
	handleBirthdayChange = (event) => {
		const birthday = event.target.value;
		console.log('birthday check: ' + this.checkBirthdayValidation(birthday));
		this.setState({ birthday });
	} 
	checkNameValidation = (name) => {
		const name_regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
		return name.length>=11 && name_regex.test(name) ;
	}
	checkPhoneNumeValidation = (phoneNumber) => {
		const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
		return phoneNumber.length === 10 && vnf_regex.test(phoneNumber);
	}
	checkEmailValidation = (email) => {
		const email_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return email_regex.test(email);
	}
	checkBirthdayValidation = (date) => {
		const birthday = new Date(date);
		const today = new Date();
		return today.getTime() > birthday.getTime();
	}
	render() { 
		return(
            <div className="infor-form">
            
			<Form  onSubmit={this.handleSubmit}>
				{/* name */}
				<Form.Group controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control 
						type="text" 
						placeholder="e.g: Nguyen Van A" 
						onChange={this.handleNameChange}
					/>
					<Form.Text className="text-muted">
					{
						this.checkNameValidation(this.state.name) ? <span style={{color : 'green'}}>Your name is valid</span> : 'Your name must have at least 11 characters (not include any numbers)'
					}
					</Form.Text>
                </Form.Group>
                
                {/* day of birth */}
				<Form.Group controlId="formBasicDateOfBirth">
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control 
                        type="date"  
                        onChange={this.handleBirthdayChange}	
                    />
                    <Form.Text className="text-muted">
                    {
                        this.state.birthday != null && this.checkBirthdayValidation(this.state.birthday)? <span style={{color : 'green'}}>Your birthday is valid</span> : "Please enter a date in the past"
                    }
                    </Form.Text>
                </Form.Group>

				{/* email */}
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control 
						type="email" 
						placeholder="e.g: example@gmail.com" 
						onChange={this.handleEmailChange}	
					/>
					<Form.Text className="text-muted">
					{
						this.checkEmailValidation(this.state.email) ? <span style={{color : 'green'}}>Your email is valid</span> : "Your email is invalid"
					}
					</Form.Text>
				</Form.Group>

				{/* number */}
				<Form.Group controlId="formBasicPhoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control 
						type="number" 
						placeholder="e.g: 0xxxxxxxxx" 
						onChange={this.handlePhoneNumberChange}	
					/>
					<Form.Text className="text-muted">
					{
						this.checkPhoneNumeValidation(this.state.phoneNumber) ? <span style={{color : 'green'}}>Your phone number is valid</span> : "Your phone number must has 10 numbers, starts with 0"
					}
					</Form.Text>
				</Form.Group>
				
				<Button variant="primary" type="submit" disabled={!this.checkAllValidation()}>
					Submit Form
				</Button>
            </Form>
            </div>
		)
	}
}


export default InforForm;
