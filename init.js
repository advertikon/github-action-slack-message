import { exec } from 'child_process';

console.log('Start loading dependency');

exec('npm i --omit=dev', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Dependency is installed');
});
