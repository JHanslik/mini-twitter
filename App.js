import { StyleSheet, View, SafeAreaView } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";

import Home from "./pages/Home";
import Login from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import SignInConfirmation from "./pages/SignInConfirmation";
import AllTrumpets from "./pages/AllTrumpets";
import NavBar from "./components/NavBar";
import { UserContextProvider } from "./contexts/user";

const App = () => {
    return (
        <UserContextProvider>
            <SafeAreaView style={styles.body}>
                <NativeRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route
                            path="/signinconfirmation"
                            element={<SignInConfirmation />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/alltrumpets" element={<AllTrumpets />} />
                    </Routes>
                    <NavBar />
                </NativeRouter>
            </SafeAreaView>
        </UserContextProvider>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
});

export default App;
