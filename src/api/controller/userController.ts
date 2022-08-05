import { Request, Response } from "express";
import getDatabase from "../../database";
import { User } from "../../model/user";

export const registerUser = async (req: Request, res: Response) => {
    try{
        const db = getDatabase();
        console.log(req.body)
        const { name, phone, password, email } = req.body as User;

        if(!name || !phone || !password){
            return res.status(400).send({message: 'Fields are missing'});
        }

        const userExist = await db.collection<User>('users').findOne({$or: [{phone},{email}]});


        if(userExist){
            return res.status(400).send({message: 'User Already Exists!!!'});
        }

        const insertedUser = await db.collection<User>('users').insertOne({
            name,
            phone,
            email,
            password,
        });

        return res.status(200).send({message: 'User Registered Successfully', data: insertedUser });

    }catch(err){
        console.log(err);
        return res.status(500).send({message: 'Server Error'});
    }
}