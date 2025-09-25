import dotenv from "dotenv";
import Path from "path";

dotenv.config({ path: Path.join(process.cwd(), ".env") });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  jwt: {
    access_token: {
      secret: process.env.JWT_SECRET,
      expires_in: process.env.EXPIRES_IN,
    },
    refresh_token: {
      secret: process.env.REFRESH_TOKEN_SECRET,
      expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
    },
  },
  database_url: process.env.DATABASE_URL,
  //   bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  //   default_password: process.env.DEFAULT_PASS,

  //   reset_pass_ui_link: process.env.RESET_PASS_UI_LINK,
  //   cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //   cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  //   cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  //   super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
};
