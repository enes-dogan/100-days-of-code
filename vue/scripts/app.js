const TodosApp = {
  data() {
    return {
      isLoading: false,
      todos: [],
      enteredTodoText: '',
      editedTodoId: null,
    };
  },
  methods: {
    async saveTodo(event) {
      event.preventDefault();

      if (this.editedTodoId) {
        //Updating existing todo
        const todoId = this.editedTodoId; // "this" keyword doesn't refer the
        // data object if its inside a nested function. so storing inside const and then
        // passing into function is a workaround to that
        const todoIndex = this.todos.findIndex(function (todoItem) {
          return todoItem.id === todoId;
        });

        const updatedTodoItem = {
          id: this.todos[todoIndex].id,
          text: this.enteredTodoText,
        };

        this.todos[todoIndex] = updatedTodoItem;
        this.editedTodoId = null;

        let response;

        try {
          response = await fetch('http://localhost:3000/todos/' + todoId, {
            method: 'PATCH',
            body: JSON.stringify({
              newText: this.enteredTodoText,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          alert('Something went wrong!');
          return;
        }

        if (!response.ok) {
          alert('Something went wrong!');
          return;
        }
      } else {
        //Creating new todo

        let response;

        try {
          response = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            body: JSON.stringify({
              text: this.enteredTodoText,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
        } catch (error) {
          alert('Something went wrong!');
          return;
        }

        if (!response.ok) {
          alert('Something went wrong!');
          return;
        }

        const responseData = await response.json();
        const newTodo = {
          text: this.enteredTodoText,
          id: responseData.createdTodo.id,
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
    async deleteTodo(todoId) {
      this.todos = this.todos.filter(function (todoItem) {
        return todoItem.id !== todoId;
      });
      let response;

      try {
        response = await fetch('http://localhost:3000/todos/' + todoId, {
          method: 'DELETE',
        });
      } catch (error) {
        alert('Something went wrong!');
        return;
      }

      if (!response.ok) {
        alert('Something went wrong!');
        return;
      }
    },
  },
  async created() {
    this.isLoading = true;
    let response;
    try {
      response = await fetch('http://localhost:3000/todos');
    } catch (error) {
      alert('Something went wrong!');
      this.isLoading = false;
      return;
    }

    this.isLoading = false;

    if (!response.ok) {
      alert('Something went wrong!');
      return;
    }

    const responseData = await response.json();
    this.todos = responseData.todos;
  },
};

Vue.createApp(TodosApp).mount('#todos-app');