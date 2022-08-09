import { Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { ObjectId } from "mongodb";
import config from "../../config";
import getDatabase from "../../database";
import { User } from "../../model/user";

export const authMiddleware = async (req: Request, res: Response, next: any) => {
    try{
        const db = getDatabase();
        const bearerHeader = req.headers.authorization;
        const bearerToken = bearerHeader.split(' ')[1];

        const decodedValue:any = jwt.verify(bearerToken, config.JWT_KEY);

        if(typeof decodedValue === 'undefined'){
            return res.status(403).send({message: 'Unauthorized'});
        }

        const userId = decodedValue.userId;

        const userExist = await db.collection<User>('users').findOne({_id: new ObjectId(userId)});

        if(!userExist){
            return res.status(403).send({message: 'Unauthorized'});
        }

        res.locals.userId = userExist._id;
        next();

    }catch(err){
        console.log(err);
        return res.status(403).send({message: 'Unauthorized'});
    }
}