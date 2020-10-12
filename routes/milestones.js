const express = require("express");
const router = express.Router();
const milestones = require("../db/milestones");

router.post("/", async function (req, res, next) {
  try {
    const newMilestone = milestones.create(req.body);
    res.send({ error: null, data: newMilestone });
  } catch (error) {
    console.log("### Error in Post to: '/milestones'.\n" + error.message);
    res.send({ error: error.message });
  }
});

module.exports = router;
