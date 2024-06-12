import { z } from "zod";

export interface iconType {
  size?: number | string;
}

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type CommentBase = {
  name: string;
  website?: string | null;
  comment: string;
};

export interface Comment extends CommentBase {
  _id: string;
  createdAt?: Date;
}

export const CommentSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter atleast 2 characters" })
    .max(80),
  website: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .optional()
    .or(z.literal(""))
    .default(""),
  comment: z.string().min(2, { message: "Please enter atleast 2 characters" }),
});

export type TCommentSchema = z.infer<typeof CommentSchema>;
