import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'produtos',
    links: [
      { label: 'pagamento', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'conectar', icon: <FaCreditCard />, url: '/products' }
    ]
  },
  {
    page: 'desenvolvedores',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'bibliotecas', icon: <FaBook />, url: '/products' },
      { label: 'ajuda', icon: <FaBook />, url: '/products' },
      { label: 'cobrança', icon: <FaBook />, url: '/products' }
    ]
  },
  {
    page: 'empresa',
    links: [
      { label: 'sobre', icon: <FaBriefcase />, url: '/products' },
      { label: 'clientes', icon: <FaBriefcase />, url: '/products' }
    ]
  }
];

export default sublinks;
