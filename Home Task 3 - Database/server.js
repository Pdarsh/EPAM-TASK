const express = require("express");
const app = express();
const userRouter = require('./router/UserRouter')
const autoSuggestRouter = require('./router/AutoSuggestRouter')

app.use(express.json());
app.use('/users',userRouter)
app.use('/autoSuggest',autoSuggestRouter)


app.listen(4500, () => {
  console.log("Server runs on port 4500");
});
