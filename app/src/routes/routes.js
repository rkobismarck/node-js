'use strict';

const express    = require('express');
const todoRoutes = express.Router();
const Todo       = require("../model/model");
const BASE_URI   = "/todos"

todoRoutes.route(BASE_URI)
    .get((req, res, next) => {
        Todo.find((error, todos) => {
            if (error) {
                return next(new Error(error))
            }
            res.status(200).json(todos);
        })
    })
    .post((req, res) => {
    	console.log("Welcome to tijuana", req.body)
        Todo.create({
                name: req.body.name,
                done: false
            },
            (error, todo) => {
                if (error) {
                    res.status(400).send('Unable to create todo list')
                }
                res.status(200).json(todo)
            }
        )
    });

todoRoutes.route(BASE_URI+"/:id")
    .get((req, res, next) => {
        const id = req.params.id
        Todo.findById(id, (error, todos) => {
            if (error) {
                return next(new Error(error))
            }

            res.status(200).json(todos);
        })
    })
    .put((req, res) => {
        const id = req.params.id
        Todo.findById(id, (error, todo) => {
            if (error) {
                return next(new Error('Todo was not found'))
            } else {
                todo.name = req.body.name
                todo.done = req.body.done
                todo.save((error, todo) => {
                    if (error) {
                        res.status(400).send('Unable to update todo')
                    } else {
                        console.log("Update aplicado")
                        res.status(200).json(todo)
                    }
                })
            }
        })
    })
    .delete((req, res, next) => {
        const id = req.params.id
        Todo.findByIdAndRemove(id, (err, todo) => {
            if (err) {
                return next(new Error("Todo was not found"))
            }
            res.status(200).json("Succesfully removed")
        })
    });

module.exports = todoRoutes;