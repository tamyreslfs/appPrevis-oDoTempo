import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  formContainer: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 5, 
    fontWeight: '600' 
  },
  pickerWrapper: { 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 8, 
    backgroundColor: '#fafafa', 
    marginBottom: 15, 
    justifyContent: 'center' 
  },
  inputWrapper: { 
    marginBottom: 15 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fafafa',
    padding: 15,
    fontSize: 16,
    color: '#333'
  },
  button: { 
    height: 50, 
    backgroundColor: '#007AFF', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  buttonDisabled: { 
    backgroundColor: '#ccc' 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 18 
  },
});