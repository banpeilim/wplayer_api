const { Product, Rate } = require("./model");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { price, stock } = req.body;

  try {
    // Check if the product exists
    const product = await Product.findById(productId);
    console.log(product);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update the product with new price and stock
    if (price) {
      product.price = price;
    }
    if (stock) {
      product.stock = stock;
    }

    // Save the updated product
    await product.save();

    // Send a success response
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
};
exports.getAllRates = async (req, res) => {
  try {
    const rates = await Rate.find();
    res.status(200).json(rates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postExcellent = async (req, res) => {
  try {
    // Find the "Excellent" rating document
    let excellentRating = await Rate.findOne({ name: "Excellent" });

    // If "Excellent" rating document doesn't exist, create it with a vote count of 1
    if (!excellentRating) {
      excellentRating = new Rate({
        name: "Excellent",
        vote: 1,
      });
    } else {
      // Increment the vote count by 1
      excellentRating.vote++;
    }

    // Save the updated or newly created "Excellent" rating document
    await excellentRating.save();

    res.status(201).json({
      message: "Vote for 'Excellent' incremented successfully",
      rating: excellentRating,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postGood = async (req, res) => {
  try {
    // Find the "Good" rating document
    let goodRating = await Rate.findOne({ name: "Good" });

    // If "Good" rating document doesn't exist, create it with a vote count of 1
    if (!goodRating) {
      goodRating = new Rate({
        name: "Good",
        vote: 1,
      });
    } else {
      // Increment the vote count by 1
      goodRating.vote++;
    }

    // Save the updated or newly created "Good" rating document
    await goodRating.save();

    res.status(201).json({
      message: "Vote for 'Good' incremented successfully",
      rating: goodRating,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postAverage = async (req, res) => {
  try {
    // Find the "Average" rating document
    let averageRating = await Rate.findOne({ name: "Average" });

    // If "Average" rating document doesn't exist, create it with a vote count of 1
    if (!averageRating) {
      averageRating = new Rate({
        name: "Average",
        vote: 1,
      });
    } else {
      // Increment the vote count by 1
      averageRating.vote++;
    }

    // Save the updated or newly created "Average" rating document
    await averageRating.save();

    res.status(201).json({
      message: "Vote for 'Average' incremented successfully",
      rating: averageRating,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postPoor = async (req, res) => {
  try {
    // Find the "Poor" rating document
    let poorRating = await Rate.findOne({ name: "Poor" });

    // If "Poor" rating document doesn't exist, create it with a vote count of 1
    if (!poorRating) {
      poorRating = new Rate({
        name: "Poor",
        vote: 1,
      });
    } else {
      // Increment the vote count by 1
      poorRating.vote++;
    }

    // Save the updated or newly created "Poor" rating document
    await poorRating.save();

    res.status(201).json({
      message: "Vote for 'Poor' incremented successfully",
      rating: poorRating,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postReset = async (req, res) => {
  try {
    // Update all rating documents to set vote count to zero
    await Rate.updateMany({}, { $set: { vote: 0 } });

    // Retrieve all ratings after resetting
    const ratings = await Rate.find();

    res.status(200).json({ message: "All votes reset to zero", ratings });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
