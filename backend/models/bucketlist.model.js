    const mongoose = require('mongoose');

    const Schema = mongoose.Schema;
    const bucketListSchema = new Schema({
        action:{
            type:String,
            required:true,
            trim:true
        },
        country:{
            type:String,
            trim:true
        },
        imageUrl:{
            type:String,
            trim:true
        },
        fulfilledDate:{
            type:Date,
            trim:true
        },
        isComplete:{
            type:Boolean,
            default:false,
            trim:true
        },
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'user',
            required:true,
            trim:true
        }
    });

    const BucketList = mongoose.model('bucketList', bucketListSchema);

    module.exports = BucketList;