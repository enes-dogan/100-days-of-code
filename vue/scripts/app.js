const TodosApp = {
  data() {
    return {
      todos: [],
      enteredTodoText: '',
      editedTodoId: null,
    };
  },
  methods: {
    saveTodo(event) {
      event.preventDefault();

      if (this.editedTodoId) {
        //Updating existing todo
        const todoId = this.editedTodoId; // "this" keyword doesn't refer the
        // data object if its inside a function. so storing inside const and then passing
        // into function is a workaround to that
        const todoIndex = this.todos.findIndex(function (todoItem) {
          return todoItem.id === todoId;
        });

        const updatedTodoItem = {
          id: this.todos[todoIndex].id,
          text: this.enteredTodoText,
        };

        this.todos[todoIndex] = updatedTodoItem;
      } else {
        //Creating new todo
        const newTodo = {
          text: this.enteredTodoText,
          id: new Date().toISOString(),
        };
        this.todos.push(newTodo);
      }

      this.enteredTodoText = '';
    },
    startEditTodo(todoId) {
      this.editedTodoId = todoId;
      const todo = this.todos.find(function (todoItem) {
        return todoItem.id === todoId;
      });
      this.enteredTodoText = todo.text;
    },
  },
};

Vue.createApp(TodosApp).mount('#todos-app');
