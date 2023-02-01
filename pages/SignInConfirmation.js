import { Button, Icon } from "@rneui/base";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";

const SignInConfirmation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        We sent you an Email to verify your account.
      </Text>
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
    textAlign: "center",
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

export default SignInConfirmation;
