kim = {name: 'kim'};
lee = {name: 'Lee'};
function hi() {
    console.log('hi, ' + this.name);
}
// hi.call(kim);
// hi.call(lee);
hi.bind(kim);
var KimsHi = hi.bind(kim);
