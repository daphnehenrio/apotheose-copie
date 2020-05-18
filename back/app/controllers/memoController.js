const { User, User_info, Category } = require('../models');

const memoController = {

    addUser_info: async (req, res) => {

        const data = req.body; 
        const param = req.params;
        
        const cat = await Category.findOne({
            where: {
                name: param.name
            }
        });

        const user = await User.findOne({
          where: {
              id: param.id,
          },
        });
       
        const newUser_info = new User_info();

        newUser_info.user_id = user.id;
        newUser_info.category_id = cat.id;
        newUser_info.identify = data.identify;
        newUser_info.service_name = data.service_name;
        newUser_info.service_phone = data.service_phone;
        newUser_info.service_address = data.service_address;
        newUser_info.service_referent = data.service_referent;
        newUser_info.note_file = data.note_file;

        await newUser_info.save();

        res.send(newUser_info);
        
    },

    updateUser_info: async (req, res) => {

      const data = req.body; 
      const param = req.params;  

      const cat = await Category.findOne({
        where: {
            name: param.name
        }
      });

      const memo = await User_info.findByPk(param.memo_id, {
        where: {
          user_id: param.id,
          category_id: cat.id
        },
      });
      
      await memo.update(data);    

      res.send(memo);
        
    },

    getOneUser_info: async (req, res) => {

      const param = req.params;  

      const cat = await Category.findOne({
        where: {
            name: param.name
        }
      });

      const user_info = await User_info.findByPk(param.memo_id, {
        where: {
            user_id: param.id,  
            category_id: cat.id          
        },
      });

      res.send(user_info);

    },

    getAllUser_info: async (req, res) => {
       
      const param = req.params;  

      const user_info = await User_info.findAll({
          where: {
            user_id: param.id   
          } 
      });

      res.send(user_info);

    }  


};

  module.exports = memoController;