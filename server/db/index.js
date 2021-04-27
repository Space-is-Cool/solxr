const Sequelize = require('sequelize');

const db = new Sequelize('soldb', 'root');

const User = db.define('users', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  user_id: Sequelize.NUMBER,
  accessibility: Sequelize.BOOLEAN,
  subscribed: Sequelize.BOOLEAN
});

const Iotd = db.define('users_iotd', {
  user_id: Sequelize.NUMBER,
  date_taken: Sequelize.STRING,
  roomname: Sequelize.STRING,
});

const ImageFeed = db.define('imageFeed', {
    picture_id: Sequelize.NUMBER,
    created_at: Sequelize.STRING,
    user_id: Sequelize.NUMBER,
  });

  const Emoji = db.define('emoji', {
    picture_id: Sequelize.NUMBER,
    emoji_type: Sequelize.STRING,
    user_id: Sequelize.NUMBER,
    emoji_type: Sequelize.STRING
  });

User.sync();
Iotd.sync();
ImageFeed.sync();
Emoji.sync()

module.exports.db = db;
module.exports.User = User;
module.exports.Iotd = Iotd;
module.exports.ImageFeed = ImageFeed;
module.exports.Emoji = Emoji;


// const sequelize = new Sequelize('minteger', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });
  
//   sequelize.authenticate()
//     .then(()=>{ console.log('server connected'); })
//     .catch((err)=>{ console.log(err); });
  
//   const Transactions = sequelize.define('Transactions', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       autoIncrement: true,
//       unique: true,
//     },
//     date: DataTypes.DATE,
//     amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
//     description: { type: DataTypes.STRING(50), allowNull: false },
//     categoryId: DataTypes.STRING,
//   });
  
  
//   const Categories = sequelize.define('Categories', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       autoIncrement: true,
//       unique: true,
//     },
//     budget: { type: DataTypes.STRING(50), allowNull: false },
//     name: { type: DataTypes.STRING(50), allowNull: false },
//   });
  
  
//   Categories.sync()
//     .then(()=>{ console.log('cats did sync'); })
//     .catch(()=>{ console.log('cats didnt sync'); });
  
//   module.exports = {
//     Transactions, 
//     Categories,
//     db: sequelize
//   };
