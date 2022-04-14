export const truncateFilename = (filename) => {
    if (filename.length > 8) {
        return filename.slice(0, 8) + '...';
    }

    return filename;
};