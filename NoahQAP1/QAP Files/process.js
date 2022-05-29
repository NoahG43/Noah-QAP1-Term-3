// the process module allows you to pass any arguments to it and have them display at runtime
// to do this type the filename and then your arguments
// ex: node process.js coffee shed

const [firstArg, secondArg, thirdArg, forthArg] = process.argv;
console.log(process.argv);
console.log(`FIRST :` + firstArg);
console.log(`SECOND :` + secondArg);
console.log(`The final two args are: ${thirdArg} ${forthArg}`);
