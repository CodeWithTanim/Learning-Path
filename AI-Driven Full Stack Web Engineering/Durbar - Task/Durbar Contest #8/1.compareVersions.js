function compareVersions(version1, version2) {
    const a = version1.split(".").map(Number);
    const b = version2.split(".").map(Number);
    const len = Math.max(a.length, b.length);

    for (let i = 0; i < len; i++) {
        const x = a[i] || 0;
        const y = b[i] || 0;
        if (x > y) return 1;
        if (x < y) return -1;
    }

    return 0;
}