const express = require('express');

// == Factorisation du try catch
const capture = require('./controllers/capture');

const multer = require('multer');

// == Lister le contenu des table le temps de la phase de dev
// FIXME: A SUPPRIMER SUR LA VERSION PROD
const mainController = require('./controllers/mainController');

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

// == router
const router = express.Router();


router.get('/', userController.homePage);


router.get('/favicon.ico', (req, res) => res.status(204));

router.get('/user/:id', auth, user_profilController.user_profilPage);

router.patch('/update-user', auth, capture(userController.update));

//connexion
router.post('/login', authController.loginAction);

//connexion
router.post('/logout', authController.logout);

//inscription
router.post('/signup', authController.signupAction);

//account suppression
router.delete('/profil/:id', userController.delete);

//left menu
router.get('/left-menu', capture(leftMenu.getMenu));

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

//categories
router.get('/categories', capture(categoryController.categoriesPage));

//specific category
router.get('/categories/:name', capture(categoryController.categoryPage));

//services
router.get('/services', capture(serviceController.servicesPage));

//specific services category
router.get('/category/:id/services', capture(serviceController.servicesCategoryPage));

//upload doc
router.post('/upload-files', capture(documentController.check));

//documents user
router.get('/mes-documents/:id', auth, capture(documentController.allDocuments));

// == Lister le contenu des table le temps de la phase de dev
// FIXME: A SUPPRIMER SUR LA VERSION PROD
router.get('/contenu-table/:class', capture(mainController.getAll));

router.get('/download', capture(documentController.download));

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});


const upload = multer({ storage });

router.post('/public/storage', upload.single('file'), capture(documentController.upload));

// 404
router.use((req, res) => {
  res.status(404).send("Not Found");
});

module.exports = router;