const { z } = require('zod')

const contactSchema = z.object({
    name: z.string().trim().min(3).max(30),
    email: z.string().trim().email(),
    message: z.string().trim().min(3).max(100),
})

module.exports = { contactSchema };