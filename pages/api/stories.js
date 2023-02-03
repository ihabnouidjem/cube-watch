import clientPromise from "../../lib/mongoDB";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("cube");

    const stories = await db
      .collection("Stories")
      .find({})
      .sort({ metacritic: -1 })
      .toArray();

    res.json(stories);
  } catch (e) {
    console.log(e);
  }
}
