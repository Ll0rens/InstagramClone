import { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import styles from './styles';
import { IComment } from '../../types/models';

interface ICommentProps {
    comment: IComment;
    includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
    const [isLike, setIsLike] = useState(false);

    const toggleLike = () => {
        setIsLike(v => !v);
    }
  return (
    <View style={styles.comment}>
        {includeDetails && <Image source={{uri: comment.user.image}} style={styles.avatar} />}
        <View style={styles.middleColumn}>
            <Text style={styles.commentText}><Text style={styles.bold}>{comment.user.username}</Text>
                {comment.comment}
            </Text>
            {includeDetails && (
            <View style={styles.footer}>
                <Text style={styles.footerText}>2d</Text>
                <Text style={styles.footerText}>5 likes</Text>
                <Text style={styles.footerText}>Reply</Text>
            </View>
            )}
        </View>
        <Pressable onPress={toggleLike} hitSlop={5}>
            <AntDesign
                name={ isLike ? 'heart' : 'hearto'}
                size={16}
                style={styles.icon}
                color={ isLike ? colors.accent : colors.black}
            />
        </Pressable>

  </View>
  )
}

export default Comment