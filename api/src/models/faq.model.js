const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question is required'],
        validate: {
            validator: async function (v) {
                const data = await this.constructor.findOne({ question: v, deleted_at: null });
                return !data;
            },
            message: props => 'This specified question is already in use.'
        }
    },
    answer: {
        type: String,
        required: [true, 'Answer is required'],
    },
    status: {
        type: Boolean,
        default: 1,
    }, // 0- Inactive and 1- Active
    order: {
        type: Number,
        default: 0,
        min: [0, "Minimum value must be grater then 0"],
        max: [1000, "Maximum value must be less then 1000"],
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now(),
    },
    deleted_at: {
        type: Date,
        default: null,
    },

})

const faqModel = mongoose.model('faqs', faqSchema);

module.exports = faqModel;