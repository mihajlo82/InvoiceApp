import { generete_id } from "../data/id_generator";
export const validateCustomerSendObj = (data) => {

    try{
        const schema = {
            id: data?.id ? data.id : generete_id(),
            name: data?.name,
            surname: data?.surname,
            address: data?.address,
            age: data?.age
        }

        Object.keys(schema).forEach(key => checkBody(schema, key));

        return {dataValidated: schema, isValid: true, error:''};

    }catch(error){ 
            return {dataValidated: null, isValid: false, error:error.message};
        }
    }

const checkBody = (schema, key) => {
    let tmpVal = schema[key];

        if(key === 'age'){
            let notVal = checkIsAgeNotValid(tmpVal);
            
            if(!notVal) {
                schema[key] = tmpVal; 
            }else{
                throw new Error(toCamelCase(key) + notVal);
            }

        }else if(key === 'id'){
            const errorName = checkIdLength(tmpVal);
            if(!!errorName) {
                 throw new Error(toCamelCase(key) + errorName);
            }
        }else{
            let strNoValid = checkIsStringNotValid(tmpVal);
            if(!strNoValid){
                schema[key] = tmpVal; 
            }else {
                throw new Error(toCamelCase(key) + strNoValid);
            }
        }
}


const checkIsAgeNotValid = (no) =>{
    let tmpNo  = parseInt(no);

    if(!Number(tmpNo)){
        return ' error';
    }

    if(tmpNo < 1 || tmpNo > 101 ){
        return ' must be bw 1 and 101'
    }

    return false;

}

const checkIdLength = (id) => {
    let tmpId = id.toString();

    if(tmpId.length <= 0 && tmpId.length > 999) return ' error';

    return '';
}


const checkIsStringNotValid = (str) =>{
    let tmpString  = str.toString();
    let tmpStr = tmpString.trim();

    if(!tmpStr) return ' undefined';

    if(tmpStr.length <= 0){
        return ' must not be empty!';
    }

    if(tmpStr.length >30){
        return ' must be a shorter than 30 characters!';
    }
    
    return false;

}

//convert string to CamelCase
const toCamelCase = str =>  str[0].toUpperCase() + str.substr(1).toLowerCase();
