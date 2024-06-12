import { Fragment, useEffect, useState } from "react";
import Form from "./Form";
import { CommentBlock, CommentSkeleton } from "./CommentBlock";
import type { Comment } from "../../types";

export function Comments({ postId }: { postId: string }) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);

  async function FetchComments() {
    setLoading(true);
    const data = await fetch(`/api/comment.json?id=${postId}`).then((res) =>
      res.json(),
    );
    setComments(data);
    setLoading(false);
  }

  const updateComments = (data: Comment) => {
    setComments([
      {
        _id: new Date().toString(),
        name: data.name,
        website: data.website || "",
        comment: data.comment,
        createdAt: new Date(),
      },
      ...comments,
    ]);

    return null;
  };

  useEffect(() => {
    FetchComments();
  }, []);

  return (
    <section id="comments">
      <Form
        data={{
          id: postId,
          updateComments,
        }}
      />

      <div className="py-10 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">
            {loading
              ? ""
              : comments.length > 1
              ? comments.length + " Comments"
              : "1 Comment"}
          </span>

          <button
            className="bg-gradient-to-b from-slate-100 to-slate-50 button-sm text-sm text-black/70 font-medium rounded-md border press"
            onClick={() => FetchComments()}>
            Refresh
          </button>
        </div>

        {loading ? (
          <CommentSkeleton />
        ) : comments.length > 0 ? (
          comments.map((e) => (
            <Fragment key={e._id}>
              <CommentBlock data={e} />
            </Fragment>
          ))
        ) : (
          <span className="font-medium text-lg block">
            No comments around, be the first ✍️.
          </span>
        )}
      </div>
    </section>
  );
}
