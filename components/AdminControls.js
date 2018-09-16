import React from "react";
import {View, TouchableOpacity, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const {height, width} = Dimensions.get("window");
export const AdminControls = props => {
	return (
		<View
			style={{
				position: "absolute",
				bottom: "39.5%",
				alignSelf: "flex-end",
				flexDirection: "row",
				justifyContent: "space-between",
				backgroundColor: "rgba(11, 11, 11, 0.75)",
				paddingLeft: 10,
				paddingRight: 10,
				paddingBottom: 10,
				paddingTop: 10,
				width: "20%"
			}}
		>
			<TouchableOpacity onPress={props.onClickEdit}>
				<Icon size={width * 0.068} color="white" name="edit" />;
			</TouchableOpacity>
			<TouchableOpacity onPress={props.handleDelete}>
				<Icon size={width * 0.066} color="white" name="trash" />;
			</TouchableOpacity>
		</View>
	);
};
