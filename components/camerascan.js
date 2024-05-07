import * as React from 'react';
import { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CameraScreen = ({ navigation }) => {
  useEffect(() => {
    const openCamera = async () => {
      // Request camera permissions
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status !== 'granted') {
        alert('Camera permission denied');
        return;
      }

      try {
        // Launch camera
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });

        // Handle result
        if (!result.cancelled) {
          console.log('Image captured:', result.assets[0].uri);
          // Send the captured image to the server
          sendImageToServer(result.assets[0].uri);
        }
      } catch (error) {
        console.error('Error launching camera:', error);
      }
    };

    openCamera();
  }, []);

  const sendImageToServer = async (imageUri) => {
    const token = await AsyncStorage.getItem('token');
    const formData = new FormData();
    formData.append('picture', {
      name: 'image.jpg',
      type: 'image/jpeg',
      uri: imageUri,
    });

    try {
      const response = await fetch('http://192.168.1.106:8000/api/images/', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();
      console.log('Image upload response:', data);

      if (response.ok) {
        console.log('Image uploaded successfully');
      } else {
        console.error('Error uploading image:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return null;
};

export default CameraScreen;
