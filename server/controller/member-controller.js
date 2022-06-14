import Member from '../schema/member-schema.js';

export const addMember = async (request, response) => {
    const member = request.body;
    const newMember = new Member(member);

    try {
        await newMember.save();
        response.status(201).json(newMember);
    }
    catch (error) {
        response.status(409).json({ message: error.message });
    }
}

export const getMembers = async (request, response) => {
    try {
        const members = await Member.find({});
        response.status(200).json(members);
    }
    catch (error) {
        response.status(404).json({ message: error.message });
    }
}

export const getMember = async (request, response) => {
    try {
        const member = await Member.find({_id: request.params.id});
        response.status(200).json(member);
    }
    catch (error) {
        response.status(404).json({ message: error.message });
    }
}

export const editMember = async (request, response) => {
    let member = request.body;
    const editMember = new Member(member);

    try {
        const member = await Member.updateOne({_id: request.params.id}, editMember);
        response.status(201).json(editMember);
    }
    catch (error) {
        response.status(409).json({ message: error.message });
    }
}

export const deleteMember = async (request, response) => {
    try {
        const member = await Member.deleteOne({_id: request.params.id});
        response.status(201).json(editMember);
    }
    catch (error) {
        response.status(409).json({ message: error.message });
    }
}