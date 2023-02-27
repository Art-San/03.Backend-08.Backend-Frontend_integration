const {Schema, model} = require('mongoose')

const shema = new Schema({
    content: { type: String, required: true },
    
    pageId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    
}, {
    timestamps: { createdAt: 'created_at'}
})

module.exports = model('Comment', shema)

