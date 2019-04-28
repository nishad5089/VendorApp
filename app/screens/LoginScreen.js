import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Body, View, Left, Right } from 'native-base';

export default class LoginScreen extends Component {
	onPressLogin() {
		this.props.navigation.navigate('Drawer')
	}

	createAccountPress() {
		this.props.navigation.navigate('Registration')
	}

	ForgotPasswordPress() {
		this.props.navigation.navigate('ForgotPassword')
	}

	render() {
		const {loginContainer, signInButton, input, link} = styles
		return (
			<Container style={loginContainer}>
				<Content>
					<Form>
						<Input placeholder='Username' style={input} />
						<Input placeholder='Password' style={input} />
						<View  style={{flexDirection: 'row'}}>
							<Left><Text style={link} onPress={()=>this.createAccountPress()}>Create Account</Text></Left>
							<Right><Text style={link} onPress={()=>this.ForgotPasswordPress()}>Forgot Password</Text></Right>
						</View>
						<Button primary block style={signInButton} onPress={()=>this.onPressLogin()}>
							<Text> Sign In</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	loginContainer: {
		flex:1,
		justifyContent: 'center', 
		alignItems: 'center',
		flexDirection: 'row',
		padding: 40
	},

	input: {
		backgroundColor: '#eee',
		marginBottom: 10
	},

	link: {
		fontSize: 13
	},

	signInButton: {
		marginTop: 20
	}
});
