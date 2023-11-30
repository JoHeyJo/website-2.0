import React, { useState } from 'react';
import Button from "react-bootstrap/Button";

const contact_form = {
  from_name: '',
  reply_to: '',
  to_name: 'JPF0628@gmail.com',
  subject: '',
  message: ''
}

export const ContactForm = () => {
  const [form, setForm] = useState(contact_form);
  const [alert, setAlert] = useState(null)

  function handleChange(e: any) {
    e.preventDefault();

    const { name, value } = e.target
    setForm(formData => ({ ...formData, [name]: value }))
  }

  async function sendEmail(e: any) {
    e.preventDefault();
  }

  function clearForm() { setForm(contact_form) }

  return (
    <section id='contact-container'>
      <form onSubmit={sendEmail}>
        <div id='greeting-text'>Get in touch!</div>

        <div className='form-inputs'>
          {/* <label className='sender-info' htmlFor="sender-name"></label> */}
          <input
            className='sender-info'
            onChange={handleChange}
            type="text"
            name="from_name"
            value={form.from_name}
            placeholder='Name:' />
        </div>

        <div className='form-inputs'>
          <select required
            id='subject'
            name='subject'
            className='sender-info'
            onChange={handleChange}>
            {form.subject === '' ? <option value='' disabled selected hidden>What is this about:</option> : ''}
            <option value='' disabled selected hidden>What is this about:</option>
            <option value='employment'>Job Opportunity</option>
            <option value='freelance'>Freelance</option>
            <option value='inquiry'>Talk shop</option>
            <option value='bug'>Report an issue</option>
            <option value='other'>Just wanted to say hi!</option>
          </select>
        </div>

        <div className='form-inputs'>
          {/* <label className='sender-info' htmlFor='email-input'></label> */}
          <input
            className='sender-info'
            onChange={handleChange}
            type="email"
            name="reply_to"
            value={form.reply_to}
            placeholder='Email:' />
        </div>

        <div className='form-inputs'>
          <label htmlFor='message-input'></label>
          <textarea
            placeholder='Would love to hear your thoughts...'
            rows={6}
            onChange={handleChange}
            name="message"
            value={form.message} />
          {/* using Button component submits the wrong data format. error:
          "The 3rd parameter is expected to be the HTML form element or the style selector of form"
          even if the form is passed JSEmail function doesn't accept it. */}
          <input id='submit-button' type="submit" value="Send" />
          <Button className='m-2' variant="outline-dark" onClick={clearForm}>Clear</Button>
        </div>
        {alert &&
          <div className="alert alert-dark" role="alert">
            {alert}
          </div>
        }
      </form>
    </section>
  );
};

export default ContactForm;