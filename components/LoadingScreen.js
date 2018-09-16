import React from "react";
import {
	Animated,
	View,
	ImageBackground,
	Text,
	ActivityIndicator
} from "react-native";

export class LoadingScreen extends React.Component {
	render() {
		return (
			<ImageBackground
				source={require("../assets/images/bg-2.jpg")}
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<View
					style={{
						backgroundColor: "rgb(24, 66, 65)",
						opacity: 0.7,
						height: "100%",
						width: "100%",
						position: "absolute"
					}}
				/>
				<ActivityIndicator />
				<Text>LOADING</Text>
			</ImageBackground>
		);
	}
}
