const { User, Todolist, Todolist_item } = require('../models');

const todoController = {

  addTodo: async (req, res) => {

    const userID =  req.param.id

  },

  updateTodo: async (req, res) => {

    const userID =  req.param.id

    const todo = await Todolist.findByPk(todo_id);

    const items = data.items.map((item) => {
      await Todolist_item.findByPk(item.id);
    })

  },

  deleteTodo: async (req, res) => {

    const { id, todo_id } =  req.param;

    const items = await Todolist_item.findAll({
      where: {
        todo_id: todo_id,
      }
    })

    await items.destroy()

    const todo = await Todolist.findByPk(todo_id);

    await todo.destroy();

    const allTodo = await Todolist.findAll({
      where: {
        user_id: userID,
      },
      include: ['todolist_item', 'category'],
    });

    res.send(allTodo);

  },

  getTodo: async (req, res) => {

    const userID =  req.param.id

    const todo = await Todolist.findAll({
      where: {
        user_id: userID,
      },
      include: ['todolist_item', 'category'],
    });

    res.send(todo);

  },
}