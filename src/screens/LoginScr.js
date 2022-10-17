import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput
} from 'react-native'

import mainStyles from '../assets/css/main'

const AuthSrc = () => {
    var logoImg = require('../assets/img/logo.png');
    return (
        <View style={styles.container}>
            <Image 
                source={logoImg}
                style={{ width: 120, height: 120, color: 'yellow', marginBottom: 10 }}
            />
            <Text style={mainStyles.heading}>Welcome back</Text>
            <TextInput
                style={mainStyles.formInput}
                placeholder="Email"
            />
            <TextInput
                style={mainStyles.formInput}
                placeholder="Password"
            />
        </View>
    );    
}

export default AuthSrc;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 38,
        paddingRight: 38,
    },
    
})