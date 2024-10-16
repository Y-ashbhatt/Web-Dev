/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from '@inquirer/prompts';
import  qr  from "qr-image";
import fs  from "fs";
import { error } from 'console';

const urlLink = await input({ message: 'Type your URL:' });    

var qr_svg = qr.image(urlLink);
qr_svg.pipe(fs.createWriteStream('qr-img.png'));

fs.writeFile("wrl.txt", urlLink , (err)=>{
    if (err) throw err;
    console.log('The file has been saved!');
  }); 