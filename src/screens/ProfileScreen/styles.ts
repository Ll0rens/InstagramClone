import {StyleSheet} from 'react-native'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
    root: {
        padding: 10,
    },
    avatar: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    numberContainer: {
        alignItems: 'center'
    },
    numberText: {
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.full,
        color: colors.black,
    },
    name: {
        fontWeight: fonts.weight.semi,
        color: colors.black,
    }

})

export default styles;