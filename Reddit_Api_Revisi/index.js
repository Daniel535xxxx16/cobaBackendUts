// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// const postRoutes = require('./routes/postsRoute');
// const commentRoutes = require('./routes/commentsRoute');
// const userRoutes = require('./routes/usersRoute');

// app.use(express.json());

// // Routes
// app.use('/posts', postRoutes);
// app.use('/comments', commentRoutes);
// app.use('/users', userRoutes);

// // Connect to DB
// // mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // }).then(() => {
// //   console.log('Connected to MongoDB');
// //   app.listen(process.env.PORT, () => {
// //     console.log(`Server running on port ${process.env.PORT}`);
// //   });
// // }).catch(err => {
// //   console.error('DB connection error:', err);
// // });

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(process.env.PORT, () => {
//       console.log(`Server running on port ${process.env.PORT}`);
//     });
//   })
//   .catch(err => {
//     console.error('DB connection error:', err);
//   });
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const postRoutes = require('./routes/postsRoute');
const commentRoutes = require('./routes/commentsRoute');
const userRoutes = require('./routes/usersRoute');

app.use(express.json());

// Routes
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('DB connection error:', err);
    process.exit(1); // Exit the process if the DB connection fails
  });

