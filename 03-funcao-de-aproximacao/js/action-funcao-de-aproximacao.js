function derivada(n) {
	return n * (1 - n);
}

function executar(){
	$('#linhas').html('');

	var input = $('#entrada').val();
	var target = $('#busca').val();
	var weight = Math.random();
	var epochs = $('#epocas').val();

	var lines = '';

	for(let i=0; i<=epochs; i++){
		var output = Math.tanh(input * weight);
		var error = target - output;
		weight += input * derivada(error);

		lines += 
		"<tr>" + 
			"<td>" + i + "</td>" + 
			"<td>" + zeros(Math.abs(error.toFixed(4))) + "</td>" + 
			"<td>" + output.toFixed(8) + "</td>" + 
		"</tr>"

		//corta a execucao quando a saida for igual a busca
		if(corte(parseFloat(output), parseFloat(target))){
			i = parseInt(epochs)+1;
		}
	}

	$('#linhas').html(lines);

	$('#desc_entrada').text('entrada: ' + input);
	$('#desc_busca').text('busca: ' + target);
	$('#desc_epocas').text('epocas: ' + epochs);

}
// funcao de corte
function corte(a, b){
	if(a.toFixed(2) == b.toFixed(2)){
		return true;
	} else {
		return false;
	}
}


function zeros(n) {
	if(n == 0) {
		return '0.0000';
	}else {
		var str = n.toString().trim();
		var length = str.length;
		var dif = 6 - length;
		if(dif > 0) {
			for(let i=0; i<dif; i++) {
				str += '0';
			}
		}
		n = str;
		return n;
	}
}