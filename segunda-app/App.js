import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, TouchableHighlight, Image, Button, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import Main from './components/Main';

export default function App() {
  

  return (
    <Text>asd</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc', // Un gris/celeste muy clarito de fondo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    marginBottom: 10,
    maxWidth: 400,
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0', // Borde sutil característico de shadcn
    // Sombra sutil
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a', // Slate 900
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 14,
    height: 300,
    color: '#64748b', // Slate 500
    marginBottom: 20
  },
  form: {
    gap: 16, // Espaciado entre elementos del formulario
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0f172a',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#0f172a',
    backgroundColor: '#ffffff',
  },
  button: {
    height: 48,
    backgroundColor: '#6b8ddf', // Fondo negro/oscuro de shadcn
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 8,
    marginBottom: 8,
    padding: 10
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});