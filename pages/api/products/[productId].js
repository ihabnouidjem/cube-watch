import clientPromise from "../../../lib/mongoDB";

export default async function handler(req, res) {
  const { productId } = req.query;
  console.log(productId);
  try {
    const client = await clientPromise;
    const db = client.db("cube");
    const query = { quantity: { $gte: 25 } };
    const projection = {
      title: 1,
      quantity: 1,
    };
    const products = await db
      .collection("Products")
      .find({})
      .sort({ metacritic: -1 })
      .toArray();
    const product = products.find((product) => {
      return product.folder == `${productId}`;
    });
    console.log(product);
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
  }
}
