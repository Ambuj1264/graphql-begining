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

export interface filterKey {
  search: string;
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
    const findMyUser= await users.findOne({
      email,
      password,
    });
  
return    await  this.helloJwt(findMyUser)
  }
 public static   helloJwt = async (findMyUser: any) => {
    console.log(findMyUser,"findmyuser");
    const createToken = await jwt.sign({ ...findMyUser }, "ambuj", {
      expiresIn: "24h",
    });
    console.log(createToken,"token");
  return  {
    findMyUser,token:createToken
    }
  };

  public static async findAllUser(payload: any) {
    return users.find(payload);
  }
  public static async deleteUser(payload: UserId) {
    const { _id } = payload;
    const deleteUserById = await users.findByIdAndDelete({
      _id: _id,
    });
    return deleteUserById;
  }
  public static createJWTToken() {
    return ;
  }

  public static async decodeJWTToken(token: string) {
    const verify =await jwt.verify(token, "ambuj");
    return verify
  }
  public static async filterUser(payload: filterKey) {
    const { search } = payload;
    if (!search) {
      return false;
    }
    const searchObjOr: any[] = [];
    const searchObj = {};
    searchObjOr.push({
      email: { $regex: ".*" + search + ".*", $options: "i" },
    });
    searchObjOr.push({
      firstName: { $regex: ".*" + search + ".*", $options: "i" },

    });
    searchObjOr.push({
            lastName: { $regex: ".*" + search + ".*", $options: "i" },
    
    })
    searchObjOr.push({
        password: { $regex: ".*" + search + ".*", $options: "i" },
    })
    searchObj["$or"] = searchObjOr;
    // console.log(searchObj["$or"]);
    console.log(searchObj);

    const myData = await users.find(searchObj);

    return myData;
  }
}

export default UserServices;
function helloJwt(findUser: any) {
  throw new Error("Function not implemented.");
}

