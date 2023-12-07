import { useState } from 'react';
import Button from "react-bootstrap/Button";
import './styles/ContactForm.css'
import { Row, Col } from 'react-bootstrap';
import Emailjs from './utils/emailjs';
import { isConstructorDeclaration } from 'typescript';

const contact_form = {
  fromName: '',
  replyTo: '',
  to_name: 'JPF0628@gmail.com',
  subject: '',
  message: ''
}

export const ContactForm = () => {
  const [form, setForm] = useState(contact_form);
  const [alert, setAlert] = useState<string | null>(null)

  function handleChange(e: any) {
    e.preventDefault();

    const { name, value } = e.target
    setForm(formData => ({ ...formData, [name]: value }))
  }

  async function sendEmail(e: any) {
    e.preventDefault();

    if (!form.fromName || !form.replyTo || !form.message) {
      setAlert('Please fill out all fields');
    } else {
      try {
        console.log('e.target', form)
        const res = Emailjs(e);
        console.log("response from Email.js", res)
        setForm(contact_form);
        setAlert('Thank you, your message has been sent!');
      } catch (error) {
        console.log('>>>>>>', error);
        setForm(contact_form);
        setAlert('Email was not sent please try, again.');
      }
    }
    setTimeout(()=> {setAlert(null)},5000)
  }

  function clearForm() { setForm(contact_form) }
  return (
    <Row style={{height: "100%"}}>
      <Col xs={12} md={12} lg={7} className='d-flex flex-column justify-content-center'>
        <form onSubmit={sendEmail}>
          <div id="ContactForm-user-interface" className="d-flex flex-column ">
            <div id='greeting-text'>Get in touch!</div>
            <div id="ContactForm-user-control" className="d-flex flex-column">
              <input
                id="ContactForm-user-input"
                onChange={handleChange}
                type="text"
                name="fromName"
                value={form.fromName}
                placeholder='Name:' />

              <select required
                id='ContactForm-select'
                name='subject'
                onChange={handleChange}>
                {form.subject === '' ? <option value='' disabled selected hidden>What is this about:</option> : ''}
                <option value='' disabled selected hidden>What is this about:</option>
                <option value='employment'>Job Opportunity</option>
                <option value='freelance'>Freelance</option>
                <option value='inquiry'>Talk shop</option>
                <option value='bug'>Report an issue</option>
                <option value='other'>Just wanted to say hi!</option>
              </select>

              <input
                id='ContactForm-email'
                onChange={handleChange}
                type="email"
                name="replyTo"
                value={form.replyTo}
                placeholder='Email:' />

              <textarea
                id='ContactForm-textarea'
                placeholder='Would love to hear your thoughts...'
                rows={6}
                onChange={handleChange}
                name="message"
                value={form.message} />
            </div>
            {/* using Button component submits the wrong data format. error:
          "The 3rd parameter is expected to be the HTML form element or the style selector of form"
        even if the form is passed JSEmail function doesn't accept it. */}
            <div className='d-flex align-items-baseline'>
              <input id='ContactForm-submit-button' type="submit" value="Send" />
              <Button className='m-2' variant="outline-dark" onClick={clearForm}>Clear</Button>
            </div>
            {alert &&
              <div className="alert alert-dark" role="alert">
                {alert}
              </div>
            }
          </div>
        </form>
      </Col>
    </Row>
  );
};

export default ContactForm;