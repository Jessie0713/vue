4. 方法:
  indexOf() | lastIndexOf()
  push(item)| pop()//新增刪除在後端
  unshift(item) | shift()//新增刪除在前端
  //新增刪除再任意處
  SecurityPolicyViol

JSON:陣列和物件的組合
(1) 陣列放進物件裡(就是物件)
    let temp = {屬性:[]};
    let friends = {
      CFD101 :[
        {name:"JESSIE",age:10},
        {name:"IVY",age:20},
        {name:"TINA",age:13},
      ]
    };

    friends                   -->物件(用點的方式)
    friends.CFD101            -->陣列[index]
    friends.CFD101[1]         -->物件
    friends.CFD101[1].name    -->JESSIE


(2)
let temp = [{},{},{}......]; //語法
let classmate = [
    {name:"JESSIE",age:10},
    {name:"IVY",age:20},
    {name:"TINA",age:13},
];
classmate           -->陣列
classmate[2]        -->物件
classmate[2].age    -->13

JSON字串一定要打雙引號,
4.將javaScript 物件或陣列轉成 JSON
JSON.stringify();
4.將json轉成 javaScript的物件或陣列
JSON.parse(`json黨`);//()裡面一定要有引號，單引號反引號皆可，不要雙引號



