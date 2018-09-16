import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export const Card = props => {
	const { name, image } = props;
	return (
		<TouchableOpacity
			style={{
				width: 150,
				height: 180,
				alignSelf: 'center',
				marginTop: 10,
				marginBottom: 10,
				marginLeft: 10,
				marginRight: 10
			}}
			onPress={() => {
				props.onCardClick(props.id);
			}}
		>
			<View
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%'
				}}
			>
				<Image
					style={{
						flex: 1,
						alignSelf: 'stretch',
						width: undefined,
						height: undefined,
						borderRadius: 10
					}}
					source={require('../assets/images/alien-3.jpg')}
				/>
			</View>
			<View
				style={{
					height: '20%',
					width: '60%',
					alignItems: 'center',
					alignSelf: 'center',
					justifyContent: 'center',
					position: 'absolute',
					bottom: 0
				}}
			>
				<View
					style={{
						backgroundColor: 'white',
						height: '100%',
						width: '100%',
						opacity: 0.8,
						position: 'absolute'
					}}
				/>
				<Text
					style={{
						textAlign: 'center',
						color: 'black',
						fontSize: 12,
						fontFamily: 'AmericanTypewriter-Bold'
					}}
				>
					{name.charAt(0).toUpperCase()}
					{name.slice(1)}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
