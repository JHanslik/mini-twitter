import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link, useNavigate } from "react-router-native";
import { Button, Icon } from "@rneui/themed";
import { UserContext } from "../contexts/user";

const Home = () => {
    const navigate = useNavigate();
    const { token } = useContext(UserContext);

    useEffect(() => {
        if (token) {
            navigate("/alltrumpets");
        }
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Trumpeters</Text>
            <Button style={styles.button} radius={"sm"} type="solid">
                <Link style={styles.links} to="/signin">
                    <View style={styles.div}>
                        <Text>Create a new account</Text>
                        <Icon
                            style={styles.icon}
                            name="account-plus"
                            type="material-community"
                            color="white"
                        />
                    </View>
                </Link>
            </Button>
            <Button
                containerStyle={{ margin: 10 }}
                style={styles.button}
                radius={"sm"}
                type="solid"
            >
                <Link style={styles.links} to="/login">
                    <View style={styles.div}>
                        <Text>Log In</Text>
                        <Icon
                            style={styles.icon}
                            name="login"
                            type="material-community"
                            color="white"
                        />
                    </View>
                </Link>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    div: {
        flex: 1,
        flexDirection: "row",
    },
    button: {
        flex: 1,
    },
    links: {
        height: 25,
    },
    icon: {
        marginLeft: 10,
    },
});

export default Home;
