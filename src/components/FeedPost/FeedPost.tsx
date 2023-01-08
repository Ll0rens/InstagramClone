import { View, Text, StyleSheet, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models'

interface IFeedPost {
    post: IPost;
};

const FeedPost = ({post}: IFeedPost) => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image source={{uri: post.user.image
          }}
          style={styles.userAvatar} 
        />
        <Text style={styles.userName}>Marcos Llorens</Text>
        <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots}/>
      </View>
      <Image source={{uri: post.image
        }}
        style={styles.image}
      />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
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
          <Text style={styles.text}>
            <Text style={styles.bold}>{post.user.username}.</Text>
                {post.description}
          </Text>
          {/* Comments*/}
          <Text>View all {post.nofComments} comments</Text>          
            {post.comments.map(comment => (
                <Comment comment={comment} key={comment.id}/>
            ))}
          <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
