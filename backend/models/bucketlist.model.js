    const mongoose = require('mongoose');

    const Schema = mongoose.Schema;
    const bucketListSchema = new Schema({
        place:{
            type:String,
            trim:true
        }
    });

    const BucketList = mongoose.model('bucketList', bucketListSchema);

    module.exports = BucketList;