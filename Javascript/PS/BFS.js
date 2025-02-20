//bfs = queue, shift, FIFO(first in first out)

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, V] = input[0].split(' ').map(Number);
let graph = Array.from({ length: N + 1 }, () => []);

for(let i=1; i<=M; i++){
    let [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
graph.forEach(adj => adj.sort((a,b) => a-b)); //forEach는 2차원 배열이나 리스트인 경우 사용 

function BFS(start){
    let visited = []; //순서 저장 
    let queue = [start]; //FIFO
    let visitedSet = new Set();//중복방지
    
    while(queue.length){
        let node = queue.shift();
        
        if(!visitedSet.has(node)){ //아직 방문하지 않은 경우
            visited.push(node); //방문한 순서를 기록 
            visitedSet.add(node); //set에 추가, includes보다 빠름  
            queue.push(...graph[node]);// 현재 노드와 연결된 노드들을 큐에 추가
        }
    }
    return visited;
}

console.log(BFS(V).join(' '));
