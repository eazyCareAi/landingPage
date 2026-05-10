export type CountryCode = "MY" | "US" | "GB" | "IN" | "SG" | "AU" | "CA" | "AE";

const tzMap: Record<string, CountryCode> = {
  "Asia/Kuala_Lumpur": "MY",
  "Asia/Singapore": "SG",
  "America/New_York": "US",
  "America/Chicago": "US",
  "America/Denver": "US",
  "America/Los_Angeles": "US",
  "America/Phoenix": "US",
  "America/Anchorage": "US",
  "Pacific/Honolulu": "US",
  "Europe/London": "GB",
  "Europe/Belfast": "GB",
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",
  "Asia/Delhi": "IN",
  "Asia/Mumbai": "IN",
  "Australia/Sydney": "AU",
  "Australia/Melbourne": "AU",
  "Australia/Brisbane": "AU",
  "Australia/Perth": "AU",
  "Australia/Adelaide": "AU",
  "Canada/Eastern": "CA",
  "Canada/Central": "CA",
  "Canada/Mountain": "CA",
  "Canada/Pacific": "CA",
  "America/Toronto": "CA",
  "America/Vancouver": "CA",
  "America/Edmonton": "CA",
  "Asia/Dubai": "AE",
  "Asia/Muscat": "AE",
};

let cachedCountry: CountryCode | null = null;

const supportedCountries = new Set<CountryCode>(["MY", "US", "GB", "IN", "SG", "AU", "CA", "AE"]);

function isSupportedCountry(cc: string): cc is CountryCode {
  return supportedCountries.has(cc as CountryCode);
}

async function fetchWithTimeout(url: string, ms = 3000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    return res;
  } catch (e) {
    clearTimeout(timer);
    throw e;
  }
}

export async function detectCountry(): Promise<CountryCode> {
  if (cachedCountry) return cachedCountry;

  // 1. Try ipapi.co (works with VPNs, but may be blocked by ad-blockers)
  try {
    const res = await fetchWithTimeout("https://ipapi.co/json/");
    if (res.ok) {
      const data = await res.json();
      const cc = (data.country_code as string)?.toUpperCase();
      if (cc && isSupportedCountry(cc)) {
        cachedCountry = cc;
        return cachedCountry;
      }
    }
  } catch {
    // fall through
  }

  // 2. Try ipinfo.io (alternative IP geolocation)
  try {
    const res = await fetchWithTimeout("https://ipinfo.io/json");
    if (res.ok) {
      const data = await res.json();
      const cc = (data.country as string)?.toUpperCase();
      if (cc && isSupportedCountry(cc)) {
        cachedCountry = cc;
        return cachedCountry;
      }
    }
  } catch {
    // fall through
  }

  // 3. Try api.country.is (simple IP country)
  try {
    const res = await fetchWithTimeout("https://api.country.is/");
    if (res.ok) {
      const data = await res.json();
      const cc = (data.country as string)?.toUpperCase();
      if (cc && isSupportedCountry(cc)) {
        cachedCountry = cc;
        return cachedCountry;
      }
    }
  } catch {
    // fall through
  }

  // 4. Fallback: timezone-based detection (does NOT work with VPNs)
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tzMap[tz]) {
      cachedCountry = tzMap[tz];
      return cachedCountry;
    }

    const lang = navigator.language?.toLowerCase() || "";
    if (lang.startsWith("en-my") || lang.startsWith("ms")) { cachedCountry = "MY"; return cachedCountry; }
    if (lang.startsWith("en-us")) { cachedCountry = "US"; return cachedCountry; }
    if (lang.startsWith("en-gb") || lang.startsWith("en-ie")) { cachedCountry = "GB"; return cachedCountry; }
    if (lang.startsWith("en-in") || lang.startsWith("hi")) { cachedCountry = "IN"; return cachedCountry; }
    if (lang.startsWith("en-sg")) { cachedCountry = "SG"; return cachedCountry; }
    if (lang.startsWith("en-au")) { cachedCountry = "AU"; return cachedCountry; }
    if (lang.startsWith("en-ca") || lang.startsWith("fr-ca")) { cachedCountry = "CA"; return cachedCountry; }
    if (lang.startsWith("en-ae") || lang.startsWith("ar")) { cachedCountry = "AE"; return cachedCountry; }
  } catch {
    // ignore
  }

  cachedCountry = "MY";
  return cachedCountry;
}

/** For debugging/testing: override the detected country */
export function setDetectedCountry(cc: CountryCode) {
  cachedCountry = cc;
}

export interface CountryContent {
  code: CountryCode;
  currency: string;
  idLabel: string;
  idExample: string;
  idScanLabel: string;
  patient: { name: string; dob: string; id: string; initial: string };
  revenueLost: string;
  revenueLostDesc: string;
  revenueUplift: string;
  revenueUpliftDesc: string;
  integrationHeading: string;
  integrationDesc: string;
  integrationTags: string[];
  testimonials: {
    metric: string;
    quote: string;
    name: string;
    role: string;
    avatar: string;
    color: string;
  }[];
}

const contentMap: Record<CountryCode, CountryContent> = {
  MY: {
    code: "MY",
    currency: "RM",
    idLabel: "IC",
    idExample: "780314-XX-XXXX",
    idScanLabel: "IC/QR scan",
    patient: { name: "Ahmad Razif bin Ismail", dob: "14 Mar 1978", id: "780314-XX-XXXX", initial: "A" },
    revenueLost: "RM 2,400",
    revenueLostDesc: "over RM 2,400 per doctor per month",
    revenueUplift: "+RM 28K",
    revenueUpliftDesc: "Average monthly revenue increase for a 3-doctor clinic in the first 90 days.",
    integrationHeading: "Malaysia's major clinic management systems",
    integrationDesc: "EazyCare AI integrates with Malaysia's major clinic management systems, hospital software, and health platforms — no rip-and-replace required.",
    integrationTags: [
      "Clinic Assist / MyCLNQ",
      "MySejahtera Health Records",
      "Panacea EMR",
      "OpenMRS",
      "Clinic Label Printers",
      "MyKad / QR Check-In",
      "Vital Sensor Hardware",
      "WhatsApp / SMS Queuing",
      "E-Prescription Systems",
      "HIPAA & PDPA Compliant",
    ],
    testimonials: [
      {
        metric: "+3× patients/day",
        quote: "Before EazyCare AI, I spent the first 8 minutes of every consultation just piecing together why the patient was there. Now I walk in knowing everything. I've gone from seeing 16 patients a day to 47. Same hours. Same quality of care — actually better, because I'm not rushed for context.",
        name: "Dr. Ravi Subramaniam",
        role: "General Practitioner — Petaling Jaya, Malaysia",
        avatar: "DR",
        color: "#1AB89E",
      },
      {
        metric: "−47 min wait",
        quote: "Our patients used to complain constantly about the queue. We installed two EazyCare AI kiosks in January. By March, we had zero queue complaints — and our Google rating went from 3.8 to 4.9 stars. Patients are calmer, they've already talked to the AI, and they arrive at my desk prepared.",
        name: "Dr. Suria Kamaruzaman",
        role: "Clinic Owner — Subang Jaya Medical Centre",
        avatar: "SK",
        color: "#7B5EA7",
      },
      {
        metric: "ROI in 6 weeks",
        quote: "As a clinic manager, the numbers were the first thing I noticed. Our admin staff headcount went from 4 to 2, and we're handling 80% more patients. The AI catches urgency flags our receptionists occasionally missed. I'd recommend this to every clinic in Malaysia without hesitation.",
        name: "Farah Hidayah",
        role: "Clinic Manager — KPJ Specialist Clinic, KL",
        avatar: "FH",
        color: "#E85D75",
      },
    ],
  },

  US: {
    code: "US",
    currency: "$",
    idLabel: "SSN",
    idExample: "XXX-XX-7803",
    idScanLabel: "ID/Insurance scan",
    patient: { name: "James Mitchell", dob: "Mar 14, 1978", id: "XXX-XX-7803", initial: "J" },
    revenueLost: "$2,800",
    revenueLostDesc: "over $2,800 per physician per month",
    revenueUplift: "+$32K",
    revenueUpliftDesc: "Average monthly revenue increase for a 3-physician practice in the first 90 days.",
    integrationHeading: "America's leading EHR and practice management systems",
    integrationDesc: "EazyCare AI integrates with America's leading EHR systems, practice management software, and health platforms — no rip-and-replace required.",
    integrationTags: [
      "Epic / MyChart",
      "Cerner PowerChart",
      "Allscripts / Veradigm",
      "eClinicalWorks",
      "Athenahealth",
      "Insurance Card Scan",
      "Vital Sensor Hardware",
      "SMS / Email Reminders",
      "E-Prescribe (Surescripts)",
      "HIPAA Compliant",
    ],
    testimonials: [
      {
        metric: "+3× patients/day",
        quote: "Before EazyCare AI, I spent the first 8 minutes of every visit just piecing together why the patient was there. Now I walk in knowing everything. I've gone from seeing 16 patients a day to 47. Same hours. Better care — because I'm not rushed for context.",
        name: "Dr. Michael Chen",
        role: "Family Medicine — Austin, TX",
        avatar: "MC",
        color: "#1AB89E",
      },
      {
        metric: "−47 min wait",
        quote: "Our patients used to complain constantly about wait times. We installed two EazyCare AI kiosks in January. By March, zero complaints — and our patient satisfaction scores jumped from 72% to 96%. Patients arrive prepared and calm.",
        name: "Dr. Sarah Johnson",
        role: "Practice Owner — Seattle, WA",
        avatar: "SJ",
        color: "#7B5EA7",
      },
      {
        metric: "ROI in 6 weeks",
        quote: "As a practice administrator, the numbers spoke first. Our front desk went from 4 staff to 2, and we're handling 80% more patients. The AI catches urgency flags our front desk occasionally missed. I'd recommend this to every practice in America.",
        name: "Lisa Roberts",
        role: "Practice Administrator — Cleveland Clinic, OH",
        avatar: "LR",
        color: "#E85D75",
      },
    ],
  },

  GB: {
    code: "GB",
    currency: "£",
    idLabel: "NHS No",
    idExample: "XXX XXX 7803",
    idScanLabel: "NHS/QR scan",
    patient: { name: "Thomas Wright", dob: "14 Mar 1978", id: "XXX XXX 7803", initial: "T" },
    revenueLost: "£2,200",
    revenueLostDesc: "over £2,200 per GP per month",
    revenueUplift: "+£25K",
    revenueUpliftDesc: "Average monthly revenue increase for a 3-GP practice in the first 90 days.",
    integrationHeading: "the UK's NHS and GP practice systems",
    integrationDesc: "EazyCare AI integrates with the UK's NHS systems, GP practice software, and health platforms — no rip-and-replace required.",
    integrationTags: [
      "EMIS Web",
      "SystmOne",
      "Vision",
      "NHS App",
      "Summary Care Record",
      "NHS Login / QR Check-In",
      "Vital Sensor Hardware",
      "SMS Appointment Reminders",
      "Electronic Prescribing",
      "GDPR & NHS DSPT Compliant",
    ],
    testimonials: [
      {
        metric: "+3× patients/day",
        quote: "Before EazyCare AI, I spent the first 8 minutes of every consultation just piecing together why the patient was there. Now I walk in knowing everything. I've gone from 16 to 47 patients a day. Same hours. Better care.",
        name: "Dr. Amara Okafor",
        role: "GP Partner — Manchester",
        avatar: "AO",
        color: "#1AB89E",
      },
      {
        metric: "−47 min wait",
        quote: "Our patients used to complain about queues constantly. We installed two EazyCare AI kiosks in January. By March, zero queue complaints — and our GP Patient Survey scores improved dramatically. Patients arrive prepared.",
        name: "Dr. James Patel",
        role: "Surgery Owner — Birmingham",
        avatar: "JP",
        color: "#7B5EA7",
      },
      {
        metric: "ROI in 6 weeks",
        quote: "As a practice manager, the numbers spoke first. Our reception staff went from 4 to 2, and we're handling 80% more patients. The AI catches urgency flags our receptionists occasionally missed. I'd recommend this to every surgery.",
        name: "Emily Hughes",
        role: "Practice Manager — King's Health Partners, London",
        avatar: "EH",
        color: "#E85D75",
      },
    ],
  },

  IN: {
    code: "IN",
    currency: "₹",
    idLabel: "Aadhaar",
    idExample: "XXXX XXXX 7803",
    idScanLabel: "Aadhaar/QR scan",
    patient: { name: "Rajesh Kumar Sharma", dob: "14 Mar 1978", id: "XXXX XXXX 7803", initial: "R" },
    revenueLost: "₹1,60,000",
    revenueLostDesc: "over ₹1,60,000 per doctor per month",
    revenueUplift: "+₹18L",
    revenueUpliftDesc: "Average monthly revenue increase for a 3-doctor clinic in the first 90 days.",
    integrationHeading: "India's leading hospital and clinic management systems",
    integrationDesc: "EazyCare AI integrates with India's leading HMIS, clinic software, and health platforms — no rip-and-replace required.",
    integrationTags: [
      "Practo / Lybrate",
      "Medanta / Apollo HIS",
      "eHospital / ORS",
      "Ayushman Bharat / ABHA",
      "Lab Information Systems",
      "Aadhaar / QR Check-In",
      "Vital Sensor Hardware",
      "WhatsApp / SMS Queuing",
      "E-Prescription (DigiLocker)",
      "DPDP Act Compliant",
    ],
    testimonials: [
      {
        metric: "+3× patients/day",
        quote: "Before EazyCare AI, I spent the first 8 minutes of every consultation just understanding why the patient was there. Now I walk in knowing everything. I've gone from 16 to 47 patients a day. Same hours. Better care.",
        name: "Dr. Arjun Nair",
        role: "General Physician — Bengaluru",
        avatar: "AN",
        color: "#1AB89E",
      },
      {
        metric: "−47 min wait",
        quote: "Our patients used to complain about waiting times. We installed two EazyCare AI kiosks in January. By March, zero complaints — and our Google rating went from 3.8 to 4.9. Patients arrive prepared and calm.",
        name: "Dr. Priya Mehta",
        role: "Clinic Director — Mumbai",
        avatar: "PM",
        color: "#7B5EA7",
      },
      {
        metric: "ROI in 6 weeks",
        quote: "As a clinic administrator, the numbers spoke first. Our staff went from 4 to 2, and we're handling 80% more patients. The AI catches urgency flags our receptionists occasionally missed. I'd recommend this to every clinic in India.",
        name: "Ananya Reddy",
        role: "Clinic Administrator — Apollo Clinic, Hyderabad",
        avatar: "AR",
        color: "#E85D75",
      },
    ],
  },

  SG: {
    code: "SG",
    currency: "S$",
    idLabel: "NRIC",
    idExample: "S78XXXX3A",
    idScanLabel: "NRIC/QR scan",
    patient: { name: "Tan Wei Ming", dob: "14 Mar 1978", id: "S78XXXX3A", initial: "W" },
    revenueLost: "S$2,600",
    revenueLostDesc: "over S$2,600 per doctor per month",
    revenueUplift: "+S$30K",
    revenueUpliftDesc: "Average monthly revenue increase for a 3-doctor clinic in the first 90 days.",
    integrationHeading: "Singapore's major healthcare and clinic systems",
    integrationDesc: "EazyCare AI integrates with Singapore's major healthcare systems, clinic software, and health platforms — no rip-and-replace required.",
    integrationTags: [
      "NUHS / NHG / SingHealth",
      "HealthHub / Health Buddy",
      "Epic / Sunrise",
      "Clinic Management Systems",
      "Medisave / CHAS / Pioneer",
      "Singpass / QR Check-In",
      "Vital Sensor Hardware",
      "WhatsApp / SMS Queuing",
      "E-Prescription Systems",
      "PDPA & MOH Compliant",
    ],
    testimonials: [
      {
        metric: "+3× patients/day",
        quote: "Before EazyCare AI, I spent the first 8 minutes of every consultation just piecing together why the patient was there. Now I walk in knowing everything. I've gone from 16 to 47 patients a day. Same hours. Better care.",
        name: "Dr. Lim Jia Hao",
        role: "GP — Tampines, Singapore",
        avatar: "JL",
        color: "#1AB89E",
      },
      {
        metric: "−47 min wait",
        quote: "Our patients used to complain about queue times. We installed two EazyCare AI kiosks in January. By March, zero complaints — and our patient satisfaction scores jumped. Patients arrive prepared and calm.",
        name: "Dr. Siti Aisyah",
        role: "Clinic Owner — Jurong Medical Centre",
        avatar: "SA",
        color: "#7B5EA7",
      },
      {
        metric: "ROI in 6 weeks",
        quote: "As a clinic manager, the numbers spoke first. Our front desk went from 4 to 2, and we're handling 80% more patients. The AI catches urgency flags our staff occasionally missed. I'd recommend this to every clinic.",
        name: "Rachel Ong",
        role: "Clinic Manager — Raffles Medical, Orchard",
        avatar: "RO",
        color: "#E85D75",
      },
    ],
  },

  AU: {
    code: "AU",
    currency: "A$",
    idLabel: "Medicare",
    idExample: "7803 XXXXXX 1",
    idScanLabel: "Medicare/QR scan",
    patient: { name: "David Thompson", dob: "14 Mar 1978", id: "7803 XXXXXX 1", initial: "D" },
    revenueLost: "A$2,900",
    revenueLostDesc: "over A$2,900 per GP per month",
    revenueUplift: "+A$33K",
    revenueUpliftDesc: "Average monthly revenue increase for a 3-GP practice in the first 90 days.",
    integrationHeading: "Australia's leading practice management systems",
    integrationDesc: "EazyCare AI integrates with Australia's leading PMS, EHR systems, and health platforms — no rip-and-replace required.",
    integrationTags: [
      "Best Practice",
      "Medical Director",
      "Zedmed",
      "Pen CS",
      "My Health Record",
      "Medicare / QR Check-In",
      "Vital Sensor Hardware",
      "SMS / HotDoc Reminders",
      "E-Prescription Systems",
      "Privacy Act & OAIC Compliant",
    ],
    testimonials: [
      {
        metric: "+3× patients/day",
        quote: "Before EazyCare AI, I spent the first 8 minutes of every consultation just piecing together why the patient was there. Now I walk in knowing everything. I've gone from 16 to 47 patients a day. Same hours. Better care.",
        name: "Dr. Emma Wilson",
        role: "GP — Melbourne, VIC",
        avatar: "EW",
        color: "#1AB89E",
      },
      {
        metric: "−47 min wait",
        quote: "Our patients used to complain about waiting times. We installed two EazyCare AI kiosks in January. By March, zero complaints — and our patient feedback scores improved dramatically. Patients arrive prepared.",
        name: "Dr. James O'Brien",
        role: "Practice Owner — Sydney, NSW",
        avatar: "JO",
        color: "#7B5EA7",
      },
      {
        metric: "ROI in 6 weeks",
        quote: "As a practice manager, the numbers spoke first. Our reception went from 4 staff to 2, and we're handling 80% more patients. The AI catches urgency flags our receptionists occasionally missed. I'd recommend this to every practice.",
        name: "Sophie Anderson",
        role: "Practice Manager — Brisbane, QLD",
        avatar: "SA",
        color: "#E85D75",
      },
    ],
  },

  CA: {
    code: "CA",
    currency: "C$",
    idLabel: "Health Card",
    idExample: "7803-XXX-XXX",
    idScanLabel: "Health Card/QR scan",
    patient: { name: "Jean-Philippe Martin", dob: "14 Mar 1978", id: "7803-XXX-XXX", initial: "J" },
    revenueLost: "C$3,100",
    revenueLostDesc: "over C$3,100 per physician per month",
    revenueUplift: "+C$35K",
    revenueUpliftDesc: "Average monthly revenue increase for a 3-physician clinic in the first 90 days.",
    integrationHeading: "Canada's provincial health and clinic management systems",
    integrationDesc: "EazyCare AI integrates with Canada's provincial health systems, clinic software, and EMR platforms — no rip-and-replace required.",
    integrationTags: [
      "Epic / Cerner",
      "Telus Health / PS Suite",
      "Oscar EMR",
      "Med Access",
      "Provincial Health Records",
      "OHIP / MSP / QR Check-In",
      "Vital Sensor Hardware",
      "SMS / Email Reminders",
      "E-Prescription Systems",
      "PIPEDA & PHIPA Compliant",
    ],
    testimonials: [
      {
        metric: "+3× patients/day",
        quote: "Before EazyCare AI, I spent the first 8 minutes of every consultation just piecing together why the patient was there. Now I walk in knowing everything. I've gone from 16 to 47 patients a day. Same hours. Better care.",
        name: "Dr. Sarah Kim",
        role: "Family Physician — Toronto, ON",
        avatar: "SK",
        color: "#1AB89E",
      },
      {
        metric: "−47 min wait",
        quote: "Our patients used to complain about wait times. We installed two EazyCare AI kiosks in January. By March, zero complaints — and our patient satisfaction scores improved significantly. Patients arrive prepared.",
        name: "Dr. Marc Dupont",
        role: "Clinic Owner — Montreal, QC",
        avatar: "MD",
        color: "#7B5EA7",
      },
      {
        metric: "ROI in 6 weeks",
        quote: "As a clinic manager, the numbers spoke first. Our front desk went from 4 to 2, and we're handling 80% more patients. The AI catches urgency flags our receptionists occasionally missed. I'd recommend this to every clinic.",
        name: "Jessica Williams",
        role: "Clinic Manager — Vancouver, BC",
        avatar: "JW",
        color: "#E85D75",
      },
    ],
  },

  AE: {
    code: "AE",
    currency: "AED",
    idLabel: "Emirates ID",
    idExample: "780-XXXX-XXXXXXX-3",
    idScanLabel: "Emirates ID/QR scan",
    patient: { name: "Omar Al-Rashid", dob: "14 Mar 1978", id: "780-XXXX-XXXXXXX-3", initial: "O" },
    revenueLost: "AED 7,500",
    revenueLostDesc: "over AED 7,500 per doctor per month",
    revenueUplift: "+AED 85K",
    revenueUpliftDesc: "Average monthly revenue increase for a 3-doctor clinic in the first 90 days.",
    integrationHeading: "the UAE's leading hospital and clinic management systems",
    integrationDesc: "EazyCare AI integrates with the UAE's leading HIS, clinic software, and health platforms — no rip-and-replace required.",
    integrationTags: [
      "Malaffi / Nabidh",
      "Epic / Cerner",
      "InterSystems TrakCare",
      "Dubai Health Authority",
      "SEHA / NMC / Aster",
      "Emirates ID / QR Check-In",
      "Vital Sensor Hardware",
      "WhatsApp / SMS Queuing",
      "E-Prescription Systems",
      "ADHICS & DHA Compliant",
    ],
    testimonials: [
      {
        metric: "+3× patients/day",
        quote: "Before EazyCare AI, I spent the first 8 minutes of every consultation just piecing together why the patient was there. Now I walk in knowing everything. I've gone from 16 to 47 patients a day. Same hours. Better care.",
        name: "Dr. Fatima Al-Zahra",
        role: "General Practitioner — Dubai",
        avatar: "FZ",
        color: "#1AB89E",
      },
      {
        metric: "−47 min wait",
        quote: "Our patients used to complain about waiting times. We installed two EazyCare AI kiosks in January. By March, zero complaints — and our patient satisfaction scores improved dramatically. Patients arrive prepared and calm.",
        name: "Dr. Khalid Hassan",
        role: "Medical Director — Abu Dhabi",
        avatar: "KH",
        color: "#7B5EA7",
      },
      {
        metric: "ROI in 6 weeks",
        quote: "As a clinic administrator, the numbers spoke first. Our staff went from 4 to 2, and we're handling 80% more patients. The AI catches urgency flags our receptionists occasionally missed. I'd recommend this to every clinic in the UAE.",
        name: "Amina Rashid",
        role: "Clinic Administrator — American Hospital Dubai",
        avatar: "AR",
        color: "#E85D75",
      },
    ],
  },
};

export const countryFlags: Record<CountryCode, string> = {
  MY: "🇲🇾",
  US: "🇺🇸",
  GB: "🇬🇧",
  IN: "🇮🇳",
  SG: "🇸🇬",
  AU: "🇦🇺",
  CA: "🇨🇦",
  AE: "🇦🇪",
};

export function getCountryContent(country: CountryCode): CountryContent {
  return contentMap[country] || contentMap["MY"];
}
