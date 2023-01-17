import {useRoute, useNavigation} from '@react-navigation/native'
import React from 'react'
import user from '../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'
import FeedGridView from '../../components/FeedGridView/FeedGridView'

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params?.userId;
  //query the user with that userID
  navigation.setOptions({title: user.username})
  return(
    <FeedGridView 
      data={user.posts}
      ListHeaderComponent={ProfileHeader}
    />
  )
}
export default ProfileScreen;