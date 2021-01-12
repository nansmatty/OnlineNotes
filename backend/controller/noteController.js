import asyncHandler from 'express-async-handler';
import Note from '../models/notesModel.js';

// @desc Create a note
// @route POST /api/notes/
// @access Private

export const createNotes = asyncHandler(async (req, res) => {
  const note = new Note({
    user: req.user._id,
    note: req.body.note,
  });

  if (note) {
    const createdNote = await note.save();
    res.status(201).json(createdNote);
  } else {
    res.status(404);
    throw new Error('Note not found');
  }
});

// @desc Get notes
// @route GET /api/notes/
// @access Private

export const getNotes = asyncHandler(async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(404);
    throw new Error('Note not found');
  }
});

// @desc Delete a note
// @route Delete /api/notes/:id
// @access Private

export const deleteNotes = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note) {
    await note.remove();
    res.json({ message: 'Note removed' });
  } else {
    res.status(404);
    throw new Error('Note not found');
  }
});
