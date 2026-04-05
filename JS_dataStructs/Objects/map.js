const mapa = new Map([["a", 1], ["b", 2]]);

mapa.set("c", 3);
console.log(mapa.size);
mapa.delete("c");
for (const [key, value] of mapa) {
    console.log(key);
    console.log(value);
}
console.log(mapa.has("c"));
mapa.clear();
for (const [key, value] of mapa) {
    console.log(key);
    console.log(value);
}