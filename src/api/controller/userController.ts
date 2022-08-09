import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getDatabase from "../../database";
import { User } from "../../model/user";
import { validatePhoneNumber } from "../../util/util";
import config from "../../config";

export const registerUser = async (req: Request, res: Response) => {
    try{
        const db = getDatabase();
        console.log(req.body)
        const { name, phone, password, email } = req.body as User;

        if(!name || !phone || !password){
            return res.status(400).send({message: 'Fields are missing'});
        }

        if(typeof phone != 'number' || validatePhoneNumber(phone)){
            return res.status(400).send({message: 'Invalid Phone Number'});
        }

        const userExist = await db.collection<User>('users').findOne({$or: [{phone},{email}]});


        if(userExist){
            return res.status(400).send({message: 'User Already Exists!!!'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const insertedUser = await db.collection<User>('users').insertOne({
            name,
            phone,
            email,
            password: hashedPassword,
        });

        return res.status(200).send({message: 'User Registered Successfully', data: insertedUser });

    }catch(err){
        console.log(err);
        return res.status(500).send({message: 'Server Error'});
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try{
        const db = getDatabase();
        const { phone, password } = req.body as User;

        if(!phone || !password){
            return res.status(400).send({message: 'Missing Fields'});
        }

        if(typeof phone != 'number' || !validatePhoneNumber(phone)){
            return res.status(400).send({message: 'Invalid Phone Number'});
        }

        const userExist = await db.collection<User>('users').findOne({phone});

        if(!userExist){
            return res.status(400).send({message: 'User does not exists'});
        }

        const check = await bcrypt.compare(password, userExist.password);

        if(!check){
            return res.status(403).send({message: 'Invalid Password'});
        }

        const token = jwt.sign({userId: userExist._id}, config.JWT_KEY);

        return res.status(200).send({message: 'Successfully Logged In', token});

    }catch(err){
        console.log(err);
        return res.status(500).send({message: 'Server Error'});
    }
}