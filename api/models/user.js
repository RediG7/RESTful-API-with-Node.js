const mongoose = require('mongoose');

const userSchema = ({
    _id: mongoose.Schema.Types.ObjectId,                
    email: {
        type: String, 
        required: true, 
        unique: true, // unique does not validate just performance enhance 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);