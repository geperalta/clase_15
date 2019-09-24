//console.log(process)

//memoria
console.log("MEMORIA")
console.log(process.memoryUsage());

//directorio de ejecucion
console.log("DIRECTORIO DE EJECUCION")
console.log(`Current directory: ${process.cwd()}`);

//variable de entorno
console.log("VARIABLE DE ENTORNO")
console.log(process.allowedNodeEnvironmentFlags);

//cpu utilizado
console.log("CPU UTILIZADO")
console.log(process.cpuUsage());