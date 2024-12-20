import dotenv from "dotenv";
dotenv.config();


export default {
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
    jwt_access_token: process.env.ACCESS_TOKEN_SECRET,
    jwt_refresh_token: process.env.ACCESS_REFRESH_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    URL: process.env.FRONTEND_URL,
    user_name: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    store_id: process.env.STORE_ID,
    signature_key: process.env.SIGNATURE_KEY,
    payment_url: process.env.PAYMENT_URL,
    payment_varifyurl: process.env.PAYMENT_TRANSACTION,
    BA_URL: process.env.BACKEND_URL,
};