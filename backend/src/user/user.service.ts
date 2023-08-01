import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.schema';
import { UserDetails } from './user-details.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>,
  ) {}

  _getUserDetails(user: UserDocument): UserDetails {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  }

  async createUser(
    name: string,
    email: string,
    hashedPassword: string,
  ): Promise<UserDocument> {
    const newUser = new this.userModel({
      name,
      email,
      password: hashedPassword,
    });
    return newUser.save();
  }

  // Return all the User Document including the password
  async findByEmail(email: string): Promise<UserDocument> {
    return this.userModel.findOne({ email }).exec();
  }

  // Return the user without the password
  async findById(id: string): Promise<UserDetails | undefined> {
    const existingUser = await this.userModel.findById({ _id: id }).exec();
    if (!existingUser)
      throw new HttpException('Not exist', HttpStatus.NOT_FOUND);
    return this._getUserDetails(existingUser);
  }

  // dummy to get all user
  async getAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }
}
