'use strict';

const express = require('express');
const Boom = require('boom')
const todoRoutes = express.Router();
const Todo = require("../model/model");
const responseParser = require("../middleware/responseParser");
const BASE_URI = "/todos"

todoRoutes.route(BASE_URI)
    .get((req, res, next) => {
        Todo.find((error, todos) => {
            if (error) {
                return res.json(Boom.notFound("No records found."))
            }
            responseParser(req,res, todos);
        })
    })
    .post((req, res) => {
        Todo.create({
                name: req.body.name,
                done: false
            },
            (error, todo) => {
                if (error) {
                    res.json(Boom.badRequest('Unable to update todo'))
                }
                responseParser(req,res,todo)
            }
        )
    });

todoRoutes.route(BASE_URI + "/:id")
    .get((req, res, next) => {
        const id = req.params.id
        Todo.findById(id, (error, todos) => {
            if (error) {
                return res.json(Boom.notFound("No records found."))
            }
            responseParser(req,res,todos)
        })
    })
    .put((req, res) => {
        const id = req.params.id
        Todo.findById(id, (error, todo) => {
            if (error) {
                return res.json(Boom.notFound("No records found."))
            } else {
                todo.name = req.body.name
                todo.done = req.body.done
                todo.save((error, todo) => {
                    if (error) {
                        res.json(Boom.badRequest('Unable to update todo'))
                    } else {
                        responseParser(req,res,todo)
                    }
                })
            }
        })
    })
    .delete((req, res, next) => {
        const id = req.params.id
        Todo.findByIdAndRemove(id, (err, todo) => {
            if (err) {
                return res.json(Boom.notFound("No records found."))
            }
            responseParser(req,res,"Succesfully removed")
        })
    });


todoRoutes.all("*", (req, res) => {
    res.json(Boom.notFound("Invalid Request"))
})

module.exports = todoRoutes;