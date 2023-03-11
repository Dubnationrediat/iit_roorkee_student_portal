import bcrypt from 'bcrypt';
import connectionInfo from '../server.js';
let registerController = async (req,res)=>{
  const {user_first_name,user_last_name,user_email,user_whatsapp_number,user_Indian_number,user_nationality,user_password} = req.body;
  try {
    let verifiedInfo ={
        verified_user_first_name:"",
        verified_user_last_name:"",
        verified_user_email:"",
        verified_user_whatsapp_number:"",
        verified_user_Indian_number:"",
        verified_user_nationality:"",
        verified_user_password:"",
        verified_user_role:0
    }
    // user input triming to avoid spaces
     let trimed_user_first_name=user_first_name.toLowerCase().trim().replace(/\s/g,"")
     let trimed_user_last_name=user_last_name.toLowerCase().trim().replace(/\s/g,"")
     let trimed_user_email=user_email.toLowerCase().trim().replace(/\s/g,"")
     let trimed_user_whatsapp_number=user_whatsapp_number.toString().trim().replace(/\s/g,"")
     let trimed_user_Indian_number=user_Indian_number.toString().trim().replace(/\s/g,"")
     let trimed_user_nationality=user_nationality.toLowerCase().trim().replace(/\s/g,"")
     let trimed_user_password=user_password
    //!  validators 

    //! nameValidator = name should have only text character
    let nameValidator = /^[A-Za-z\\s]+$/  

     //! passwordValidatior is for password to  have  at list 8 characters, one upper case, one lower case, one number, and one special character. 
    let passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ 

    //! emailValidator is for email to have email characters
    let emailValidator = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    //! numberOnly is for chacking the phone number to be number only
    let phoneNumberValidator = /^[0-9]*$/
    //! validation
    if(trimed_user_first_name ==="" || trimed_user_last_name===""|| trimed_user_email===""||trimed_user_whatsapp_number===""||trimed_user_Indian_number===""|| trimed_user_nationality===""||trimed_user_password===""){
        res.send('All Input Fields are Required To Be Filled')
    }else {
        if(!nameValidator.test(trimed_user_first_name) || !nameValidator.test(trimed_user_last_name) || !nameValidator.test(trimed_user_nationality)){
            res.send(`Name should only contain Alphabets`)
           }else{
             verifiedInfo ={
                ...verifiedInfo,
                verified_user_first_name : trimed_user_first_name,
                verified_user_last_name : trimed_user_last_name,
                verified_user_nationality : trimed_user_nationality
             }
             if(!emailValidator.test(trimed_user_email)){
                res.send('Invalid email')
             }else{
                 verifiedInfo={
                    ...verifiedInfo,
                    verified_user_email : trimed_user_email
                 }
                 if(!phoneNumberValidator.test(trimed_user_Indian_number) ||!phoneNumberValidator.test(trimed_user_whatsapp_number) ){
                    res.send('Phone Number Should Only Contain Numbers')
                 }else{
                    verifiedInfo={
                        ...verifiedInfo,
                         verified_user_Indian_number : trimed_user_Indian_number,
                         verified_user_whatsapp_number : trimed_user_whatsapp_number
                     }
                     if(!passwordValidator.test(trimed_user_password)){
                       res.send('password should have at list 8 character,one upper case, one lower case, one number and one special character')
                     }else{
                        let salt = await bcrypt.genSalt()
                        let hash_password = await bcrypt.hash(trimed_user_password,salt)
                        verifiedInfo={
                            ...verifiedInfo,
                             verified_user_password : hash_password
                         }
                     }
                 }
             }
        
           }
        
            let userInfo = `INSERT INTO userInfo (user_first_name,user_last_name,user_email,user_whatsapp_number,user_Indian_number,user_nationality,user_password,user_role) VALUES (?) `
            let Value = [verifiedInfo.verified_user_first_name,
                verifiedInfo.verified_user_last_name,
                verifiedInfo.verified_user_email,
                verifiedInfo.verified_user_whatsapp_number,
                verifiedInfo.verified_user_Indian_number,
                verifiedInfo.verified_user_nationality,
                verifiedInfo.verified_user_password,
                verifiedInfo.verified_user_role]
            connectionInfo.query(userInfo,[Value],(err,data,field)=>{
                if(err){
                    console.log(err)
                }else{
                    res.send({
                        successMessage : "Welcome Aboard!! You Can login By clicking Button Below",
                        redirect: '/login'
                    })
                }
            })

    }
    
  } catch (error) {
     console.log(error)
  }





}

export default registerController