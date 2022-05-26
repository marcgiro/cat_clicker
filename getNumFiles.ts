import { promises as fs } from "fs";

const getNumFiles = (dir: string) => {
  fs.readdir(dir)
    .then((f: string[]) => f.length)
    .catch(() => {
      throw new Error("Unable to read the files");
    });
};


export default getNumFiles
