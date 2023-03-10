import { useState } from 'react';
import { View, Text,  Image, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';
import {useNavigation} from '@react-navigation/native';

interface IFeedPost {
    post: IPost;
};

const FeedPost = ({post}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();

  const navigateToUser = () => {
    navigation.navigate('UserProfile', {userId: post.user.id})
  }

  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id})
  }

  const toogleDescriptionExpanded = () => {
  setIsDescriptionExpanded(v => !v);
  };
  const toggleLike = () => {
    setIsLiked(v => !v);
  }

  let content = null;

  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image source={{uri: post.image}}
        style={styles.image}
        />
      </DoublePressable>
    )
  } else if (post.images) {
    content = <Carousel images = {post.images} onDoublePress={toggleLike}/>;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} />
      </DoublePressable>)
  }

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image source={{uri: post.user.image
          }}
          style={styles.userAvatar} 
        />
        <Text onPress={navigateToUser} style={styles.userName}>{post.user.username}</Text>
        <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots}/>
      </View>
      
          {content}

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
          </View>
          <Text style={styles.text}>Liked by {' '}
            <Text style={styles.bold}>{post.user.username}</Text> and {' '}
            <Text style={styles.bold}>{post.nofLikes} others</Text>
          </Text>
          {/* Photo Description */}
          <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
            <Text style={styles.bold}>{post.user.username}.</Text>
                {post.description}
          </Text>
          <Text onPress={toogleDescriptionExpanded}>{isDescriptionExpanded ? 'less' : 'more' }</Text>
          {/* Comments*/}
          <Text onPress={navigateToComments}>View all {post.nofComments} comments</Text>          
            {post.comments.map(comment => (
                <Comment comment={comment} key={comment.id}/>
            ))}
          <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
