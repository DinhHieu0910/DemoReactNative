import {
    View,
    Text,
    Button,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Switch,
} from "react-native";
import React, { useState } from "react";

const Item = ({ title }) => (
<View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
</View>
);
const DemoComp = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const renderItem = ({ item }) => <Item title={item.title} />;
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View>
            <Text>Hello World</Text>
            <Button
                title="Button"
                color="#ccc"
            />

            <Text>Image</Text>
            <Image
                style={{
                height: 100,
                width: 100,
                }}
                source={{
                uri: "https://i1-vnexpress.vnecdn.net/2021/09/19/bP180918a3rgbjpg-1632024402.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=0gP5G3PkUqJYquvwu0Z7Tg",
                }}
            />
            <Text>ImageBackground</Text>
            <View>
                <ImageBackground
                source={{
                    uri: "https://i1-vnexpress.vnecdn.net/2021/09/19/bP180918a3rgbjpg-1632024402.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=0gP5G3PkUqJYquvwu0Z7Tg",
                }}
                resizeMode="cover"
                style={{
                    height: 140,
                }}
                ></ImageBackground>
            </View>

            <Text>Switch</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#0000FF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

            <Text>
                <TouchableOpacity>
                <Text>TouchableOpacity</Text>
                </TouchableOpacity>
            </Text>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
},
item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
},
title: {
    fontSize: 32,
},
});

export default DemoComp;
