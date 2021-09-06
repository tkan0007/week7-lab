const mongoose = require('mongoose');

const actorSchema = new mongoose.Scheme({
    _id:mongoose.Scheme.Types.Objectid,

    name:{
        type:String,
        required:true
    },

    bYear:{
        validate:{
            validator: function(newAge){
                if(Number.isInteger(newAge))
                    return true;
                else return false;
            },
            message: 'Birth year should be integer'
        },
        type:Number,
        required:true
    },

    movies:[{
        type:mongoose.Scheme.Objectid,
        ref:'Movie'
    }]
});

module.exports=mongoose.model('Actor',actorSchema);
