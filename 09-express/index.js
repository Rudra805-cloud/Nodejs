
import http, { get } from "http"

import express from "express"
const app=express();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
const myserver=http.createServer()
myserver.listen(8000,()=>{"server started"});

