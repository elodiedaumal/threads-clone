"use server";

import User from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function updateUser(
  userId: String,
  username: string,
  bio: string,
  image: string,
  name: string,
  path: string
): Promise<void> {
  connectToDB();

  await User.findOneAndUpdate(
    { id: userId },
    {
      username: username.toLowerCase(),
      name,
      bio,
      image,
      onboarded: true,
    },
    { upsert: true }
  );
}
