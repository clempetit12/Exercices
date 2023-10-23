import {mkdir, stat, writeFile} from "fs"
import fs from 'fs'
import LineByLine from 'n-readlines';

let file = "test.txt"

let line;
let reader = new LineByLine(file);

while (line = reader.next()) {
    let directory =line.toString().trim()
    try {
        const createDir = await mkdir(directory, { recursive: true });
        console.log(`created ${createDir}`);
    } catch (err) {
  console.error(err.message);
}
}














