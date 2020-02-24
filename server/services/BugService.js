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
    let bug = await this.getBugById(id);
    if (true) {
      _repository.findByIdAndUpdate(id, update, { new: true })
    }
  }
}

const bugService = new BugService();
export default bugService;
