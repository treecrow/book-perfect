const geohash = require('node-geohash');

console.log(geohash.encode(37.8324, 112.5584));
console.log(geohash.encode(37.83238649368286,112.55838632583618));
// prints ww8p1r4t8
var latlon = geohash.decode('ww8p1r4t8');
console.log(latlon.latitude);
console.log(latlon.longitude);
