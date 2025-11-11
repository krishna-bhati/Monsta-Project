const mongoose = require('mongoose');
const colorSchema = new mongoose.Schema({

    name: {
        type: String,
        required : [true, 'Name is required'],
        match : [/^[a-zA-Z ]{2,20}$/, "The name should not contain any special character and the length of name should be greater then 2 and less then 20."],
        validate : {
            validator: async function (v) {
                const data = await this.constructor.findOne({name : v, deleted_at : null});
                return !data;
            },
            message : props => 'This specified username is already in use.'
        }
    },
    code: {
        type : String,
        required : [true, 'Code is required'],
    },
    status: {
        type : Boolean,
        default : 1,
    }, // 0- Inactive and 1- Active
    order: {
        type : Number,
        default: 0,
        min: [0, "Minimum value must be grater then 0"],
        max:[1000, "Maximum value must be less then 1000"],
    },
    created_at: {
        type : Date,
        default : Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now(),
    },
    deleted_at: {
        type:Date,
        default: null,
    },

})

const colorModel = mongoose.model('colors', colorSchema);

module.exports = colorModel;