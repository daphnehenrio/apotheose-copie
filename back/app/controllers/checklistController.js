const { Checklist, Checklist_item, User_checklist } = require('../models');

const checkListController = {

    addCheckList: async (req, res) => {

        const data = req.body; 
        const param = req.params;

        const user = await User.findOne({
          where: {
              id: param.id,
          },
        });
        
    },

    updateCheckList: async (req, res) => {

      const data = req.body; 
      const param = req.params;  
        
    },

    getOneCheckList: async (req, res) => {

      const param = req.params;  

    },

    getAllCheckList: async (req, res) => {
       
      const param = req.params;  

    }  

};

module.exports = checkListController;