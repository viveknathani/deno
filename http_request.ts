const url = Deno.args[0];
const result = await fetch(url);
console.log(result);


