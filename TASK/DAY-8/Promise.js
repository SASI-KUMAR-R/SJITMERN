const likecode = async() => {
    return new Promise((reject) => {
        reject("POSTED REJECTED SUCCESS")
    });
}

const sharecode = async() => {
    return new Promise((reject) => {
        reject("SHARED REJECTED")
    });
}


const postcode = async() => {
    var post = new Promise((resolve) => {
        setTimeout(() => {
            resolve("POSTED SUCCESS")
        }, 1000);
    });
    console.log(await post);
    console.log(await likecode().catch(err => console.log(err)));
    console.log(await sharecode().catch(err => console.log(err)));
}
postcode()


const summa = Promise.reject("THIS IS TEST")

summa.catch((err) => {
    console.log(err);
})