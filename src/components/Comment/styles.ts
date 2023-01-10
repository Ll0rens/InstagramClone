import { StyleSheet } from "react-native";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";

const styles = StyleSheet.create({

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
        lineHeight: 18,
    },

    avatar: {
      width: 40,
      aspectRatio: 1,
      borderRadius: 20,
      marginRight: 5,
    },

    footer: {
      flexDirection: 'row',
      marginBottom: 10
    },

    footerText: {
      marginRight: 10,
    },

    middleColumn: {
      flex: 1,
    }

  });

  export default styles;