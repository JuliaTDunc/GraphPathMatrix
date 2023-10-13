function findNeighbors(node, matrix) {
    let neighbors = [];
    const mLength = matrix.length-1;
    let subArrLength = matrix[1].length-1;
    // Up
    if(node[0]) {
        let row = node[0] - 1;
        let index = node[1];
        neighbors.push([row,index])
    }
    // Down
    if(node[0] < mLength) {
        let row = node[0] + 1;
        let index = node[1];
        neighbors.push([row,index])
    }
    // Left
    if(node[1]) {
        let row = node[0];
        let index = node[1] - 1;
        neighbors.push([row, index]);
    }
    // Right
    if(node[1] < subArrLength) {
        let row = node[0];
        let index = node[1] + 1;
        neighbors.push([row, index]);
    }
    return neighbors;
}


function bfsPath(matrix, startNode, endValue) { 
    if(matrix[startNode[0],startNode[1]] = endValue) {
        return startNode;
    }
    let queue = [startNode];
    let res = [];
    let visited = new Set();
    visited.add(`${startNode}`);
    while(queue.length > 0){
        let currNode = queue.shift();
        let [currRow, currCol] = currNode;
        res.push(currNode);
        let currNeighbors = findNeighbors(currNode, matrix);
        if(matrix[currRow][currCol] === endValue) {
            console.log(res);
            return res;
        }
        for(let neighbor of currNeighbors) {
            if(!visited.has(`${neighbor}`)) {
                visited.add(`${neighbor}`)
                queue.push(neighbor);
            }
        }
    }
    return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [ 
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes 
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value 
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/
const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
module.exports = [findNeighbors, bfsPath];