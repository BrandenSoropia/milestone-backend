const mongoUtils = require("./mongoUtil");
const MILESTONES = "milestones";

async function create(data) {
  try {
    const _data = data;

    const result = await mongoUtils
      .getDB()
      .collection(MILESTONES)
      .insertOne(_data);

    return result.ops[0];
  } catch (error) {
    console.log("### This error happened in createMilestone", error);
    throw error;
  }
}

module.exports = {
  create: create,
};
