import mongoose from "mongoose";
import Bug from "../models/Bug.js";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    return await _repository.findById(id)
  }
  async create(rawData) {
    return await _repository.create(rawData)
  }
  async update(id, update) {
    let bug = await _repository.findById(id)
    if (!bug["closed"]) {
      return await _repository.findByIdAndUpdate(id, update);

    } else {
      return (new Error("This bug has already been closed for editing"))
    }
  }
  async delete(id) {
    let bug = await _repository.findById(id);
    if (!bug["closed"]) {
      bug["closed"] = true;
      bug["updatedAt"] = new Date();
      bug["message"] = ("This bug is closed permenantly");
      await bug.save();
      return ("Bug has been closed")

    }
    return new Error("This bug has already been closed")
  }
}

const bugService = new BugService();
export default bugService;
