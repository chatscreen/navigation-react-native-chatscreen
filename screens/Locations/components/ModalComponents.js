import React, { useState } from "react";

import * as ImagePicker from "expo-image-picker";

import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";

const ModalComponent = ({ visible, onClose }) => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const handleChooseImage = async () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      id: 2,
    };
    console.log("hi");
  };

  const handleSubmit = () => {
    if (!username || !image) {
      Alert.alert("Error", "Please enter username and select an image");
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
  const openPicker = () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      id: 2,
    };
  };
  openPicker();
  return (
    <Modal visible={visible} animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
          }}
        >
          User Signup
        </Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={{
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
            width: "80%",
          }}
        />
        <Button
          title="hi"
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
        />
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200, marginTop: 20 }}
          />
        )}
        <Button title="Submit" onPress={handleSubmit} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default ModalComponent;
