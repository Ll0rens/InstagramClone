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
        flex: 1,
        lineHeight: 18,
    }

  });

  export default styles;