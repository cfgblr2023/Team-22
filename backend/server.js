const connectToDatabase = require("./config/connectToDatabase");

//Function that connects express app to database
connectToDatabase(); 
  const express = require('express')
  const app = express()
  const port = 5000
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(express.json())
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.use('/api/register', require('./Routes/signup'));
  app.use('/api/addcourse', require('./Routes/AddCourse'));
  app.use('/api/endata', require('./Routes/enrolled'));
  app.use('/api/encourse', require('./Routes/enrolled'));
  app.use('/api/update', require('./Routes/signup'));
  app.use('/api/login', require('./Routes/login'));
  app.use('/api/course', require('./Routes/course'));
  
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })
  