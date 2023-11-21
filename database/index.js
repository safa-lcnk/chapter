const mongoose = require ('mongoose')

mongoose.connect(
    'mongodb://safa:toto@127.0.0.1:27017/chapter'
).then(() => console.log("✅ Connexion etablie !"))
.catch(err => console.log(err))