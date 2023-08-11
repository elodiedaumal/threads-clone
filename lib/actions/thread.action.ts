"use server";

import { revalidatePath } from "next/cache";
import Thread from "../models/user.model";
import { connectToDB } from "../mongoose";
import User from "../models/user.model";

interface Params {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export async function updateUser({
  text,
  author,
  communityId,
  path,
}: Params): Promise<void> {
  connectToDB();

  const createdThead = await Thread.create({ text, author, community: null });

  await User.findByIdAndUpdate(author, {
    $push: { threads: createdThead._id },
  });
  revalidatePath(path);
}
