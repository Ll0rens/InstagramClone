import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import user from '../../assets/data/user.json'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'
import { useForm, Controller, Control } from 'react-hook-form'
import { IUser } from '../../types/models'

const URL_REGEX = /^https?:/i
type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>

interface ICustomInput {
    control: Control<IEditableUser, object>;
    label: string;
    multiline?: boolean;
    name: IEditableUserField;
    rules?: object;
}

//First validate the errors with handleSubmit and the call the onSubmit function
const CustomInput = ({
    label,
    name,
    multiline = false,
    control,
    rules={}
    }:ICustomInput) => (
    <Controller
        rules={rules}
        control={control}
        name={name}
        render={({field:{onChange, value, onBlur}, fieldState: {error}})=>(
        <View style={styles.inputContainer}>
            <View style={{flex: 1}}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                multiline={multiline}
                style={[styles.input, {borderColor: error ? colors.accent : colors.border}]}
                placeholder={label}
                />
            </View>
            { error && <Text style={{color: colors.accent}}>{error.message}</Text>}
        </View>
        )}
    />
)

const EditProfileScreen = () => {
    const {control, handleSubmit} = useForm<IEditableUser>({
        defaultValues: {
            name: user.name,
            username: user.username,
            website: user.website,
            bio: user.bio,
        }
    });
    const onSubmit = (data: IEditableUser) => {
        console.log('Submit', data);
    }
  return (
    <View style={styles.page}>
        <Image source={{uri: user.image}} style={styles.avatar}/>
        <Text style={styles.textButton}>Change profile photo</Text>
        <CustomInput
            name='Name'
            control={control}
            label='Name'
            rules={{required: 'Name is required'}}
        />
        <CustomInput
            name='Username'
            control={control}
            label='Username' 
            rules={{required: 'Username is required', minLength: {value: 3, message: 'Username should be more than 3 characters'}}}
        />
        <CustomInput
            name='Website'
            control={control}
            label='Website'
            rules={{required: 'Website is required', pattern: {value: URL_REGEX, message: 'Invalid URL'}}}
        />
        <CustomInput
            name='Bio'
            label='Bio'
            control={control}
            multiline
            rules={{required: 'Bio is required', maxLength: {value: 10, message: 'Username should be less than 10 characters'}}}
        />
        <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>Submit</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
    avatar: {
        width: '30%',
        aspectRatio: 1,
        borderRadius: 100,
    },
    page: {
        alignItems: 'center',
        padding: 10
    },
    textButton: {
        color: colors.primary,
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.semi,

        margin: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    label: {
        width: 75,
    },
    input: {
        borderBottomWidth: 1,
    }
})

export default EditProfileScreen