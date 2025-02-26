/*
function promiseEg(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value) resolve("The promise is resolved");
        else reject("The promise is rejected due to some");
      }, 1000);
    });
  }
  promiseEg(0)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
*/

/*
function abc(){
    return new Promise((resolve, reject) => {
        resolve("SAI")
    });
}
console.log(abc());
*/
//-----------------------------------------------------------------------------
// Location Finderˍ
// 1.Promise(LocFound,LocNot)
// 2.chennai,2000
/*
function location(loc, time) {
    var locate = new Promise((LocFound, LocNot) => {
        setTimeout(() => {
            if (islocfound(loc, time)) {
                LocFound("CHENNAI");
            } else {
                LocNot("NOT CHENNAI");
            }
        }, time);
    });

    locate
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        });
}

islocfound = (loc, time) => {
    l = "CHENNAI";
    time1 = 2000;
    if (loc === l && time1 <= time) {
        return true;
    }
    return false;
};

location("CHENNAI", 1000);
*/
//-----------------------------------------------------------------------------

