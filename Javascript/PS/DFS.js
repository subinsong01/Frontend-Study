//stack, pop, LIFO(Last in first out)

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, V] = input[0].split(' ').map(Number);
let graph = Array.from({ length: N + 1 }, () => []);

for(let i=1; i<=M; i++){
    let [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

graph.forEach(adj => adj.sort((a,b) => a-b));
//forEach는 2차원 배열이나 리스트인 경우 사용 

function DFS(start){
  let visited = [];
  let stack = [start];
  let visitedSet = new Set();

  while(stack.length){
    let node = stack.pop();
    let stack = [start];
    let visitedSet = new Set();

    while(stack.length){
      let node = stack.pop();
      if(!visitedSet.has(node)){
        visited.push(node);
        visitedSet.add(node);
        stack.push(...graph[node].slice().reverse());
      }
    }
    return visited;
  }

console.log(DFS(V).join(' '));
