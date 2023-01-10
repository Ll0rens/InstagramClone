import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

const Input = () => {
    const [newComment, setNewComment] = useState('')
    const onPost = () => {
        console.warn('Posting new post', newComment);
        setNewComment('');
    }
  return (
    <View style={styles.root}>
        <Image
            source={{
                uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
            }}
            style={styles.image}>
        </Image>
        <TextInput multiline value={newComment} onChangeText={setNewComment} placeholder='Write your comment...' style={styles.input} />
        <Text onPress={onPost} style={styles.button}>POST</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderColor: colors.border,
        alignItems: 'flex-end',
    },    
    image: {
        width: 40,
        aspectRatio: 1,
        borderRadius: 20,
    },
    input: {
        flex: 1,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 5,
        paddingRight: 50,
    },
    button: {
        position: 'absolute',
        right: 18,
        bottom: 19,
        fontSize: fonts.size.small,
        color: colors.primary,
        fontWeight: fonts.weight.full,

    }
})

export default Input