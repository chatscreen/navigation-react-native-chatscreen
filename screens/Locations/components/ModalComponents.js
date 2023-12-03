import React, { useState } from "react";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";

import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  Image,
  Alert,
  Pressable,
  TouchableOpacity,
} from "react-native";

const ModalComponent = ({ visible, onClose }) => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [userAgreement, setUserAgreement] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    if (!username || !image || !userAgreement) {
      Alert.alert(
        "ERROR",
        "Please enter username, select an image, and read and agree to the terms and conditions."
      );
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("image", {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    });
    console.log(formData);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
      ></TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 9,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              alignSelf: "flex-end",
              width: "95%",
              borderRadius: 10,
            }}
          >
            <Text>Profile picture</Text>
            <Pressable
              onPress={async () => {
                let result = await ImagePicker.launchCameraAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  aspect: [4, 3],
                  quality: 1,
                });
                if (!result.canceled) {
                  setImage(result.assets[0].uri);
                }
              }}
            >
              <Text>Take Picture</Text>
            </Pressable>
            <Pressable
              onPress={async () => {
                let result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,
                  aspect: [4, 3],
                  quality: 1,
                });
                if (!result.canceled) {
                  setImage(result.assets[0].uri);
                }
              }}
            >
              <Text>Select from gallery</Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              width: "95%",
              alignSelf: "center",
              borderRadius: 10,
            }}
          >
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            fontWeight: "500",
            color: "#202020",
          }}
        >
          SET UP PROFILE
        </Text>
        <View>
          <Pressable
            onPress={() => {
              setModalVisible(true);
            }}
          >
            {image ? (
              <Image
                source={{ uri: image }}
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: "#a9b0be",
                  borderRadius: 50,
                  alignSelf: "center",
                }}
              />
            ) : (
              <View
                style={{
                  height: 100,
                  width: 100,
                  backgroundColor: "#a9b0be",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Ionicons
                  name="add"
                  size={50}
                  color="white"
                  style={{ position: "absolute", alignSelf: "center" }}
                />
              </View>
            )}
          </Pressable>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              marginBottom: 20,
              color: "#202020",
            }}
          >
            Profile Picture
          </Text>
        </View>
        <View
          style={{
            padding: 3,
            width: 300,
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 0.5,
            marginBottom: 20,
          }}
        >
          <TextInput
            placeholder="Username"
            style={{ fontSize: 18 }}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Ionicons
            name="person"
            size={24}
            color={username ? "green" : "#a9b0be"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => {
              setUserAgreement(!userAgreement);
            }}
          >
            <MaterialIcons
              name={userAgreement ? "check-box" : "check-box-outline-blank"}
              size={24}
              color={userAgreement ? "green" : "#a9b0be"}
            />
          </Pressable>
          <Text
            style={{
              margin: 3,
              textAlign: "center",
              width: 240,
              fontSize: 13,
              color: "#202020",
            }}
          >
            I agree to the
            <Text style={{ fontWeight: "bold" }}> terms of use</Text> and
            <Text style={{ fontWeight: "bold" }}> privacy policy</Text> of the
            Chatscreen User App.
          </Text>
        </View>
        <Pressable onPress={handleSubmit}>
          <View
            style={{
              width: 300,
              height: 50,
              backgroundColor: "#616CB2",
              justifyContent: "center",
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                alignSelf: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              SUBMIT
            </Text>
          </View>
        </Pressable>
      </View>
    </Modal>
  );
};

export default ModalComponent;
