import fs from 'fs';
import { Binary } from 'bson';

// import image from '../assets/images/incidencia1.png';

const imageData = fs.readFileSync('../assets/images/community1.jpeg');
const base64Data = Buffer.from(imageData).toString('base64');

console.log(base64Data);