import { generete_id } from "../data/id_generator";
export const validateSellerSendObj = (data) => {
   
    try{
        const schema = {
            id: data?.id ? data.id : generete_id(),
            name: data?.name,
            companyName: data?.companyName,
            hqAddress: data?.hqAddress,
            isActive: data?.isActive
        }

        Object.keys(schema).forEach(key => checkBody(schema, key));

        return {dataValidated: schema, isValid: true, error:''};

    }catch(error){ 
        return {dataValidated: null, isValid: false, error:error.message};
        }
}

const checkBody = (schema, key) => {
    let tmpVal = schema[key];

    if(key === 'isActive'){
        schema[key] = !!tmpVal;  
    }else{
        let strNoValid = checkIsStringNotValid(tmpVal); 
        if(!strNoValid){
            schema[key] = tmpVal; 
        }else if(key === 'id'){
            const errorName = checkIdLength(tmpVal);
            if(!!errorName) {
                 throw new Error(toCamelCase(key) + errorName);
            }
        }else {
            throw new Error(toCamelCase(key) + strNoValid);
        }
    }
}


const checkIdLength = (id) => {
    let tmpId = id.toString();

    if(tmpId.length <= 0 && tmpId.length > 999) return ' error';

    return '';
}

const checkIsStringNotValid = (str) =>{
    let tmpStr  = str?.toString().trim();

    if(!tmpStr) return ' undefined';

    if(tmpStr.length <= 0){
        return ' must not be empty!';
    }

    if(tmpStr.length >35){
        return ' must be a shorter than 35 characters!';
    }
    
    return false;

}

const toCamelCase = str =>  str[0].toUpperCase() + str.substr(1).toLowerCase();