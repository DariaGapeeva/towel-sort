// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    return matrix.reduce((result, item) => {
        if (matrix.indexOf(item) % 2 === 1) {
            item.reverse();
        }

        return result.concat(item);
    });
};
