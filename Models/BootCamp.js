const mongoose = require('mongoose');
const chalk = require('chalk');
const slugify = require('slugify');

const BootCampSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: [50, 'Please add only 50 character name.'],
        unique: true,
        required: [true, 'Please Add Name']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add description.'],
        maxlength: [500, 'description Should be less then 500'],

    },
    website: {
        type: String,
        match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please add valid URL with http or https'
        ]
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            //required: true
        },
        coordinates: {
            type: [String],
            //required: true,
            index: '2dsphere',
        },
        formattedAddress: String,
        street: String,
        city: String,
        zipCode: String,
        country: String,
    },
    careers: {
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be atleast 1.'],
        max: [10, 'Rating must cannt be greater than 10']
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpeg',

    },
    housing: {
        type: Boolean,
        default: false,
    },
    jobAssistance: {
        type: Boolean,
        default: false,

    },
    jobGuarantee: {
        type: Boolean,
        default: false,
    },
    acceptGi: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

BootCampSchema.pre('save',function(next){
    console.log(chalk.blue(this.name))
    this.slug= slugify(this.name, {lower:true})
    next()
})

module.exports = mongoose.model('BootCamp', BootCampSchema);