import express,{Response,NextFunction} from 'express';
import todoRoutes from './routes/todos'
import {json }from 'body-parser';

const app = express();

app.use(json())

app.use('/todos',todoRoutes)



app.use((err: Error,req: express.Request,res: Response,next:NextFunction)=>{
  res.status(500).json({message: err.message})
})
app.listen(3001,()=>{
   console.log('opa')
})