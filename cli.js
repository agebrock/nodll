#!/usr/bin/env node
const globby = require('./lib/globby.js').globbyStream;
const path = require('path');
const dotnet = require('node-api-dotnet');

const args = process.argv.slice(2);
if(!args[0]){
    console.log('Usage: nodll **/**');
    process.exit(1);
}
let p = args[0];
let failed = [];
let loaded = [];
globby(`${p}.dll`).on('data', (file) => {
    
    let dll = path.resolve(path.join(process.cwd(),file));
    try{
        dotnet.load(dll);
        loaded.push(file);
        console.log('OK:',file);
    }catch(e){
        console.log('KO:',file);
        failed.push(file);
    }
}).on('end', () => {
    console.log('failed:',failed.length);
    console.log('loaded:',loaded.length);
    console.log('---------------------');
    console.log('start with "dotnet TAB" to see available methods');
    if(loaded.length == 0){
        console.log('No files loaded');
        process.exit(1);
    }
    const repl = require('repl');
    repl.start({
        prompt: '# '
    }).context.dotnet = dotnet;
});