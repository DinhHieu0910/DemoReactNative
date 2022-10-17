import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native'

const AuthSrc = () => {
    var logoImg = require('../assets/img/logo.png');
    return (
        <View style={styles.container}>
            <Image 
                source={logoImg}
                style={{ width: 120, height: 120, color: 'yellow', marginBottom: 10 }}
            />
            <Text style={styles.heading}>Login Template</Text>
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>The easiest way to start with your amazing application.</Text>

            <Text style={styles.primaryBtn} onPress={() => Alert.alert('Chuyển qua giao diện Đăng nhập')}>LOGIN</Text> 
            <Text style={styles.whiteBtn} onPress={() => Alert.alert('Chuyển qua giao diện Đăng ký')}>SIGN UP</Text> 
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
    heading: {
        fontWeight: '700',
        fontSize: 20,
        color: '#560CCE',
        marginBottom: 10,
    },
    authBtn: {
        
    },
    primaryBtn: {
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#560CCE',
        fontWeight: '700',
        fontSize: 14,
        borderColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 6,
        padding: 12,
        marginBottom: 16,
    },
    whiteBtn: {
        width: '100%',
        textAlign: 'center',
        color: '#560CCE',
        backgroundColor: '#fff',
        fontWeight: '700',
        fontSize: 14,
        borderColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 6,
        padding: 12,
    }
})