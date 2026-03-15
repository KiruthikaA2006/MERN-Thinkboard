import Note from "../models/Note.js";
export async function getallnotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error fetching notes", error);
        res.status(500).json({ message: "Error fetching notes", error });
    }
}

export async function getnoteById(req, res) {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.log("Error fetching note", error);
        res.status(500).json({ message: "Error fetching note", error });
    }
}

export async function createnote(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.log("Error creating note", error);
        res.status(500).json({ message: "Error creating note", error });
    }
}

export async function updatenote(req, res) {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        console.log("Error updating note", error);
        res.status(500).json({ message: "Error updating note", error });
    }
}

export async function deletenote(req, res) {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.log("Error deleting note", error);
        res.status(500).json({ message: "Error deleting note", error });
    }
}
