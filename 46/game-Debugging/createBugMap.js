/*
* 2차원 배열 형태의 버그 지도 만들기 
*/

let time = 60 * 60 * 1000;  //ms

let bug = 9;
let rowCnt = 9;
let colCnt = 9;
let cellCnt = rowCnt * colCnt
let bugPosition = [];

// setBugMap
let setBugMap = function(map, row, col){
    let temp = [1, 0 , -1];
    for(let i of temp){
        for(let j of temp){
            try {
                // not null을 조건에 추가한 이유 : 처음 지정한 크기의 배열을 벗어났을 때, 배열의 공간을 넓히고 값을 추가해버려서 대응
                if(map[row+i][col-j] != "B" && map[row+i][col-j] != null){
                    map[row+i][col-j] += 1;
                }
            } catch (error) {}
        }
    }
    return map;
}

// 버그 위치 만들기
while(bugPosition.length != bug){ 
    // 버그 위치가 버그 개수랑 같아지면 반복문 종료
    // num = 임시 위치 
    let num = Math.round(Math.random()*(cellCnt-1)); 
    if(bugPosition.indexOf(num) == -1){
        bugPosition.push(num);
    }
}

bugPosition.sort((a, b) => a-b);    // 정렬

// 2차원 버그지도 만들기
//// 1. 비어있는 지도 만들기 
let bugMap = Array.from(Array(rowCnt), () => Array(colCnt).fill(0));

// 2. 버그 넣기 + 주변에 버그 개수 넣기
bugPosition.forEach(function(idx){
    try{
        let row = Math.floor(idx/rowCnt); // round는 오류 발생 rowCnt와 같아지는 경우가 생겨서 floor로 변경
        let col = idx%rowCnt;
        bugMap[row][col] = "B";
        bugMap = setBugMap(bugMap, row, col);
    }catch(error){}
});

//// 3. 버그맵 확인(출력해보기)
for(let i = 0; i < rowCnt; i++){
    let temp = "";
    for(let j = 0; j <colCnt; j++){
        temp += bugMap[i][j] + "\t";
    }
    console.log(temp);
}

console.log(bugPosition);

//// 4. 1차원 배열로 변환
let bugMapArr = [];
for(let map of bugMap){
    bugMapArr = [ ...bugMapArr, ...map ];
}

export function getBugMap() {
    return bugMap;
}
export function getBugPosition() {
    return bugPosition;
}
