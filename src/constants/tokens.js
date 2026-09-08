import logoImg from '../assets/images/logo.png';

/**
 * Master Design System Tokens & Clean Business Placeholders
 * SIVA KAVERI CHITS RBT (Eluru, West Godavari)
 * Registered Chit Fund under the Chit Funds Act, 1982
 */

export const LOGO_IMAGE = logoImg;

export const BRAND = {
  logo: logoImg,
  nameTelugu: "శివ కావేరి చిట్స్",
  nameEnglish: "SIVA KAVERI CHITS RBT",
  companyLegalName: "Siva Kaveri Chits Pvt. Ltd.",
  taglineTelugu: "తెలుగు వారసత్వం × ఆధునిక ఆర్థిక విశ్వాసం",
  taglineEnglish: "Financial Discipline × Modern Institutional Trust",
  regionTelugu: "ఏలూరు, పశ్చిమ గోదావరి జిల్లా, ఆంధ్రప్రదేశ్",
  regionEnglish: "Eluru, West Godavari District, Andhra Pradesh",
  mottoTelugu: "పొదుపుతో మొదలైన ప్రయాణం… లక్ష్యంతో ముందుకు.",
  mottoEnglish: "A journey started with disciplined savings… moving forward with clear purpose.",
  registrationNumber: "AP/ELR/CHT/1998/XXXX",
  regulatoryAct: "Registered Chit Fund under the Chit Funds Act, 1982",
  establishedYear: "1998",
  phone: "+91 98480 XXXXX",
  mobile: "+91 94400 XXXXX",
  whatsapp: "+91 98480 XXXXX",
  email: "contact@sivakaverichits.com",
  addressEnglish: "Main Road, Near Old Bus Stand, Eluru, West Godavari Dist., AP - 534001",
  addressTelugu: "ప్రధాన రహదారి, పాత బస్టాండ్ సమీపంలో, ఏలూరు, పశ్చిమ గోదావరి జిల్లా, ఆంధ్రప్రదేశ్",
  workingHoursEnglish: "Monday – Saturday: 9:30 AM to 7:00 PM (Sunday Closed)",
  workingHoursTelugu: "ఉదయం 9:30 నుండి సాయంత్రం 7:00 వరకు (ఆదివారం సెలవు)",
};

export const CHIT_SCHEMES = [
  {
    id: "skc-50k",
    nameTelugu: "లక్ష్మీ పొదుపు చిట్",
    nameEnglish: "Lakshmi Small Savings Chit",
    chitValue: 50000,
    formattedValue: "₹50,000",
    tenureMonths: 25,
    monthlyInstallment: 2000,
    formattedMonthly: "₹2,000 / month",
    categoryEnglish: "Micro Business & Daily Savers",
    categoryTelugu: "చిరు వ్యాపారులు & రోజువారీ పొదుపు",
    purposeEnglish: "Ideal for daily wage earners, small emergency funds, and disciplined starter savings.",
  },
  {
    id: "skc-1l",
    nameTelugu: "శుభలాభ్ ఫ్యామిలీ చిట్",
    nameEnglish: "Shubhalabh Family Chit",
    chitValue: 100000,
    formattedValue: "₹1,00,000",
    tenureMonths: 25,
    monthlyInstallment: 4000,
    formattedMonthly: "₹4,000 / month",
    categoryEnglish: "Family Security & Education Fund",
    categoryTelugu: "కుటుంబ & విద్యా పొదుపు",
    purposeEnglish: "Structured for school fees, festive occasions, and planned household purchases.",
  },
  {
    id: "skc-2.5l",
    nameTelugu: "గోదావరి సమృద్ధి చిట్",
    nameEnglish: "Godavari Samruddhi Chit",
    chitValue: 250000,
    formattedValue: "₹2,50,000",
    tenureMonths: 40,
    monthlyInstallment: 6250,
    formattedMonthly: "₹6,250 / month",
    categoryEnglish: "Home Renovation & Marriage Fund",
    categoryTelugu: "గృహ అవసరాలు & వివాహ నిధి",
    purposeEnglish: "Designed for home improvement, vehicle down payments, and marriage expenses.",
  },
  {
    id: "skc-5l",
    nameTelugu: "రత్నగిరి వ్యాపార చిట్",
    nameEnglish: "Ratnagiri Business Chit",
    chitValue: 500000,
    formattedValue: "₹5,00,000",
    tenureMonths: 40,
    monthlyInstallment: 12500,
    formattedMonthly: "₹12,500 / month",
    categoryEnglish: "Commercial Expansion & Working Capital",
    categoryTelugu: "వ్యాపార విస్తరణ & మూలధనం",
    purposeEnglish: "Perfect for inventory stocking, retail expansion, and business cash-flow liquidity.",
  },
  {
    id: "skc-10l",
    nameTelugu: "రాజరాజేశ్వరి మెగా చిట్",
    nameEnglish: "Rajarajeshwari Mega Chit",
    chitValue: 1000000,
    formattedValue: "₹10,00,000",
    tenureMonths: 40,
    monthlyInstallment: 25000,
    formattedMonthly: "₹25,000 / month",
    categoryEnglish: "Enterprise Investment & Major Projects",
    categoryTelugu: "భారీ ప్రాజెక్టులు & పెట్టుబడులు",
    purposeEnglish: "Structured for high-net-worth business owners, land acquisition, and long-term capital.",
  },
];
