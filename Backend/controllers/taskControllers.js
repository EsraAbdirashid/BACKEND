import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient ()
export const newTask = async (req , res)=>{
        const {title,description}=req.body
        const newTasks = await prisma.tasks.create({
                data:{title,description}
        })
        res.status(201) .json ({message: "sucess addesd new task"})
}

