const express = require ('express');

const app = express();

const port = 8000;

//-----Routes---------//
app.use('/', require('./routes/index'));

//-----Start Port---------//
app.listen(port, function(err){
    if(err){
        // console.log('Error: ',err);
        console.log(`Error :  ${err}`)
    }

    console.log(`Server is running on port: ${port}`);

})