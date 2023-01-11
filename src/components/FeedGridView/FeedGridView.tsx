import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import ProfileHeader from '../../screens/ProfileScreen/ProfileHeader'
import { IPost } from '../../types/models'
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
    data: IPost[];
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null | undefined;
}
const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
        data={data}
        renderItem={({item}) => <FeedGridItem post={item}/> }
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        style={{marginHorizontal: -1}}>
    </FlatList>
  )
}

export default FeedGridView