JSON (JavaScript Object Notation)

1. 建立 Array(陣列)  -- 參考 Array.js
    let arr = [];
    let arr = new Array();

    let arr = [2,4,6,false,new Date(),'ABC'];
    let arr = new Array(2,4,6,false,new Date(),'ABC');

    如何存取？
    arr[2] ---> 6
    arr[3] ---> false

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }

    for(let i in arr){
        console.log(arr[i]);   //2,4,6,false,new Date(),'ABC'
        console.log(i);        //0,1,2,3...
    }

2. 建立物件 (自訂物件)
    let obj = {};
    let obj = new Object();
    (1).
        let obj = {};
        obj.name = 'Peter';
        obj.age = 40;
        obj.gender = 'male';
    (2).
        let obj = {
            name: 'Peter',
            age: 40,
            gender: 'male',
            smile(){},
        };

    如何存取？ 參考 Object.js
    
3. JSON: 陣列和物件的組合
    (1). 陣列放進物件裡
        語法: let temp = {屬性: []};
        let friends = {
            CED101: [
                {name: 'Andy', age: 20},
                {name: 'Brian', age: 23},
                {name: 'Carl', age: 27},
                {name: 'Denny', age: 21},
                {name: 'Eddie', age: 18},
            ],
        };

        friends                 ---> 物件
        friends.CED101          ---> 陣列
        friends.CED101[1]       ---> 物件
        friends.CED101[1].name  ---> Brian

        JSON 格式:
        {
            "CED101":[
               {
                  "name":"Andy",
                  "age":20
               },
               {
                  "name":"Brian",
                  "age":23
               },
               {
                  "name":"Carl",
                  "age":27
               },
               {
                  "name":"Denny",
                  "age":21
               },
               {
                  "name":"Eddie",
                  "age":18
               }
            ]
         }

    (2). 物件放進陣列裡
        語法: let temp = [{},{},{},....];
        let classmate = [
            {name: 'Andy', age: 20},
            {name: 'Brian', age: 23},
            {name: 'Carl', age: 27},
            {name: 'Denny', age: 21},
            {name: 'Eddie', age: 18},
        ];

        classmate           ---> 陣列
        classmate[3]        ---> 物件
        classmate[3].age    ---> 21

        JSON 格式:
        [
            {
            "name":"Andy",
            "age":20
            },
            {
            "name":"Brian",
            "age":23
            },
            {
            "name":"Carl",
            "age":27
            },
            {
            "name":"Denny",
            "age":21
            },
            {
            "name":"Eddie",
            "age":18
            }
        ]

4. 將 JavaScript 物件(或陣列)轉成 JSON
    JSON.stringify();

    [ex]
    let man = {
        name: 'Peter',
        age: 40,
        gender: 'male',
        favoriteColor: ['black','blue','gray'],
        car: {
            make: 'BMW',
            mode: 'X5',
            year: 2020,
        },
        retired: false,
        sayHello(){
            console.log('Hello!');
        },
    };
    
    執行: console.log(JSON.stringify(man));
    結果: {"name":"Peter","age":40,"gender":"male","favoriteColor":["black","blue","gray"],"car":{"make":"BMW","mode":"X5","year":2020},"retired":false}


5. 將 JSON (放在單引號或反引號裡) 轉成 JavaScript 的物件或陣列
    JSON.parse();

    執行: JSON.parse(`{"name":"Peter","age":40,"gender":"male","favoriteColor":["black","blue","gray"],"car":{"make":"BMW","mode":"X5","year":2020},"retired":false}`);
    結果: {name: "Peter", age: 40, gender: "male", favoriteColor: Array(3), car: {…}, …}