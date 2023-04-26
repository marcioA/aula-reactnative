import { useEffect, useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';

import { styles } from './styles';

export default function Home() {
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
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text>{item.text}</Text>
                        <Button title="Delete" onPress={() => deleteTask(item.key)} style={styles.btnDelete} />
                    </View>
                )}
            />
        </View>
    )
}
