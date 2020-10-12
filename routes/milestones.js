const express = require("express");
const router = express.Router();
const milestones = require("../db/milestones");

router.post("/", async function (req, res) {
  try {
    const result = await milestones.create(req.body);

    res.status(200).send({ error: null, data: result });
  } catch (error) {
    console.log("### Error in Post to: '/milestones'.\n" + error.message);
    res.status(500).send({
      error:
        "Sorry there was an error trying to create a new milestone. Please try again.",
    });
  }
});

module.exports = router;
