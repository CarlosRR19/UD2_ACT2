function separarNumeros(...args) {
  var miArray = new Array();

  for (var i = 0; i < args.length; i++) {
    if (!isNaN(parseInt(args[i]))) miArray += args[i];
  }

  console.log(miArray);
}

separarNumeros("hola", 66, "Fernando", "33333", 4444, 4);
