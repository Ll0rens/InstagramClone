import { View, Text, Image} from 'react-native'
import React from 'react'
import user from '../../assets/data/user.json'
import styles from './styles'
import Button from '../../components/Button'
import {useNavigation} from '@react-navigation/native';

const ProfileHeader = () => {

  const navigation = useNavigation();
    return (
      <View style={styles.root}>
        <View style={styles.headerRow}>
          <Image source={{uri: user.image}} style={styles.avatar} />
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text>POSTS</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text>POSTS</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text>POSTS</Text>
          </View>
        </View>
  
        <Text style={styles.name}>{user.name}</Text>
        <Text>{user.bio}/</Text>
        <View style={{flexDirection: 'row'}}>
          <Button 
            text='Edit Profile'
            onPress={() => navigation.navigate('Edit Profile')} 
          />
          <Button 
            text='Another Button'
            onPress={() => console.warn('On Edit Profile')} 
          />
        </View>
      </View>
    )
  }

  export default ProfileHeader;