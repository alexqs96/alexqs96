import type { ReactSetState } from "@/types"
import { CommentSchema, type Comment, type TCommentSchema } from "../../types"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Form({data} : {data: {
  id: string,
  comments: Comment[]
  setComments: ReactSetState<Comment[]>
}}) {
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
      const formData = new FormData()
      formData.append("id", data.id)
      formData.append("name", values.name)
      formData.append("website", values.website)
      formData.append("comment", values.comment)

      const res = await fetch("/api/comment.json", {
        method: "POST",
        body: formData,
      })
      
      if (res.status === 200) {
        data.setComments([
          {
            _id: (new Date()).toString(),
            name: values.name,
            website: values.website || "",
            comment: values.comment,
            createdAt: new Date(),
          },
          ...data.comments,
        ])

        setTimeout(() => {
          reset({
            comment: "",
          });
        }, 4000);
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-1"
    >
      <span className="text-lg font-medium block">Leave a comment</span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div>
          <input
            className={"p-2 rounded-lg border w-full"+(errors.name? " border-red-strong outline-red-strong" : "")}
            placeholder="Name"
            type="text"
            autoComplete="name"
            {...register("name")}
          />

          {errors.name?
          <span
            className="text-sm block bg-red-soft text-red-strong py-1 px-2 rounded-lg w-fit mt-1"
          >
          {errors.name.message}
          </span> : null}
        </div>

        <div>
          <input
            className={"p-2 rounded-lg border w-full"+(errors.website? " border-red-strong outline-red-strong" : "")}
            placeholder="Website (optional)" 
            type="text"
            autoComplete="website"
            {...register("website")}
          />
          {errors.website?
          <span
            className="text-sm block bg-red-soft text-red-strong py-1 px-2 rounded-lg w-fit mt-1"
          >
          {errors.website.message}
          </span> : null}
        </div>
      </div>

      <div>
      <textarea
        placeholder="Aa"
        className={"p-2 rounded-lg border w-full min-h-32 resize-y max-h-60"+(errors.comment? " border-red-strong outline-red-strong" : "")}
        autoComplete="comment"
        {...register("comment")}
      />
      {errors.comment?
      <span
        className="text-sm block bg-red-soft text-red-strong py-1 px-2 rounded-lg w-fit"
      >
      {errors.comment.message}
      </span> : null}
      </div>

      <button disabled={isSubmitting} className={"button button-base button-main"+(isSubmitting? " animate-pulse" : "")} type="submit">
        {isSubmitting? "Publishing.." : "Publish"}
      </button>
    </form>
  )
}

export default Form