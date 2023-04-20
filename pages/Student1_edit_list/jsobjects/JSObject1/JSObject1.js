export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
	},
	async myFun2 () {
		if (view_drug.selectedOptionLabel != ""){
			await get_drug_info.run();
			storeValue("drug_data", get_drug_info.data);
			showModal('Modal1');
		}
	}
}