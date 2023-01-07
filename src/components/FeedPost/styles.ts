import { StyleSheet } from "react-native";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    post: {
    },
  
    image: {
      width: '100%',
      aspectRatio: 1,
    },

    header: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },

    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },

    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.black,
    },
    threeDots: {
      marginLeft: 'auto',
    },

    footer: {
      padding: 10
    },

    iconContainer: {
      flexDirection: 'row',
      padding: 10,
      marginBottom: 5,
    },

    icon: {
      marginHorizontal: 5,
    },

    bold: {
      fontWeight: fonts.weight.bold,
    },

    text: {
      color: colors.black,
      lineHeight: 18,
    },

    comment: {
      flexDirection: 'row',
      },

    commentText: {
        color: colors.black,
        flex: 1,
        lineHeight: 18,
    }

  });

  export default styles;