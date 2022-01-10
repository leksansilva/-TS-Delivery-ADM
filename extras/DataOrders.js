export const orders ={
    price: 0,
    note: '',
    deliveryStatusId: 0,
    addressId: 0,
    address: {
      number: '',
      city: '',
      neighborhood: '',
      state: '',
      addon: '',
      standard: true,
      addressType: '',
      x_coordinate: 0,
      y_coordinate: 0,
    },
    userId: 0,
    user: {
      name: '',
      cpf: '',
      contacts: [
        {
          tel: '',
          email: '',
          whatsapp: '',
        }
      ],
    },
    suborders: [
      {
        price: 0,
        note: '',
        foodId: 0,
        food: {
      
          name: '',
          price: 0,
          available: true,
          suborders: [],
          images: [
            {
          
              name: '',
              data: '',
              foodId: 0
            }
          ],
        },
        changes: [],
      }
    ],
  }
