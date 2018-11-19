
function printInventory(inputs){
	var str = '***<没钱赚商店>购物清单***\n';
	
	var allitem = [];
	
	
	for (var i = 0 ; i<inputs.length;i++){
		var occured = false;
		for (var j = 0; j < allitem.length ; j++){
			if(inputs[i].name === allitem[j].name){
				occured = true;
				allitem[j].count = (parseInt(allitem[j].count)) + 1;
				break;
			}
		}
		if (occured === false){
			var data = {name:inputs[i].name, unit:inputs[i].unit, count:1, price:inputs[i].price};
			allitem.push(data);
		}
	}
	
	
	
	var total = 0;

	for (var c = 0 ; c < allitem.length ; c ++){
	    var sum = ((parseInt(allitem[c].unit))*(parseInt(allitem[c].price)));
		str = str + ("名称："+allitem[c].name+"，数量："+allitem[c].count+allitem[c].unit+"，单价："+allitem[c].price+".00(元)，小计："+sum+"(元)\n");
		total = total + sum;
	}
	
	str = str+('----------------------\n');
	str = str + ('总计：'+total+'.00(元)\n');
	str = str + ('**********************');
	
	
	return str;
};

module.exports = {
    printInventory
}
