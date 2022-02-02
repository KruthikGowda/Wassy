import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12341234", 10),
    isAdmin: true,
  },
  {
    name: "User1",
    email: "user1@gmail.com",
    password: bcrypt.hashSync("12341234", 10),
  },
  {
    name: "user2",
    email: "user2@gmail.com",
    password: bcrypt.hashSync("12341234", 10),
  },
];

export default users;
