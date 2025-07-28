const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();
router.get("/", controller.listCategories);
router.get("/categories/:id/items", controller.listCategories);
router.get("/NewCategory", controller.addNewCategoryGet);
router.post("/NewCategory", controller.addNewCategoryPost);
router.get("/newItem/:id/item", controller.addNewItemGet);
router.post("/newItem/:id/item", controller.addNewItemPost);
router.get("/authoriseEdit/:id/verifyx5590-editpass", controller.authoriseEditGet);
router.post("/authoriseEdit/:id/verifyx5590-editpass", controller.authoriseEditPost);
router.get("/authoriseDelete/:id/verifyx8421-delpass", controller.authoriseDeleteGet);
router.post("/authoriseDelete/:id/verifyx8421-delpass", controller.authoriseDeletePost);
router.get("/items/:id/edit-zz9xBsecure", controller.editItemGet);
router.post("/items/:id/edit-zz9xBsecure", controller.editItemPost);
router.get("/items/:id/delete-zz9opBsecure", controller.deleteItem);
router.post("/items/:id/delete-zz9opBsecure", controller.deleteItem);

router.use((req,res)=>{
    res.status(404).render("404")
})

module.exports = router;
