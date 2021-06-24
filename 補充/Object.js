1. 建立物件 (自訂物件)
    [ex]
    let obj = {};
    let obj = new Object();

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
        // sayHello: function(){},
        sayHello(){
            console.log('Hello!');
        },
    };

2. 如何存取？

    呼叫: man.name
    結果: "Peter"
    ----------

    呼叫: man.favoriteColor[1]
    呼叫: man['favoriteColor'][1]   //物件的陣列表示法
    結果: "blue"
    ----------

    呼叫: man.car.make
    呼叫: man['car']['make']  //物件的陣列表示法
    結果: "BMW"
    ----------

    呼叫: man.sayHello()
    結果: Hello!

    for(let key in man){
        console.log(key);        //key
        console.log(man[key]);   //value
    }

3. 刪除物件的屬性
    delete man.retired;

