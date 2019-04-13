var express = require('express');
var router = express.Router();

const users=[
  { name: "Ahmed", track: "SD"},
  { name: "Noha", track: "UI"},
  { name: "Noura", track: "Java"},
  { name: "Salah", track: "Embeded"},
  
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('listusers', {users});
});

router.get('/create', (req, res) => {
  res.render('createuser');
});

router.post('/create', (req, res)=> {
  users.push(req.body);
  res.redirect('/users');
});

router.get('/edit/:userIndex',(req, res) =>{
  res.render('edituser',{
    user: users[req.params.userIndex],
    index: req.params.userIndex
  });
});

router.post('/edit/:userIndex', (req, res)=> {
  users[req.params.userIndex] = req.body;
  res.redirect('/users');
});




module.exports = router;
 