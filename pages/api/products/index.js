import clientPromise from "../../../lib/mongoDB";
import { IncomingForm } from "formidable";
import { promises as fs } from "fs";
import path, { resolve } from "path";

var mv = require("mv");

export const config = {
  api: {
    bodyParser: false,
  },
};

const createNewProduct = async (newProductId, files, fields) => {
  const client = await clientPromise;
  const db = client.db("cube"); //await
  var fileName = await files.file.originalFilename;
  var productName = await fields.name;
  var productCompany = await fields.company;
  var productDescription = await fields.description;
  var productPrice = await fields.price;
  const newProduct = {
    folder: `${newProductId}`,
    src: `${newProductId}/${fileName}`,
    company: `${productCompany}`,
    name: `${productName}`,
    description: `${productDescription}`,
    price: `${productPrice}`,
  };
  await db
    .collection("Products")
    .insertOne(newProduct)
    .then(() => {
      console.log("product inserted");
    })
    .catch((err) => {
      return err;
    });
};

const createNewImage = async (newProductId, files) => {
  await fs.mkdir(
    path.join(process.cwd() + "/public/products", `${newProductId}`)
  );
  var fileName = await files.file.originalFilename;
  var oldPath = await files.file.filepath;
  var newPath = `./public/products/${newProductId}/${fileName}`;
  mv(oldPath, newPath, (err) => {
    return err;
  });
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const form = new IncomingForm();
      var newProductId = Date.now();
      const data = new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          console.log(files, fields);
          createNewProduct(newProductId, files, fields);
          createNewImage(newProductId, files);
        });
      });
      res.status(200).json({ data: "success" });
    } catch (err) {
      console.log(err);
    }
  } else if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("cube");

      const products = await db
        .collection("Products")
        .find({})
        .sort({ metacritic: -1 })
        .toArray();

      res.json(products);
    } catch (err) {
      console.error(err);
    }
  }
}
