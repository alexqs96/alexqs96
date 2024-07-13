import type { CommentType } from "@/types";
import mongoose from "mongoose";
import ConnectDB from "../database";
import { getCollection } from "astro:content";

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

const Comment = mongoose.models.Comments || mongoose.model("Comments", commentSchema);

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

export async function AddComment(data: CommentType) {
  try {
    await ConnectDB();

    const postFound = await findPost(data?.id || "")

    if (!postFound) {
      return false;
    }

    const newPost = new Comment(data);

    await newPost.save();

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}

async function findPost(slug: string) {
  const data = await getCollection("blog");
  const found = data.map((post) => ({
    slug: post.slug,
  }));

  return found.some((post) => post.slug === slug);
}
