import { validateSellerSendObj } from "./validate_seller";
import { validateCustomerSendObj } from "./validate_customer"; 
import { generete_id } from "../data/id_generator";

export const checkValidDate = (e) => {
    const today = new Date();
    const choosenDate = new Date(e.target.value);

    //if choosen date is not higher than today 
    if(choosenDate < today) return true;
    else return false;
} 

export const validateInvoiceSendObj = data => { 
         
    try{
        const schema = { 
            id: data?.id ? data.id : generete_id(),
            date: data?.date,
            amount: data?.amount,
            seller: {
                id: data?.seller.id,
                name: data?.seller?.name,
                companyName: data?.seller?.companyName,
                hqAddress: data?.seller?.hqAddress,
                isActive: data?.seller?.isActive,
            },
            sellerId: data?.sellerId,
            customer: {
                id: data?.customer?.id,
                name: data?.customer?.name,
                surname: data?.customer?.surname,
                address: data?.customer?.address,
                age: data?.customer?.age
            },
            customerId: data?.customerId,
      };

        Object.keys(schema).forEach(key => {
           if(key === 'seller'){
                const {isValid, error} = validateSellerSendObj(schema[key]);            
                if(!isValid){
                    throw new Error("Seller "+ error)
                }
            }else if(key === 'customer'){ 
                const {isValid, error} = validateCustomerSendObj(schema[key]); 
                
                if(!isValid){
                    throw new Error("Customer "+ error)
                }

            }else if(key === 'id'){
                const errorName = checkIdLength(schema[key]);
                if(!!errorName) {
                     throw new Error(toCamelCase(key) + errorName);
                }
            }else if(key === 'date'){
                const isDateValid = checkDateIsEmpty(schema[key]);

                if(!isDateValid) {
                    throw new Error('Date error!');
                }
            }else if(key==='amount'){
                const {error} = checkAmount(schema[key]); 
                if(!!error){
                    throw new Error(toCamelCase(key) + error)
                }
            }
            else{ 
                let res = checkIsStringNotValid(schema[key]); 
                if(!res){
                    throw new Error(key);
                } 
            }
        });

        return {dataValidated: schema, isValid: true, error:''};

    }catch(error){ 
        return {dataValidated: null, isValid: false, error:error.message};
        }
}


const checkIdLength = (id) => {
    let tmpId = id.toString();

    if(tmpId.length <= 0 && tmpId.length > 999) return ' error';

    return '';
}

const checkDateIsEmpty = date => {
    if(!date.trim()) return false;
    
    return true;
}

const checkAmount = (no) =>{
    let tmpNo  = parseInt(no);

    if(!Number(tmpNo)){
        return  {isValid: false, error: ' undefined'} ;
    }

    if(tmpNo < 1 || tmpNo > 9999999 ){
        return {isValid: false, error: ' must be bw 1 and 9999999'};
    }
    return {isValid: true, error: ''};
}

const toCamelCase = str =>  str[0].toUpperCase() + str.substr(1).toLowerCase(); 

const checkIsStringNotValid = (str) =>{
    let tmpStr  = str.toString().trim();

    if(!tmpStr) return ' undefined';

    if(tmpStr.length <= 0){
        return ' must not be empty!';
    }

    if(tmpStr.length >35){
        return ' must be a shorter than 35 characters!';
    }
    
    return tmpStr;
}