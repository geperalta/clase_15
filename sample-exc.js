const {exec} = require ("child_process");

const command = "git branch";
const handle = (err, stdout, stderr) => {
    console.log(stdout)
};

exec(command,handle)

/*
//version 02
exec("git branch", (err,stdout, stderr) => {
    console.log(stdout);
});

//version 03
exec("git branch", function (err,stdout, stderr) {
    console.log(stdout);
});
*/