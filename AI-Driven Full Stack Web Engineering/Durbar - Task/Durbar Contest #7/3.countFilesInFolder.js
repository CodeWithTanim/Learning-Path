function countFilesInFolder(structure) {
    let total = 0;

    for (const item of structure) {
        if (item.type === "file") {
            total += 1;
        } else if (item.type === "folder") {
            total += countFilesInFolder(item.children ?? []);
        }
    }

    return total;
}