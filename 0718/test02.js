// 배열의 길이 구하기
const ship = {
    max : 4,
    passengers : [],
    onBoard : function(name){
        if(this.passengers.length === 4){
            console.log(`This ship full. ${name} can not board this ship.` );
        }else{
            this.passengers.push(name);
            console.log(`${name} board`);

        }
    }
}

ship.onBoard('chloe');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');
console.log(ship.passengers);