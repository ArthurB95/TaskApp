import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 20,
  },

  Tasks: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },

  deleteTask: {
    justifyContent: "center",
    paddingLeft: 15,
  },

  DescriptionTask: {
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#F5F5F5",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: "#282B2DB5",
  },

  buttonNewTask: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#F92E6A",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  iconButton: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
