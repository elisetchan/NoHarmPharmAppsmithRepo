export default {
	async myFun2 () {
		storeValue("current_drug", encodeURIComponent(List1.triggeredItem.MName))
		await get_indication.run()
		showModal('Modal1')
	}
}