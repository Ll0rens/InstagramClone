import { View, Text, StyleSheet, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles'

const FeedPost = () => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
          }}
          style={styles.userAvatar} 
        />
        <Text style={styles.userName}>Marcos Llorens</Text>
        <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots}/>
      </View>
      <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'
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
            <Text style={styles.bold}>Marcos Llorens</Text> and {' '}
            <Text style={styles.bold}>66 others</Text>
          </Text>
          {/* Photo Description */}
          <Text style={styles.text}>
            <Text style={styles.bold}>Marcos_llorens.</Text>
              instagram es una aplicación y red social de origen 
              estadounidense, propiedad de Meta. Creada por Kevin Systrom y Mike Krieger, 
              fue lanzada el 6 de octubre de 2010. Ganó rápidamente popularidad, llegando a 
              tener más de 100 millones de usuarios
          </Text>
          {/* Comments*/}
          <Text>View all 16 comments</Text>          
          <View style={styles.comment}>
            <Text style={styles.commentText}><Text style={styles.bold}>Pedro_Picapiedra</Text>
              Creada por Kevin Systrom y Mike Krieger, 
              fue lanzada el 6 de octubre de 2010. Ganó rápidamente popularidad, llegando a 
              tener más de 100 millones de usuarios.
            </Text>
          <AntDesign
            name={'hearto'}
            size={16}
            style={styles.icon}
            color={colors.black}
          />
          </View>
          <Text>19, December 2022</Text>
      </View>
    </View>
  );
};

export default FeedPost;
