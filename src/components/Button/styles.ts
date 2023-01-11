import {StyleSheet} from 'react-native'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 5,

        padding: 5,
        alignItems: 'center',
        flex: 1,

        margin: 5
    },
    text: {
        color: colors.black,
        fontWeight: fonts.weight.semi,
    },

})

export default styles;