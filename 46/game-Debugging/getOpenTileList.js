/*
* 버그 지도를 여는 규칙 정하기 
*/


// checkBox
function checkBox(selectedIndex, clickedIndex, bugMap){
    // if(selectedIndex == 0) return clickedIndex;
    let checkAround = [1, 0 , -1];

    // index를 2차원 좌표로 수정
    let row = Math.floor(selectedIndex / 9);
    let col = selectedIndex % 9;

    for(let i of checkAround){
        for(let j of checkAround){
            try {
                let idx = (row+i)*9 + (col+j);
                if(bugMap[row+i][col+j] != undefined && bugMap[row+i][col+j] != 'B'){
                    if(!clickedIndex.includes(idx)){
                        clickedIndex.push(idx);
                        if(bugMap[row+i][col+j] == 0){
                            clickedIndex = checkBox(idx, clickedIndex, bugMap);
                        }
                    }
                }
            } catch (error) {}
        }
    }
    return clickedIndex;
}

export function getOpenTileList(selectedIndex, bugMap) {
    let clickedIndex = checkBox(selectedIndex, [], bugMap);
    return clickedIndex.sort((a,b)=>a-b);
}

