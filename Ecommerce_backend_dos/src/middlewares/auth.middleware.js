import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../cofig'

export const verifyToken = (req, res, next) => {

    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).send({message: "No autorizado"});
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).send({message: "No autorizado"});
    }

}