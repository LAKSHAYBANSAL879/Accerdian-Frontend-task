import React, { useState } from 'react';
import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { School, ArrowForwardIos } from '@mui/icons-material';
import ReferralModal from '../ReferralModal';

const Benefits = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const programs = [
    { name: "Professional Certificate Program in Product Management", referrerBonus: "₹ 7,000", refereeBonus: "₹ 9,000" },
    { name: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹ 9,000", refereeBonus: "₹ 11,000" },
    { name: "Executive Program in Data Driven Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Advanced Certification in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { name: "Executive Program in Product Management and Project Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  ];

  return (
    <section id='benefits'>
      <Box sx={{ display: 'flex', height: '75vh', backgroundColor: '#f5f5f5', width: '75%', justifyContent: 'center', marginX:'auto'}}>
        {/* Sidebar */}
        <Box sx={{ width: 240, backgroundColor: '#fff', p: 2 }}>
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText primary="ALL PROGRAMS" />
            </ListItem>
            {['PRODUCT MANAGEMENT', 'STRATEGY & LEADERSHIP', 'BUSINESS MANAGEMENT', 'FINTECH', 'SENIOR MANAGEMENT', 'DATA SCIENCE', 'DIGITAL TRANSFORMATION', 'BUSINESS ANALYTICS'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>

       
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" gutterBottom>
            What Are The <span style={{ color: '#007bff' }}>Referral Benefits?</span>
          </Typography>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Enrolled"
            labelPlacement="start"
          />
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><Typography variant="h6">Programs</Typography></TableCell>
                  <TableCell align="right"><Typography variant="h6">Referrer Bonus</Typography></TableCell>
                  <TableCell align="right"><Typography variant="h6">Referee Bonus</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {programs.map((program, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <School sx={{ color: '#007bff', mr: 1 }} />
                        {program.name}
                      </Box>
                    </TableCell>
                    <TableCell align="right">{program.referrerBonus}</TableCell>
                    <TableCell align="right">{program.refereeBonus}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <button onClick={openModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-fit mx-auto">Refer now</button>
        </Box>
      </Box>
      <ReferralModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </section>
  );
};

export default Benefits;
