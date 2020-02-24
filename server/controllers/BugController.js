import express from "express";
import bugService from "../services/BugService";
import noteService from "../services/NoteService";

export default class BugController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .get("/:id/note", this.getnotesByBugId)
      .put("", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await bugService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await bugService.getBugById(req.params.id)
      res.send(data)

    } catch (e) {
      next(e)
    }
  }

  async create(req, res, next) {
    try {
      let data = await bugService.create(req.body)
      res.status(201).send(data)
    } catch (e) {
      next(e)
    }
  }

  async getnotesByBugId(req, res, next) {
    try {
      let data = await noteService.getNotesByBugId(req.params.id)
      res.send(data)
    } catch (e) {
      next(e)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await bugService.update(req.params.id, req.body);
      res.send(data);
    } catch (e) {
      next(e)
    }
  }

  async delete(req, res, next) {
    try {
      await bugService.delete(req.params.id);
      res.send(req.name + "deleted")
    } catch (e) {
      next(e)
    }
  }

}
