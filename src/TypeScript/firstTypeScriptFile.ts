import * as fs from 'fs';

fs.writeFileSync('helloSync', 'hello from writeFile');

console.log('wf sync exec');

fs.writeFile('hello', 'hello from writeFile',err => {
    if(err) throw err;
    console.log('file created');
});

console.log('wf exec');
