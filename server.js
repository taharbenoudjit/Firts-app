const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')

const app = express()

app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist/')))

const users = [{
  username: 'admin',
  password: 'admin'
}]

app.use(session({
  secret: 'ssh!quiet,it\'asecret!', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.get('/api/test', (req, res) => {
  console.log('coucou')
  res.json({
    message: "ceci est envoyé depuis l'API"
  })
})

app.get('/', function (req, res, next) {
  res.json({ status: 'open' })
  res.end('Maintenant, il me faut récupérer les sources de données de notre site')
})

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.login && u.password === req.body.password)
    if (!user) {
      res.status(401)
      res.json({
        message: 'error'
      })
    } else {
      req.session.userId = 1000 // connect the user, and change the id
      res.json({
        message: 'connected'
      })
    }
  } else {
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
  }
})

app.post('/api/signIn', (req, res) => {
  console.log('ok')
  var input = req.body
  var cUsername = input.login
  if (users.find(u => u.username == cUsername)) {

    res.status(401)
    res.json({
      message: 'This name is already being used.'
    })
  } else {
    var cPassword = input.password
    var info = {
      username: cUsername,
      password: cPassword
    }
    users.push(info)
    res.json({ auth: 'Inscription reussi' })
  }
  console.log(cUsername)
})

app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
