require('dotenv').config();
const db = require('./models')
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const SECRET_SESSION = process.env.SECRET_SESSION;
const flash = require('connect-flash')

// Axios 
const axios = require('axios')
const API_KEY = process.env.API_KEY
// app.get('/player', (req, res) => {
//     let options = {
//       headers: {
//         'Ocp-Apim-Subscription-Key': API_KEY
//       }
//     }
//     axios.get('https://api.sportsdata.io/v3/nba/scores/json/Player/20000571', options)
//     .then((response) => {
//       console.log(response.data)
//     })
// })


//app.post('/faves', (req, res) => {
  // let formData = req.body;
  // console.log(req.body)
    // db.player.findOrCreate({
    //   where: { 
    //     id: req.body.dataValues.id, 
    //     name: req.body.name
    //   }
    // })
    // .then(([newFave, created]) => {
    //   console.log(`this was created line 33: ${created}`)
    //   res.redirect('/nba/players')
    // })
    // .catch(err => {
    //   console.log('Error', err)
    // })
//})

// db.player.findOrCreate({       where: { id: 1,name: "Lebron James"},