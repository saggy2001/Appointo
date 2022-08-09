import dotenv from 'dotenv';

dotenv.config();

const config = {
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_NAME: process.env.DATABASE_NAME,
    JWT_KEY: process.env.JWT_KEY,
}

export default config;