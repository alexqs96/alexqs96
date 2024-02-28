import { DateParser } from "@/lib/utils";
import type { Comment } from "../../types";

export function CommentBlock({data}: {data: Comment}) {
  if (!data) {
    return null
  }

  return (
    <div
      className="p-4 rounded-lg border relative bg-white w-full overflow-hidden"
    >
      <span title={data.name} className="block font-medium truncate max-w-[50%]">
        {data.name}
      </span>
      
      <div className="flex items-center gap-1.5 text-slate-500 text-[0.8em]">
        <small>{DateParser(data.createdAt as Date)}</small>
        {data.website ? (
          <>
            <small className="text-[.35em]">/</small>

            <a
              href={data.website}
              target="_blank"
              rel="noreferrer noopener"
              className="block w-fit transition hover:text-pink-500 max-w-[50%] truncate hover:underline"
            >
              {data.website}
            </a>
          </>
        ) : null}
      </div>

      <p className="break-words mt-1.5 whitespace-break-spaces">{data.comment}</p>
    </div>
  );
}

export function CommentSkeleton() {
  return (
    <div
      className="p-4 rounded-lg border relative bg-white w-full overflow-hidden animate-pulse"
    >
      <span title="Loading" className="block font-medium truncate max-w-[50%] bg-slate-200/70 w-[12ch] py-2 rounded-md"></span>
      
      <div className="flex items-center gap-1.5 mt-1.5">
        <small className="block bg-slate-200/70 w-[6ch] py-1.5 rounded-md"></small>
        <small className="text-sm text-slate-200">/</small>
        <small className="block bg-slate-200/70 w-[6ch] py-1.5 rounded-md"></small>
      </div>

      <p className="break-words mt-1.5 py-2 w-full max-w-[56ch] bg-slate-200/70 rounded-md"></p>
      <p className="break-words mt-1.5 py-2 w-full max-w-[32ch] bg-slate-200/70 rounded-md"></p>
    </div>
  );
}