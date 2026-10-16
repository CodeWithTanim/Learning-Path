function chunkArray(arr, size) {
    // TODO: Return an array of chunks of length `size`
    const chunks = [];

    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }

    return chunks;
}