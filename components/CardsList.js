import React from 'react';
import { View, FlatList } from 'react-native';
import { Card } from './';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';

export const CardsList = props => {
	return (
		<FlatList
			numColumns={2}
			style={{
				height: '80%',
				width: '100%'
			}}
			contentContainerStyle={{
				justifyContent: 'center',
				alignItems: 'center'
			}}
			data={props.aliens}
			renderItem={alien => (
				<Card {...alien.item} onCardClick={props.onCardClick} />
			)}
			keyExtractor={item => item.id.toString()}
		/>
	);
};
