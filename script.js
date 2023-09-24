let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function compareBands(a,b){
	var bandA = a.replace(/^The /, "");
	var bandB = b.replace(/^The /, "");
	if(bandA < bandB){
		return -1;
	}
	if(bandA > bandB){
		return 1;
	}
	return 0;
}
bandNames.sort(compareBands);
console.log(bandNames);
