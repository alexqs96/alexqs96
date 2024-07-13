import { CommentSchema, type Comment, type TCommentSchema } from "../../types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoLogo } from "@components/Icons";

function Form({
  data,
}: {
  data: {
    id: string;
    updateComments: React.FC<Comment>;
  };
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TCommentSchema>({
    resolver: zodResolver(CommentSchema),
  });

  const onSubmit = async (values: TCommentSchema) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("website", values.website);
      formData.append("comment", values.comment);

      const res = await fetch(`/api/comment.json?id=${data.id}`, {
        method: "POST",
        body: formData,
      });

      if (res.status === 200) {
        data.updateComments({
          _id: new Date().toString(),
          name: values.name,
          website: values.website || "",
          comment: values.comment,
          createdAt: new Date(),
        });

        setTimeout(() => {
          reset({
            comment: "",
          });
        }, 4000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      method="POST"
      action={`/api/comment.json?nojs=true&id=${data.id}`}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2">
      <span className="text-lg font-medium block">
        Leave a comment <span className="inline-block ml-0.5">💬</span>
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="space-y-1">
          <input
            className={
              "input leading-tight p-2 w-full" + (errors.name ? " invalid" : "")
            }
            placeholder="Name"
            type="text"
            autoComplete="name"
            {...register("name")}
          />

          {errors.name ? (
            <span className="invalid-msg">
              <InfoLogo /> {errors.name.message}
            </span>
          ) : null}
        </div>

        <div className="space-y-1">
          <input
            className={
              "input leading-tight p-2 w-full" +
              (errors.website ? " invalid" : "")
            }
            placeholder="Website (optional)"
            type="text"
            autoComplete="website"
            {...register("website")}
          />
          {errors.website ? (
            <span className="invalid-msg">
              <InfoLogo /> {errors.website.message}
            </span>
          ) : null}
        </div>
      </div>

      <div className="space-y-1">
        <textarea
          placeholder="Aa"
          className={
            "input leading-tight p-2 w-full min-h-32 resize-y max-h-60" +
            (errors.comment ? " invalid" : "")
          }
          autoComplete="comment"
          {...register("comment")}
        />
        {errors.comment ? (
          <span className="invalid-msg">
            <InfoLogo /> {errors.comment.message}
          </span>
        ) : null}
      </div>

      <button
        disabled={isSubmitting}
        className={
          "button button-base button-main" +
          (isSubmitting ? " animate-pulse" : "")
        }
        type="submit">
        {isSubmitting ? "Sending.." : "Comment"}
      </button>
    </form>
  );
}

export default Form;
