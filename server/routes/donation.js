const express = require("express");
const { ObjectId } = require("mongodb");
const donationRouter = express.Router();

//get all donation
donationRouter.get("/", async (req, res) => {
  try {
    const results = await req.dbClient
      .db("charity")
      .collection("donation")
      .find({})
      .toArray();
    if (results.length !== 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ message: "No Donation Yet" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//post a new donation
donationRouter.post("/", async (req, res) => {
  try {
    const result = await req.dbClient
      .db("charity")
      .collection("donation")
      .insertOne({
        accountId: req.body.accountId,
        date: Date.now(),
        itemName: req.body.item,
        information: req.body.info,
        status: req.body.status,
        image:
          req.body.image === null
            ? "https://ecowaterqa.vtexassets.com/arquivos/ids/156130-800-auto?width=800&height=auto&aspect=true"
            : req.body.image,
      });

    console.log(`A document was inserted with the _id: ${result.insertedId}`);

    // expecting all donations or just new donation ?
    const allDonation = await req.dbClient
      .db("charity")
      .collection("donation")
      .find({})
      .toArray();
    if (allDonation.length !== 0) {
      res.status(200).json(allDonation);
    } else {
      res.status(404).json({ message: "No Donation Yet" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//delete a donation by id
donationRouter.delete("/:itemId", async (req, res) => {
  try {
    const result = await req.dbClient
      .db("charity")
      .collection("donation")
      .deleteOne({ _id: ObjectId(req.params.itemId) });
    if (result) {
      res
        .status(200)
        .json(`${result.modifiedCount} document(s) was/were deleted.`);
    } else {
      res.status(404).json({ message: "Item Not Found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

//update a donation by id
donationRouter.patch("/:itemId", async (req, res) => {
  try {
    const result = await req.dbClient
      .db("charity")
      .collection("donation")
      .updateOne(
        { _id: ObjectId(req.params.itemId) },
        {
          $set: {
            itemName: req.body.itemName,
            information: req.body.information,
            status: req.body.status,
            date: Date.now(),
            image: req.body.image,
          },
        }
      );
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  } finally {
  }
});

module.exports = donationRouter;