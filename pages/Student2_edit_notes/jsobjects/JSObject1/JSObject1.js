export default {
	async refreshNotes () {
		await get_notes.run();
		storeValue("notes", get_notes.data)
	}
}