import mongoose from "mongoose";
import Bug from "../models/Bug.js";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async getBugById(id) {
    return await _repository.find({ id })
  }
  async create(rawData) {
    return await _repository.create(rawData)
  }
  async update(id, update) {
    let bug = await _repository.findById(id)
    if (!bug["closed"]) {
      bug = update;
      bug["lastModified"] = new Date();
      bug["message"] = ("Bug updated!")
      await bug.save();

    } else {
      return (new Error("This bug has already been closed for editing"))
    }
  }
  async delete(id) {
    let bug = await _repository.findById(id);
    if (!bug["closed"]) {
      bug["closed"] = true;
      bug["lastModified"] = new Date();
      bug["message"] = ("This bug is closed permenantly");
      await bug.save();
      return ("Bug has been closed")

    }
    return new Error("This bug has already been closed")
  }
}

const bugService = new BugService();
export default bugService;
