import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';
import HeaderTransparent  from '../components/Header/HeaderTransparent';

export default class RegistrationScreen extends Component {
	onPressRegistration() {
		this.props.navigation.navigate('Drawer')
	}
	render() {
		const {registraionContainer, registerButton, input} = styles
		return (
			<Container>
				<HeaderTransparent navigation={this.props.navigation} />
				<View style={registraionContainer}>
					<Content>
						<Form>
							<Input placeholder='Username' style={input} />
							<Input placeholder='Email' style={input} />
							<Input placeholder='Password' style={input} />
							<Input placeholder='Confirm Password' style={input} />
							<Button primary block style={registerButton} onPress={()=>this.onPressRegistration()}>
								<Text>Sign Up</Text>
							</Button>
						</Form>
					</Content>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	registraionContainer: {
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

	registerButton: {
		marginTop: 20
	}
});
