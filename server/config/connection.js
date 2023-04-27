const mongoose = require('mongoose');

try {
  mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/team-chat',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log('Connected to MongoDB!');
} catch (error) {
  console.error(error);
}

module.exports = mongoose.connection;