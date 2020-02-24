import express from "express";
import noteService from "../services/NoteService.js";
import bugsService from "../services/BugService.js"

export default class NoteController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .post("", this.create)
      .delete("/:id", this.delete)

  }

  async getAll(req, res, next) {
    try {
      let data = await noteService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await noteService.create(req.body)
      res.status(201).send(data)
    } catch (e) {
      next(e)
    }
  }
  async delete(req, res, next) {
    try {
      await noteService.delete(req.params.id);
      res.send(req.name + "deleted")
    } catch (e) {
      next(e)
    }
  }
}
