import { COMMENT_ADDED, MISSING_FIELDS, SERVER_ERROR } from "@/consts";
import { AddComment, GetComments } from "@/lib/models/Comment";
import type { APIRoute } from "astro";

// in case you use pnpm and get some trouble with the APIRoute use this command to fix it and reload your window: pnpm astro sync

export const GET: APIRoute = async ({ params, request }) => {
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

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const data = await request.formData();
    const body = {
      id: data.get("id") as string,
      name: data.get("name") as string,
      website: data.get("website") as string,
      comment: data.get("comment") as string,
    };

    if (!body.name || !body.comment) {
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

    await AddComment(body);

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
