import { exec } from 'child_process';

exec('npm i --omit=dev', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Dependency is installed');
});
