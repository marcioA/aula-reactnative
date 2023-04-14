import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const addTask = () => {
    if (task !== '') {
      setTasksList(state => [...state, { key: Math.random().toString(), text: task }]);
      setTask('');
    }
  };

  const deleteTask = (taskKey) => {
    setTasksList((currentTasks) => {
      return currentTasks.filter((task) => task.key !== taskKey);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Descreva a atividade"
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <Button title="Adicionar" onPress={addTask} />
      </View>
      <FlatList
        style={styles.list}
        data={tasksList}
        renderItem={(taskData) => (
          <View style={styles.listItem}>
            <Text>{taskData.item.text}</Text>
            <Button title="Delete" onPress={() => deleteTask(taskData.item.key)} style={styles.btnDelete} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '10%'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  list: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  btnDelete: {
    backgroundColor: '#FF0000'
  }
});
