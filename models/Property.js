import {Schema,model,models} from "mongoose"

const PropertySchema = new Schema(
    {
    owner:{
    type: Schema.Types.ObjectId,
    ref:'User',
    required:true
    },
    name:{
        type: String,
        required:true
    },
    type:{
        type:String
    },
    description:{
        type:String
    },
    location:{
        street:String,
        city:String,
        state:String,
        zipcode:String
    },
    beds:{
        type:Number
    },
    baths:{
        type:Number
    },
    square_feet:{
        type:Number
    },
    amenities:[{
        type:String
    }],
    rates: {
        nightly:Number,
        weekly: Number,
        monthly: Number
      },
      seller_info: {
        name: String,
        email:String,
        phone:String
      },
      images:[
        {type:String}
      ],
      is_featured:{
        type:Boolean,
        default:false
      },
      createdAt:{
        type:String
    },
    updatedAt:{
          type:String
      },

},{
    timestamps:true,
}
);

const Property = models.Property || model('Property',PropertySchema);

export default Property;