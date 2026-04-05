const set = new Set([2, 1, 3]);

set.add(4);
set.add(4);


console.log(set.has(4));
console.log(set.size);
set.delete(3);

for (const element of set) {
    console.log(element);
}
set.clear();

for (const element of set) {
    console.log(element);
}