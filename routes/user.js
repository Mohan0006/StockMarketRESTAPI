const express = require("express");
const router = express.Router();

const{
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile
} = require('../controllers/user')





/** 
@swagger
  components:
    schemas: 
     User:
        type: object
        required: 
            - firstName
            - email
        properties:
            firstName:
             type: String
             description: The first name of the user
            lastName:
             type: String
             description: The last name of the user
            email:
             type: String
             description: The email of the user
            phone:
             type: String
             description: The phone number of the user
            password:
             type: String
             description: The password of the user
        example:
            firstName: Mohan sai Krishna
            lastName : Mopada
            email    : mohansaikrishna.m20@iiits.in
            phone    : 9492382807
            password : Admin@123


*/





router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/profile').get(getUserProfile)
router.route('/profile/update').put(updateUserProfile)

module.exports = router;