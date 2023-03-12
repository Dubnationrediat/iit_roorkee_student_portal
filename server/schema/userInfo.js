import connectionInfo from '../server.js'
let userInfo =`CREATE TABLE if not exists userInfo(
    userInfo_ID int auto_increment,
    user_first_name varchar(255) not null,
    user_last_name varchar(255) not null,
    user_email varchar(255) not null,
    user_whatsapp_number varchar(255) not null,
    user_Indian_number varchar(255) not null,
    user_nationality text not null,
    user_password varchar(255) not null,
    user_role varchar(255),
    PRIMARY KEY (userInfo_ID)
    )`
let notificationTable = `CREATE TABLE if not exists notifications(
    notification_id int auto_increment,
    userInfo_ID int,
    user_notification_message text not null,
    date_of_notification int not null,
    PRIMARY KEY (notification_id),
    FOREIGN KEY(userInfo_ID) REFERENCES userInfo (userInfo_ID)
    )`

let buyOrSellTable =`CREATE TABLE if not exists market(
    item_id int auto_increment,
    userInfo_ID int,
    item_name text not null,
    item_price int not null,
    item_description text not null,
    item_photo varchar(255) not null,
    status_check boolean not null,
    date_of_notification int not null,
    PRIMARY KEY (item_id),
    FOREIGN KEY(userInfo_ID) REFERENCES userInfo (userInfo_ID)
    )`
let educationalDocument = `CREATE TABLE if not exists educationalDocument(
    Document_id int auto_increment,
    userInfo_ID int,
    Section text not null,
    Department text not null,
    Document_type text not null,
    Document_status boolean not null,
    Course_name text not null,
    Course_given_by TEXT not null,
    Document text not null,
    PRIMARY KEY (Document_id),
    FOREIGN KEY(userInfo_ID) REFERENCES userInfo (userInfo_ID)
    )`

    let tableCreator = (req,res)=>{
        connectionInfo.query(userInfo,(err)=>{
            if(err){
                console.log(err)
            }
        })
        connectionInfo.query(notificationTable,(err)=>{
            if(err){
                console.log(err)
            }
        })
        connectionInfo.query(buyOrSellTable,(err)=>{
            if(err){
                console.log(err)
            }
        })
        connectionInfo.query(educationalDocument,(err)=>{
            if(err){
                console.log(err)
            }
        })
        res.send("all tables created")
    }
    
    export default tableCreator