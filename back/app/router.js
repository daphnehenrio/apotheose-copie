const express = require('express');

// == Factorisation du try catch
const capture = require('./utils/capture');

// == upload with multer
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

const upload = multer({ storage });


// == require middleware
const auth = require('./middlewares/auth');

// == require controllers
const userController = require('./controllers/userController');

const authController = require('./controllers/authController');

const user_profilController = require('./controllers/user_profilController');

const leftMenu = require('./controllers/leftMenu');

const articleController = require('./controllers/articleController');

const categoryController = require('./controllers/categoryController');

const serviceController = require('./controllers/serviceController');

const documentController = require('./controllers/documentController');

const emailController = require('./controllers/emailController');

const memoController = require('./controllers/memoController');

const noteController = require('./controllers/noteController');

// == Lister le contenu des table le temps de la phase de dev
// FIXME: A SUPPRIMER SUR LA VERSION PROD
const mainController = require('./controllers/mainController');


// == router
const router = express.Router();


router.get('/', userController.homePage);


router.get('/favicon.ico', (req, res) => res.status(204));


// -------------------- USER --------------------

// user profil
router.get('/user/:id', auth, user_profilController.user_profilPage);

// update profil
router.patch('/update-user', auth, capture(userController.update));

//connexion
router.post('/login', authController.loginAction);

//déconnexion
router.post('/logout', authController.logout);

//inscription
router.post('/signup', authController.signupAction, emailController.emailValidator);

//account suppression
router.delete('/profil/:id/:user_id', userController.delete);


// -------------------- MENU --------------------

//left menu
router.get('/left-menu', capture(leftMenu.getMenu));

// -------------------- CATEGORY --------------------

//categories
router.get('/categories', capture(categoryController.categoriesPage));

//specific category
router.get('/categories/:name', capture(categoryController.categoryPage));

// -------------------- SERVICES --------------------

//services
router.get('/services', capture(serviceController.servicesPage));

//specific services category
router.get('/category/:id/services', capture(serviceController.servicesCategoryPage));


// -------------------- ARTICLES --------------------

//article home page
router.get('/articles/last', capture(articleController.homePage));

//article all
router.get('/articles', capture(articleController.getAllArticles));

//article one
router.get('/article/:id', capture(articleController.getOneArticle));

//article one
router.get('/articles/search/:value', capture(articleController.searchArticle));

//article by sub_category
router.get('/sub-category/:id/articles', capture(articleController.articleBySubCategory));


// -------------------- DOCUMENTS --------------------

//upload doc
router.post('/upload-files', capture(documentController.check));

// documents folders
router.get('/documents/categories', capture(documentController.allCategories))

// user's documents by sub_category :id => user_id
router.get('/my-documents/:id/sub_category/:sub_category_id', auth, capture(documentController.documentsBySubCategory));


router.get('/my-documents/:id/all', auth, capture(documentController.allDocuments));

router.get('/file/:id/:document_id', auth, capture(documentController.download))

router.get('/download', capture(documentController.download));

router.post('/public/storage/:id/:category/:sub_category', auth, upload.single('file'), capture(documentController.upload));

// -------------------- EMAILS --------------------

//nodemailer
//router.post('/email', capture(emailController.emailer));

// -------------------- MEMO --------------------
router.post('/memo/:id/:name', capture(memoController.addUser_info));

router.get('/memo/:id', capture(memoController.getAllUser_info));

router.get('/memo/:id/:name/:memo_id', capture(memoController.getOneUser_info));

router.patch('/memo/:id/:name/:memo_id', capture(memoController.updateUser_info));

// -------------------- NOTE --------------------
router.post('/note/:id', capture(noteController.addNote));

router.get('/note/:id', capture(noteController.getAllNote));

router.get('/note/:id/:note_id', capture(noteController.getOneNote));

router.patch('/note/:id/:note_id', capture(noteController.updateNote));

// == Lister le contenu des table le temps de la phase de dev
// FIXME: A SUPPRIMER SUR LA VERSION PROD
router.get('/contenu-table/:class', capture(mainController.getAll));


// 404
router.use((req, res) => {
  res.status(404).send("Not Found");
});

module.exports = router;