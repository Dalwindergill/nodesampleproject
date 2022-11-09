const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Azure container egistry is runnning ")
});

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });

app.listen(process.env.PORT || 3000);
