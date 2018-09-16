import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width;
export const SwipingCard = props => {
	const { name, image } = props;

	return (
		<TouchableOpacity
			style={{
				width: WIDTH,
				height: '100%'
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
				{image && (
					<Image
						style={{
							flex: 1,
							alignSelf: 'stretch',
							width: undefined,
							height: undefined
						}}
						source={{ uri: image.url }}
					/>
				)}
			</View>
			<View
				style={{
					height: '15%',
					width: '35%',
					alignItems: 'center',
					justifyContent: 'center',
					alignSelf: 'flex-end',
					position: 'absolute',
					bottom: 0
				}}
			>
				<View
					style={{
						backgroundColor: 'white',
						height: '100%',
						width: '100%',
						position: 'absolute'
					}}
				/>
				<Text
					style={{
						textAlign: 'center',
						color: 'black',
						fontSize: 15,
						fontFamily: 'AmericanTypewriter-Bold',
						letterSpacing: 3
					}}
				>
					{name.charAt(0).toUpperCase()}
					{name.slice(1)}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
