export const invoiceSchema = { 
    id:'',
    date:'', 
    amount: '', 
    sellerId: '', 
    customerId:'',
    seller: {
        id: '',
        name: '',
        companyName: '',
        hqAddress: '',
        isActive: false,
      },
    customer:{
        id: '',
        name: '',
        surname:'',
        address: '',
        age: ''
     }
  };

export const sellerSchema={
    id:'',
    name: '',
    companyName: '',
    hqAddress: '',
    isActive: false,
  };

export const customerSchema = {
    id:'',
    name: '',
    surname:'',
    address: '',
    age: ''
  }