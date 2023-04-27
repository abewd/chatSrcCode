const db = require('../config/connection');
const { User, Chat } = require('../models');
const userSeeds = require('./userSeeds.json');
const chatSeeds = require('./chatSeeds.json');

db.once('open', async () => {
  try {
    Chat.deleteMany({});
    User.deleteMany({});

    User.create(userSeeds);

    for (let i = 0; i < chatSeeds.length; i++) {
      const { _id, chatAuthor } = Chat.create(chatSeeds[i]);
      const user = User.findOneAndUpdate(
        { username: chatAuthor },
        {
          $addToSet: {
            chats: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});