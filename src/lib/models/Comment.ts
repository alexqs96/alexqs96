import type { CommentBase } from "@/types";
import mongoose from "mongoose";
import ConnectDB from "../database";

const commentSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Comment =
  mongoose.models.Comments || mongoose.model("Comments", commentSchema);

export async function GetComments(id: string | undefined) {
  try {
    if (!id) {
      return [];
    }

    await ConnectDB();

    const data = await Comment.find({
      id,
    }).sort({
      createdAt: -1,
    });

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function AddComment(data: CommentBase & { id: string }) {
  try {
    const { id, name, comment, website } = data;

    await ConnectDB();

    const newPost = new Comment({
      id,
      name,
      comment,
      website,
    });

    await newPost.save();

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}
