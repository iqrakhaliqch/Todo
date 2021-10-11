import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './redux/actions';

const Todo = ({ todo, addTodo, deleteTodo, updateTodo }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task !== '') {
      addTodo(task);
      setTask('');
    }
  };

  const handleDelete = id => {
    deleteTodo(id);
  };

  const handleUpdate = (id, task) => {
    updateTodo(id, task);
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Todo App</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'blue', fontSize: 20 }}>Enter Task: </Text>
        <TextInput
          style={{
            backgroundColor: 'lightblue',
            width: '60%',
            color: '#ffffff',
            fontSize: 15,
          }}
          placeholder={'Enter Here ...'}
          value={task}
          onChangeText={txt => setTask(txt)}
        />
      </View>
      <TouchableOpacity
        style={{ backgroundColor: 'black', width: '60%', alignItems: 'center', margin: 2, padding: 2 }}
        onPress={handleAdd}>
        <Text style={{ color: 'white', fontSize: 20 }}>Add Todo</Text>
      </TouchableOpacity>

      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleDelete(item.id)} style={{ backgroundColor: 'green', width: 100, margin: 2, padding: 2 }}>
            <Text style={{ color: 'yellow', fontSize: 20 }}>{item.task}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'purple',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos.todo,
  };
};

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
