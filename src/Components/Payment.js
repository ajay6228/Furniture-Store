import React, { useState } from 'react';
import './Payment.css'

const PaymentPage = () => {
  const [cardholder, setCardholder] = useState('');
  const [cardnumber, setCardnumber] = useState('');
  const [expdate, setExpdate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCardholder() || !validateCardNumber() || !validateExpDate() || !validateCVV()) {
      return;
    }

    // Call your server-side endpoint to process payment
    try {
      const response = await fetch('/your-payment-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardholder,
          cardnumber,
          expdate,
          cvv,
        }),
      });

      if (response.ok) {
        // Payment successful, handle accordingly (e.g., show a success message, redirect)
        console.log('Payment successful!');
      } else {
        // Payment failed, handle accordingly (e.g., show an error message)
        console.error('Payment failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error processing payment:', error.message);
    }
  };

  const validateCardholder = () => {
    if (!cardholder.trim()) {
      alert('Please enter the cardholder name.');
      return false;
    }
    return true;
  };

  const validateCardNumber = () => {
    if (!/^\d{16}$/.test(cardnumber)) {
      alert('Please enter a valid 16-digit card number.');
      return false;
    }
    return true;
  };

  const validateExpDate = () => {
    if (!/^\d{2}\/\d{4}$/.test(expdate)) {
      alert('Please enter a valid expiration date (MM/YYYY).');
      return false;
    }

    const [month, year] = expdate.split('/');
    const currentDate = new Date();
    const inputDate = new Date(`20${year}`, month - 1);

    if (inputDate < currentDate) {
      alert('The card has expired. Please enter a valid expiration date.');
      return false;
    }

    return true;
  };

  const validateCVV = () => {
    if (!/^\d{3,4}$/.test(cvv)) {
      alert('Please enter a valid 3 or 4-digit CVV.');
      return false;
    }
    return true;
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardholder">Cardholder Name</label>
        <input
          type="text"
          id="cardholder"
          name="cardholder"
          value={cardholder}
          onChange={(e) => setCardholder(e.target.value)}
          required
        />

        <label htmlFor="cardnumber">Card Number</label>
        <input
          type="text"
          id="cardnumber"
          name="cardnumber"
          value={cardnumber}
          onChange={(e) => setCardnumber(e.target.value)}
          required
        />

        <label htmlFor="expdate">Expiration Date</label>
        <input
          type="text"
          id="expdate"
          name="expdate"
          placeholder="MM/YYYY"
          value={expdate}
          onChange={(e) => setExpdate(e.target.value)}
          required
        />

        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
