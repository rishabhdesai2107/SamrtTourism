const express= require("express");
const router=express.Router();

const {addreviewController,fetchreviewsController,deleteReviewController,fetchReviewsByIdController} = require("../Controllers/ReviewControllers");

router.post('/reviews',addreviewController)
router.get('/reviews',fetchreviewsController)
router.delete('/reviews/:id',deleteReviewController)
router.get('/reviews/:id',fetchReviewsByIdController)

module.exports=router