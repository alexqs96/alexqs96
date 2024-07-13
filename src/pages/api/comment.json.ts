import { COMMENT_ADDED, MISSING_FIELDS, SERVER_ERROR } from "@/consts";
import { AddComment, GetComments } from "@/lib/models/Comment";
import { CommentSchema, type CommentFormType, type CommentType } from "@/types";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const query = Object.fromEntries(url.searchParams);

    const data = await GetComments(query.id);
    return new Response(JSON.stringify(data), {
      status: 200,
      statusText: "OK",
    });
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        message: SERVER_ERROR,
      }),
      {
        status: 500,
        statusText: SERVER_ERROR,
      },
    );
  }
};

export const POST: APIRoute = async ({ request }) => {
  const formQueries = new URL(request?.url).searchParams;
  const baseUrl = new URL(request.url).origin + "/blog/" + formQueries.get("id") + "#comments";

  try {
    const data = await request?.formData();

    const body: CommentFormType = {
      id: formQueries.get("id"),
      name: data.get("name"),
      website: data.get("website"),
      comment: data.get("comment"),
    };

    if (!CommentSchema.safeParse(body).success) {
      if (formQueries.get("nojs")) {
        return Response.redirect(baseUrl);
      }

      return new Response(
        JSON.stringify({
          message: MISSING_FIELDS,
        }),
        {
          status: 400,
          statusText: MISSING_FIELDS,
        },
      );
    }

    await AddComment(body as CommentType);

    if (formQueries.get("nojs")) {
      return Response.redirect(baseUrl);
    }

    return new Response(
      JSON.stringify({
        message: COMMENT_ADDED,
      }),
      {
        status: 200,
        statusText: "OK",
      },
    );
  } catch (error) {
    console.error(error);

    if (formQueries.get("nojs")) {
      return Response.redirect(baseUrl);
    }

    return new Response(
      JSON.stringify({
        message: SERVER_ERROR,
      }),
      {
        status: 500,
        statusText: SERVER_ERROR,
      },
    );
  }
};
