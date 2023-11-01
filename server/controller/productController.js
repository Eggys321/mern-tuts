const productModel = require("../model/productModel");
// inserting many
const insert_Many = async (req, res) => {
  const { title, description, image, category, price } = req.body;
  try {
    // if (!title || !description || !image || !category || !price)return res.status(404).json({ message: "fill all fields" });
    const products = await productModel.insertMany(req.body);
    res
      .status(201)
      .json({ message: "successfully created all products", products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
// create a product
const create_Product = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res
      .status(201)
      .json({ message: "successfully created a product", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
// delete many
const delete_Many = async (req, res) => {
  try {
    const products = await productModel.deleteMany({});
    res
      .status(200)
      .json({ message: "successfully deleted all products", products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
// delete product
const delete_Product = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete({
      _id: req.params.productId,
    });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// update product -- Params
const update_Product = async (req, res) => {
  try {
    const product = await productModel.updateOne(
      { _id: req.params.productId },
      { $set: req.body }
    );
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// single product  -- Params
const single_Product = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

// get products
const all_Products = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
//get all products by category
const get_product_category = async (req, res) => {
  // const productIdId = req.params.productIdId
  try {
    const products = await productModel.find({ category: req.params.productCategary })
    res.status(200).json(products)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });  }
}
// searching for products
const search_Products = async (req, res) => {
  const query = req.query.b
  try {
    const product = await productModel.find({
      title: { $regex: query, $options: 'i' },
    })
    res.status(200).json(product)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
}

module.exports = {
  insert_Many,
  create_Product,
  delete_Many,
  delete_Product,
  update_Product,
  single_Product,
  all_Products,
  get_product_category,
  search_Products
};
