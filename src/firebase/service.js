import {db} from "./config"

const saveChat= async(user,ratingStar,comment)=>{
    await db.collection("chat").add({
        userName:user,
        ratingStar:ratingStar,
        comment:comment,
        date:Date.now()
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

const getChat= (getDataSuccess)=>{
    db.collection("chat")
    .orderBy("date", "desc")
    .onSnapshot((doc) => {
        let temp = []
         doc.forEach((data)=>{
            temp.push(data.data())
         })
        getDataSuccess(temp)
    });
}



export default {saveChat,getChat}