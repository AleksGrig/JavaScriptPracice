#!/usr/bin/env node
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

// Method #2 lstat with Promise
// const util = require('util');
// const lstat = util.promisify(fs.lstat);

// Method #3 lstat with Promise
const lstat = fs.promises.lstat; // const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
    // Either err === error object, or err === null if everything is ok
    if(err) {
        // error handling code here
        console.log(err);
    }

    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir, filename));
    });

    const allStats = await Promise.all(statPromises);

    allStats.forEach((stats, index) => {
        if(stats.isFile()) {
            console.log(filenames[index]);
        } else {
            console.log(chalk.green(filenames[index]));
        }
    });
});

    // for(let stats of allStats) {
    //     const index = allStats.indexOf(stats);

    //     if(stats.isFile()) {
    //         console.log(filenames[index]);
    //     } else {
    //         console.log(chalk.green(filenames[index]));
    //     }
    // }


// Method #1 lstat with Promise
// const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//             if(err) {
//                 reject(err);
//             }

//             resolve(stats);
//         });
//     });
// 