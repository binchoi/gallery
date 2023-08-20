import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const piecesDirectory = path.join(process.cwd(), "pieces");

export function getDescendingPiecesData() {
    const fileNames = fs.readdirSync(piecesDirectory);
    const allPiecesData = fileNames.map((fileName) => {
        const id = parseInt(fileName.replace(/\.md$/, ""));

        const fullPath = path.join(piecesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });

    return allPiecesData.sort((a, b) => {
        // order by numeric descending of id field

        if (a.id < b.id) {
            return 1;
        } else {
            return -1;
        }
    });
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

export async function getPieceData(id) {
    const fullPath = path.join(piecesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
