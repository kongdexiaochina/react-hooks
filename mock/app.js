const express = require('express')

const app = express()
app.get('/rest', (req, res) => {
  res.json({
    status: 1,
    message: 'request ok'
  })
})

app.get('/api/search', (req, res) => {
  const query = req.query.query

  let data = null
  if (query.includes('redux')) {
    data = {
      status: 1,
      message: [
        { id: 1001, title: 'redux' },
        { id: 1002, title: 'react-redux' },
        { id: 1003, title: 'redux-hook' }
      ]
    }
  } else if (query.includes('vue')) {
    data = {
      status: 1,
      message: [
        { id: 2001, title: 'vue' },
        { id: 2002, title: 'vuex' },
        { id: 2003, title: 'vue-router' }
      ]
    }
  } else if (query.includes('angular')) {
    data = {
      status: 1,
      message: [
        { id: 3001, title: 'angular' },
        { id: 3002, title: 'angular-router' },
        { id: 3003, title: 'angular-redux' }
      ]
    }
  }

  // res.json({
  //     status: 1,
  //     message:'request ok'
  // })
  res.json(data)
})

app.listen(5000)