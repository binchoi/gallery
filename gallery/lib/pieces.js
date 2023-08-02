import fs from "fs";
import path from "path";
import matter from "gray-matter";

const piecesDirectory = path.join(process.cwd(), "pieces");

export function getDescendingPiecesData() {
    const fileNames = fs.readdirSync(piecesDirectory);
    const allPiecesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(piecesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });

    // return allPiecesData.sort((a, b) => {
    //     if (a < b) {
    //         return 1;
    //     } else {
    //         return -1;
    //     }
    // });
    const mylist = allPiecesData.sort((a, b) => {
        if (a < b) {
            return 1;
        } else {
            return -1;
        }
    });
    const duplicatedList = mylist.flatMap((element) => Array(12).fill(element));
    return duplicatedList;
}

export function getAllPieceIds() {
    const fileNames = fs.readdirSync(piecesDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}
