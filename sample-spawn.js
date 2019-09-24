//codigo de Isra
const { spawn } = require('child_process');
const result = spawn('git', ['branch']);
// opcion resumida
const callback = (data) => {
    console.log(`stdout: ${data}`);
};
// callback = ^
 result.stdout.on('data', callback);
 
 /*
 //02 opcion c/ arrow
 result.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
 }); 
//03 opcion detallada
result.stdout.on('data', function(data) {
    console.log(`stdout: ${data}`);
});
*/

