import express from 'express';
import { addMember, getMembers, getMember, editMember, deleteMember } from '../controller/member-controller.js'

const router = express.Router();

router.post('/add', addMember);
router.get('/all', getMembers);
router.get('/:id', getMember);
router.put('/:id', editMember);
router.delete('/:id', deleteMember);

export default router;