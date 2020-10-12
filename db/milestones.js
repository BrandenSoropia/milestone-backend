const mongoUtils = require("./mongoUtil");

const MILESTONES = "milestones";

async function create(data) {
  try {
    // TODO: Figure out why this isn't working.
    const doc = await mongoUtils.getDB().collection(MILESTONES).insertOne(data);
    console.log("### doc", doc);

    return doc;
  } catch (error) {
    console.log("### This error happened in createMilestone", error);
  }
}

module.exports = {
  create: create,
};
