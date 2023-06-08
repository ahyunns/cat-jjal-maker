fetch('https://cataas.com/cat?json=true')
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    console.log(JSON.stringify(myJson));
});
/* {"tags":[],"createdAt":"2021-04-04T18:20:05.283Z","updatedAt":"2022-10-11T07:52:32.513Z","validated":true,"owner":"null","file":"606a03559d91f800182ef765.jpeg","mimetype":"image/jpeg","size":331705,"_id":"IgtTZEywlLir6neI","url":"/cat/IgtTZEywlLir6neI"}
 */


/*
    https://cataas.com/#/ 이 주소를
    https://cataas.com/cat/IgtTZEywlLir6neI 치면 됌
*/