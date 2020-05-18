const { User, Note, Category } = require('../models');

const noteController = {

    addNote: async (req, res) => {

        const data = req.body; 
        const param = req.params;
        
        /*const cat = await Category.findOne({
            where: {
                name: param.name
            }
        });*/

        const user = await User.findOne({
          where: {
              id: param.id,
          },
        });
       
        const newNote = new Note();

        newNote.user_id = user.id;
        //newNote.category_id = cat.id;
        newNote.title = data.title;
        newNote.content = data.content;
        newNote.favorite = false;

        await newNote.save();

        res.send(newNote);
        
    },

    updateNote: async (req, res) => {

      const data = req.body; 
      const param = req.params;

      const note = await Note.findByPk(param.note_id, {
        where: {
          user_id: param.id
        },
      });
      console.log(note);
      await note.update(data);    

      res.send(note);
        
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
          } 
      });

      res.send(notes);

    }  


};

  module.exports = noteController;