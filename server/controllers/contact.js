import ContactMessage from "../models/contactMessage.js";

export const createMessageSubmission = async (request, response) => {
    const contact = request.body;

    const newContact = new ContactMessage(contact);

    try {
        await newContact.save();

        response.status(201).json(newContact);
    } catch (error) {
        response.status(409).json({
            message: error.message
        })
    }
}