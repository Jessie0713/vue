1. 建立 Array(陣列) 物件 
    [ex]
    let arr = [];
    let arr = new Array();

    let arr = [2,4,6,false,new Date(),'ABC'];
    let arr = new Array(2,4,6,false,new Date(),'ABC');

2. 如何存取？
    arr[2] ---> 6
    arr[3] ---> false

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }

    for(let i in arr){
        console.log(arr[i]);   //2,4,6,false,new Date(),'ABC'
        console.log(i);        //0,1,2,3...
    }

3. 屬性: length

4. 方法: 
    indexOf() | lastIndexOf()
    push(item) | pop()      // 新增刪除在後端
    unshift(item) | shift() // 新增刪除在前端
    // 新增刪除在任意處
    splice(index)           //刪除
    splice(index, 刪除的筆數) //刪除
    splice(index, 刪除的筆數, 新增1, 新增2, 新增3,...) //也可以新增
    join()
    sort()
    reverse()
    filter()
    map()
    reduce()
    .....

    字串切割成陣列 (使用字串的方法)
        某字串.split('')
    陣列組合成字串 (使用陣列的方法)
        某陣列.join(' - ')

5. 刪除陣列元素
    delete arr[2]


