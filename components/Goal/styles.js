import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#DCDCDC"
  },
  label: {
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 40
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  inputdate: {
    fontSize: 14,
    marginBottom: -12,
    color: "#6a4595"
  },
  inputcvv: {
    fontSize: 14,
    marginBottom: -12,
    color: "#6a4595"
  },
  inputs: {
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    height: 40,
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginLeft: 10,
    marginRight: 10,
    elevation: 5
  }
});

export default styles;
