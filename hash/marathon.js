/**
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

*마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
*completion의 길이는 participant의 길이보다 1 작습니다.
*참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
*참가자 중에는 동명이인이 있을 수 있습니다.

출처 : 프로그래머스
 **/

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < completion.length; i++) {
    if (map.get(completion[i]) == undefined) {
      map.set(completion[i], 1);
    } else {
      var parti = map.get(completion[i]);
      map.set(completion[i], parti + 1);
    }
  }
  for (let i = 0; i < participant.length; i++) {
    let part = map.get(participant[i]);
    if (part !== undefined && part > 0) {
      map.set(participant[i], part - 1);
    } else {
      return participant[i];
    }
  }
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);

// 완주자를 먼저 mapping해서 1씩 더해주고 참가자와 비교했을 때 undefined or 0 이면 return
