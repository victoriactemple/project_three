const express = require('express')
const router = express.Router()
const { User } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
    const users = await User.find({})
    // it's just going to send json instead of sending a string of handlebars
    res.json(users)
    } catch (err) {
        res.send(err)
    }
})  


router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        //Mongoose method of fidning byId
    const user = await User.findById(req.params.id)
    // it's just going to send json instead of sending a string of handlebars
    res.json(user)
    } catch (err) {
        res.send(err)
    }
})  


router.post('/', async (req, res) => {
    try{
    // here we create a new instance the user
    const newUser = new User(req.body.user) 
    // but user isn't saved until we hit newUser.save
    const saved = await newUser.save()

    res.json(saved)
    } catch (err) {
        res.send(err)
    }    
})

router.delete ('/:id', async (req, res) => {
   
   try{ // Find the user
   const user = await User.findById(req.params.id).remove()
    const users = await User.find({})
   //Save the updated change
   res.send(users)
   } catch (error){
       res.send(error)
   } 
})

router.patch('/:id', async (req, res) => {
    // Get the value of the updated user
    const updatedUser = req.body.user

    // Grab the specific details from the user 
    const user = await User.findById(req.params.id)

    user.userName = updatedUser.userName
    user.lastName = updatedUser.lastName
    user.firstName = updatedUser.firstName
    user.email = updatedUser.email

    // Save the user object
    const saved = await user.save()

    // Send the updated user
    res.json(saved)

})



module.exports = router
