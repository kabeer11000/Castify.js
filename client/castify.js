const Castify = (() => {
	const registerCastDevice = async () => {
		return await fetch(endPoints.updateActiveDevices, {
			method: "POST",
			headers: new Headers({
				deviceid: localStorage.getItem(storageIndex.deviceEtag),
				userdata: atob(localStorage.getItem(storageIndex.userData)),
			}),
			body: serialize({
				deviceid: localStorage.getItem(storageIndex.deviceEtag),
				userdata: atob(localStorage.getItem(storageIndex.userData)),
			})
		})
	}




	const main = {
		registerCastDevice: registerCastDevice(),
		
	}
	return main
})();
