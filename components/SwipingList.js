import React from 'react';
import { SwipingCard } from './';
import { View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

export const SwipingList = props => {
	return (
		<View
			style={{
				alignItems: 'center',
				justifyContent: 'space-between',
				height: '60%'
			}}
		>
			<SwiperFlatList
				index={0}
				autoplay={true}
				autoplayDelay={3}
				autoplayloop={true}
				data={props.aliens}
				renderItem={alien => (
					<SwipingCard {...alien.item} onCardClick={props.onCardClick} />
				)}
				keyExtractor={item => item.id.toString()}
			/>
		</View>
	);
};
