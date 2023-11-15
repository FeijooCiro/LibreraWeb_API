import { Request, Response } from 'express'

import getConnection from '../connection/connection'       // DB
import { Libro } from '../models/libro.model'   // modelo

export async function getLibros(req: Request, res: Response): Promise<Response | void> {
    try {
        const connection = await getConnection()
        const query = `SELECT * FROM libros`

        const resultados = await connection.query(query)
        return res.json(resultados[0])
    } 
    catch (e) { 
        console.error(e)
        res.status(500).send('Error interno del servidor')
    }
}

export async function getLibro(req: Request, res: Response) {
    const connection = await getConnection()
    try {
        const query = `SELECT * FROM libros WHERE idLibro = ?`
        const resultado = await connection.query(query, [req.params.idLibro]) 

        res.json(resultado[0])
    } 
    catch (err) {
        throw new Error('Error: ' + err)
    }  
} 

export async function createLibro (req: Request, res: Response) {
    const connection = await getConnection()
    try { 
        const newLibro: Libro = req.body
        const query = `INSERT INTO libros SET ?`
        await connection.query(query, [newLibro])
 
        res.json({message: 'Nuevo libro añadido'})
    }
    catch (err) { 
        throw new Error('Error ' + err)
    }
}

export async function updateLibro(req: Request, res: Response)  {
    const connection = await getConnection()
    try {
        const updatedLibro: Libro = req.body
        const query = `UPDATE libros SET ? WHERE idLibro = ? `
        await connection.query(query, [updatedLibro, req.params.idLibro])

        res.json({ message: 'Libro actualizado' })
    } 
    catch (err) {
        throw new Error('Error ' + err)
    }
}

export async function deleteLibro(req: Request, res: Response) {
    const connection = await getConnection()
    try {
        const query = `DELETE FROM libros WHERE idLibro = ?`
        await connection.query(query, [req.params.idLibros])

        res.json({ message: 'Libro eliminado' }) 
    }
    catch (err){
        throw new Error('Error ' + err)
    }
}