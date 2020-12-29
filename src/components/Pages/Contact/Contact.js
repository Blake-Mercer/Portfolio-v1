import React from 'react';

const Contact = () => {
  return (
    <section id='contact-form' class='py-3'>
      <div class='container'>
        <h1 class='l-heading'>
          <span class='text-primary'>Contact</span> Us
        </h1>
        <p>Please fill out the form below to contact us</p>
        <form action='process.php'>
          <div class='form-group'>
            <label for='name'>Name</label>
            <input type='text' name='name' id='name' />
          </div>
          <div class='form-group'>
            <label for='email'>Email</label>
            <input type='email' name='email' id='email' />
          </div>
          <div class='form-group'>
            <label for='message'>Message</label>
            <textarea name='message' id='message'></textarea>
          </div>
          <button type='submit' class='btn'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
