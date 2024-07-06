import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { TextField, Button, Typography, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    border: '1px solid #000',
    borderRadius: '8px',
    padding: '20px',
    width: '400px'
  }
};

Modal.setAppElement('#root');

const ReferralModal = ({ isOpen, onRequestClose }) => {
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [refereePhone, setRefereePhone] = useState('');
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [referrerPhone, setReferrerPhone] = useState('');

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[0-9\b]+$/;
    return re.test(phone) && phone.length === 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!validateEmail(refereeEmail)) {
      newErrors.refereeEmail = 'Invalid email format';
    }
    if (!validatePhone(refereePhone)) {
      newErrors.refereePhone = 'Invalid phone number';
    }
    if (!validateEmail(referrerEmail)) {
      newErrors.referrerEmail = 'Invalid email format';
    }
    if (!validatePhone(referrerPhone)) {
      newErrors.referrerPhone = 'Invalid phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/referrals', {
        refereeName,
        refereeEmail,
        refereePhone,
        referrerName,
        referrerEmail,
        referrerPhone,
      });
      toast.success("Referral submitted successfully'")
      console.log('Referral submitted successfully', response.data);
      onRequestClose();
    } catch (error) {
      console.error('Error submitting referral', error);
    }
  };

  return (
   
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
         <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
      <Typography variant="h6" color="primary" gutterBottom>Refer a Friend</Typography>
      <form onSubmit={handleSubmit}>
        <Typography variant="subtitle1" gutterBottom>Referee Details</Typography>
        <Box mb={2}>
          <TextField
            label="Name"
            value={refereeName}
            onChange={(e) => setRefereeName(e.target.value)}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            value={refereeEmail}
            onChange={(e) => setRefereeEmail(e.target.value)}
            fullWidth
            required
            error={!!errors.refereeEmail}
            helperText={errors.refereeEmail}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Phone"
            value={refereePhone}
            onChange={(e) => setRefereePhone(e.target.value)}
            fullWidth
            required
            error={!!errors.refereePhone}
            helperText={errors.refereePhone}
          />
        </Box>
        <Typography variant="subtitle1" gutterBottom>Referrer Details</Typography>
        <Box mb={2}>
          <TextField
            label="Name"
            value={referrerName}
            onChange={(e) => setReferrerName(e.target.value)}
            fullWidth
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            value={referrerEmail}
            onChange={(e) => setReferrerEmail(e.target.value)}
            fullWidth
            required
            error={!!errors.referrerEmail}
            helperText={errors.referrerEmail}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Phone"
            value={referrerPhone}
            onChange={(e) => setReferrerPhone(e.target.value)}
            fullWidth
            required
            error={!!errors.referrerPhone}
            helperText={errors.referrerPhone}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button
            onClick={onRequestClose}
            variant="contained"
            color="secondary"
            style={{ marginRight: '8px' }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default ReferralModal;
