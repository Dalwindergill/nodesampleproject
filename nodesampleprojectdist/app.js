const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Azure container registry is runnning and this is the updated version of the app")
});

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });

app.listen(process.env.PORT || 3000);
