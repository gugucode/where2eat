const router = require("express").Router();
const comments = require("../../controllers/commentController");


// Matches with "/api/sendPickInvite"
router
  .route("/addcomment")
  .post(comments.addComment)

router
  .route("/findallcomments")
  .get(comments.findAllComments)
  
router
  .route("/deletecomments/")
  .delete(comments.deleteComment)




  
module.exports = router;
