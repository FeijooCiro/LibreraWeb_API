import { Router } from "express" 

import {getLibros, getLibro, createLibro, updateLibro, deleteLibro} from "../controllers/libro.controller"

const Libro = Router()

Libro.route('/')
    .get(getLibros)
    .post(createLibro)

Libro.route('/:idLibro')
    .get(getLibro) 
    .delete(deleteLibro)
    .put(updateLibro)

export default Libro  