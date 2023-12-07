import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_SERVICE_KEY ?? "";
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY ?? "";

function Emailjs(e:any) {

   const response =  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result: any) => {
        console.log(result.text);
      }, (error: any) => {
        console.log(error.text);
      });

      return response;
};
export default Emailjs