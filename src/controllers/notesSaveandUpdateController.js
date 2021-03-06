/* eslint-disable import/extensions */
import NotesService from '../services/notesSave.service.js';

const noteSave = {
  save: async (req, res) => {
    const { data: notesDTO } = req.body;
    const notes = await NotesService.saveUserNotes(notesDTO);
    res.send(notes);
  },

  update: async (req, res) => {
    const { data: noteDTO } = req.body;
    const update = await NotesService.updateUserNotes(noteDTO);
    res.send(update);
  },
};

export default noteSave;
