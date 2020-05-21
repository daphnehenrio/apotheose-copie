const { User, Note, Category } = require('../models');

const noteController = {

    addNote: async (req, res) => {

        const data = req.body;
        console.log(req.body)
        console.log(req)
        const param = req.params;

        const user = await User.findOne({
          where: {
              id: param.id,
          },
        });

        const newNote = new Note();

        newNote.user_id = user.id;
        newNote.category_id = data.category_id;
        newNote.title = data.title;
        newNote.content = data.content;
        newNote.favorite = false;

        await newNote.save();

        const allNotes = await Note.findAll({
          where: {
              user_id: param.id,
          },
          include: ['category'],
          order: [
            ['category_id', 'ASC']
          ],

        });

        res.send(allNotes);

    },

    updateNote: async (req, res) => {

      const data = req.body;
      const param = req.params;
      console.log(data, param)

      const note = await Note.findByPk(param.note_id, {
        where: {
          user_id: param.id
        },
      });
      console.log(note);
      await note.update(data);

      const allNotes = await Note.findAll({
        where: {
            user_id: param.id,
        },
        include: ['category'],
        order: [
          ['category_id', 'ASC']
        ],
      })

      res.send(allNotes);

    },

    getOneNote: async (req, res) => {

      const param = req.params;

      /*const cat = await Category.findOne({
        where: {
            name: param.name
        }
      });*/

      const note = await Note.findByPk(param.note_id, {
        where: {
            user_id: param.id,
            //category_id: cat.id
        },
      });

      res.send(note);

    },

    getAllNote: async (req, res) => {

      const param = req.params;

      const notes = await Note.findAll({
          where: {
            user_id: param.id
          },
          include:['category'],
          order: [
            ['category_id', 'ASC']
          ],
      });

      res.send(notes);

    },

    deleteNote:  async (req, res) => {

      const param = req.params;

      const note = await Note.findByPk(param.note_id);

      await note.destroy();

      const allNotes = await Note.findAll({
        where: {
          user_id: param.id
        },
        include:['category'],
        order: [
          ['category_id', 'ASC']
        ],
    });

      res.send(allNotes)
    }
};

  module.exports = noteController;