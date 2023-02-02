import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user";

import { getAllTrumpets } from "../API/Trumpets";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import TrumpetCard from "../components/TrumpetCard";
import { useNavigate } from "react-router-native";

const AllTrumpets = () => {
    const navigate = useNavigate();
    const [trumpets, setTrumpets] = useState([]);
    const { token, user } = useContext(UserContext);

    const fetchTrumpets = async () => {
        const trumpets = await getAllTrumpets(token);
        // const trumpets = 401;
        console.log(trumpets);
        if (trumpets === 401) {
            navigate("/login");
        } else {
            setTrumpets(trumpets);
        }
    };

    useEffect(() => {
        fetchTrumpets();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recent Trumpets !</Text>
            {trumpets.length > 0 ? (
                <FlatList
                    data={trumpets}
                    renderItem={({ item }) => (
                        <TrumpetCard
                            userEmail={user.email}
                            trumpet={item.content}
                        />
                    )}
                />
            ) : (
                <Text>There is no Trumpets yet ...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    label: {
        fontWeight: "bold",
        marginTop: 20,
    },
    input: {
        height: 40,
        width: "80%",
        marginTop: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
    },
    button: {
        backgroundColor: "blue",
        paddingVertical: 15,
        marginTop: 20,
        alignItems: "center",
        width: "80%",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default AllTrumpets;
