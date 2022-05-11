const express = require("express");
const app = express();
const userRouter = require('./router/user')
const autoSuggestRouter = require('./router/autoSuggest')

app.use(express.json());
app.use('/users',userRouter)
app.use('/autoSuggest',autoSuggestRouter)


app.listen(4500, () => {
  console.log("Server runs on port 4500");
});
