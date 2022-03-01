const mongoose = require('mongoose')
const dbUrl = 'mongodb+srv://pallavi:pallavi1234@cluster0.hlj8q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(dbUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (!err) {
            console.log('connected data successfully');
        }
        else {
            console.log('DB connection error')
        }
    })

