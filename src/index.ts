import express from 'express';
import { router } from './router';

const app = express()
const port = 3003

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(router)

app.listen(port, () => console.log("Server started on port", port))
