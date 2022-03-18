import * as Yup from 'yup';

export default [
    Yup.object().shape({
      [personName.name]: Yup.string().required(`${personName.requiredErrorMsg}`),
      [phoneNumber.name]: Yup.string().required(`${phoneNumber.requiredErrorMsg}`),
      [company.name]: Yup.string().required(`${company.requiredErrorMsg}`),
      [loadNumber.name]: Yup.string().required(`${company.requiredErrorMsg}`),
      [customerName.name]: Yup.string().required(`${company.requiredErrorMsg}`),
      [containerNumber.name]: Yup.string().required(`${company.requiredErrorMsg}`),
    })
  ];
  