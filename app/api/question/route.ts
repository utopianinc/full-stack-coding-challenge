export async function POST() {
  try {
    return Response.json({ message: "To the moon!" });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
}
