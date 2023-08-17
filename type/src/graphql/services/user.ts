
import { users } from "../../entity/user";
import JWT from "jsonwebtoken";
const jwt = require("jsonwebtoken");

const JWT_SECRET = "$uperM@n@123";

export interface CreateUserPayload {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface Userfind {
  email: string;
  password: string;
}
export interface UserId {
  _id: string;
}
class UserServices {
  public static async createUser(payload: CreateUserPayload) {
    const { firstName, lastName, email, password } = payload;
    const createUser = await users.create({
      firstName,
      lastName,
      email,
      password,
    });
    return createUser;
  }

  public static async findUser(payload: Userfind) {
    const { email, password } = payload;
    return await users.findOne({
      email,
      password,
    });
   
  }
  helloJwt = async (findMyUser: any) => {
    const createToken = await jwt.sign({ ...findMyUser }, "ambuj", {
      expiresIn: "24h",
    });
  };

  public static async findAllUser(payload: any) {
    const findAllData = await users.find(payload);
    return findAllData;
  }
  public static async deleteUser(payload: UserId) {
    const { _id } = payload;
    const deleteUserById = await users.findByIdAndDelete({
      _id: _id,
    });
    return deleteUserById;
  }
  public static createJWTToken() {
    return;
  }

  public static decodeJWTToken(token: string) {
    return JWT.verify(token, JWT_SECRET);
  }
}

export default UserServices;