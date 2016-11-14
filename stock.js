var stock = {

	'atun' : 10,
	'tomates': 2,
	'vinagre': 4,
	'caramelos': 5
};

var platillos = [{'tomates':23, 'caramelos':20}, {'atun': 15, 'vinagre':12, 'caramelos': 23}];

function cuanto_comprar (stock, platillos) {


	var falta = {};
	var rest = {};

	for (var i = 0 ; i < (platillos.length); i++) {


		for ( ingrediente in platillos[i]) {

		
				if (falta[ingrediente]) {
				falta[ingrediente] += platillos[i][ingrediente];

			} else {

					falta[ingrediente] = platillos[i][ingrediente];
						}
			}
	}

	

	for (var ingrediente in  falta) {

		if (stock[ingrediente]) {

		rest[ingrediente] = falta[ingrediente] - stock[ingrediente];

	} else {

		rest[ingrediente] = falta[ingrediente];
	}
	}

	return rest;
}

cuanto_comprar(stock, platillos);