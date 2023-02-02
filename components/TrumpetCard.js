import { View, Text } from "react-native";
import { Card } from "@rneui/themed";
import { StyleSheet } from "react-native";

const TrumpetCard = ({ userEmail, trumpet }) => {
    return (
        <View style={styles.card}>
            <Card.Divider />
            <Card.Title>{userEmail}</Card.Title>
            <View style={{ position: "relative", alignItems: "center" }}>
                <Text>{trumpet}</Text>
            </View>
            <Card.Divider />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
    },
});

export default TrumpetCard;
