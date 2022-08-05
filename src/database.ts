import { Db, MongoClient } from 'mongodb';
import config from './config';

let database: Db;

const connectToMongoDb = async () => {
  try {
    if (!database) {
      console.log(config.DATABASE_URL);
      const cl = await MongoClient.connect(config.DATABASE_URL);
      database = cl.db(config.DATABASE_NAME);
      console.log('connected to mongodb at', config.DATABASE_NAME);
    }
  } catch (err) {
    console.log(err);
  }
};
connectToMongoDb()
  .then(() => {})
  .catch((err) => console.log(err));

const getDatabase = () => database;
export default getDatabase;
