const mongoose = require('mongoose');
const Location = require('./app_server/models/location'); // Path to your model
const locations= [
  {
    name: 'City Health Hospital',
    address: '4-106/C, Annojiguda, Hyderabad, Telangana 501301',
    rating: 4,
    facilities: ['Emergency Care', 'Surgery', 'Pharmacy', 'Laboratory Services', 'Radiology', 'ICU'],
    coords: { lat: 17.3850, lng: 78.4867 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '08:00 AM', closing: '08:00 PM', closed: false },
      { days: 'Saturday', opening: '09:00 AM', closing: '06:00 PM', closed: false },
      { days: 'Sunday', opening: '10:00 AM', closing: '04:00 PM', closed: false }
    ],
    imageSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUW5UiS-v8sda36VVD0u4IuFGiITezljsMg&s',
    reviews: [
      { author: 'Nani Nalli', rating: 5, timestamp: '2023-07-16', reviewText: 'I recently visited City Health Hospital and had a largely positive experience. The hospital was clean and well-organized. The staff were professional and courteous.' },
      { author: 'Bala Subhramanyam', rating: 4, timestamp: '2023-06-16', reviewText: 'Convenient location with excellent medical facilities. The waiting time was reasonable and the doctors were knowledgeable.' },
      { author: 'Priya Sharma', rating: 5, timestamp: '2023-08-22', reviewText: 'Outstanding service! They have modern equipment and the nursing staff is exceptional. Highly recommended for all medical needs.' }
    ],
    contact: {
      phone: '+91-1234567890',
      gmail: 'info@cityhealthhospital.com',
      email: 'info@cityhealthhospital.com',
      website: 'https://www.cityhealthhospital.com'
    }
  },
  {
    name: 'Metro Medical Centre',
    address: '3-99/1, Chengicherla Road, Beside Mahadev Jewellers, Chengicherla, Hyderabad, Telangana 500092',
    rating: 4,
    facilities: ['Outpatient Services', 'Diagnostics', 'Immunizations', 'Pediatrics', 'Cardiology', 'Orthopedics'],
    coords: { lat: 17.3860, lng: 78.4877 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '07:00 AM', closing: '09:00 PM', closed: false },
      { days: 'Saturday', opening: '08:00 AM', closing: '07:00 PM', closed: false },
      { days: 'Sunday', opening: '09:00 AM', closing: '05:00 PM', closed: false }
    ],
    imageSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88AMyEnjMHycJ8c3ulNKUWkwJlxgBzBHiNg&s',
    reviews: [
      { author: 'Shreyansh', rating: 4, timestamp: '2023-07-20', reviewText: 'Great services and quick response times! The diagnostic department is particularly efficient.' },
      { author: 'Mouli', rating: 4, timestamp: '2023-06-25', reviewText: 'Good hospital with modern facilities. The cardiology department is excellent.' },
      { author: 'Anjali Reddy', rating: 5, timestamp: '2023-09-10', reviewText: 'Professional staff and clean premises. My family has been coming here for years.' }
    ],
    contact: {
      phone: '+91-9876543210',
      gmail: 'contact@metromedicalcentre.com',
      email: 'contact@metromedicalcentre.com',
      website: 'https://www.metromedicalcentre.com'
    }
  },
  {
    name: 'HealthFirst Hospital',
    address: 'Kamala Nagar Main Rd, Vikarabad, Telangana',
    rating: 5,
    facilities: ['Emergency Care', 'Vaccination Services', 'Health Screenings', 'Maternity Care', 'Oncology', 'Neurology'],
    coords: { lat: 17.3870, lng: 78.4887 },
    openingTimes: [
      { days: 'Monday - Sunday', opening: '24/7', closed: false }
    ],
    imageSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Ds32x9Y2tAWeur8i422IlgskLJjUhxMoxQ&s',
    reviews: [
      { author: 'Srinivas', rating: 5, timestamp: '2023-08-10', reviewText: 'A great hospital with professional staff. The emergency department is always ready and responsive.' },
      { author: 'Karthikeya', rating: 5, timestamp: '2023-08-15', reviewText: 'Quick service and reasonable prices for treatments. The maternity ward is exceptional.' },
      { author: 'Lakshmi Naidu', rating: 5, timestamp: '2023-10-05', reviewText: 'Best hospital in the area. They saved my father\'s life during a critical situation. Forever grateful.' }
    ],
    contact: {
      phone: '+91-9090909090',
      gmail: 'support@healthfirsthospital.com',
      email: 'support@healthfirsthospital.com',
      website: 'https://www.healthfirsthospital.com'
    }
  },
  {
    name: 'CarePlus Hospital',
    address: '162, Korremula Road, OU Colony, Chowdhariguda, Hyderabad, Telangana 500088',
    rating: 4,
    facilities: ['Chronic Disease Management', 'Surgery', 'Medical Equipment Rental', 'Physical Therapy', 'Dermatology', 'ENT'],
    coords: { lat: 17.3880, lng: 78.4897 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '08:00 AM', closing: '08:00 PM', closed: false },
      { days: 'Saturday', opening: '08:00 AM', closing: '06:00 PM', closed: false },
      { days: 'Sunday', opening: '09:00 AM', closing: '03:00 PM', closed: false }
    ],
    imageSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdTGovjxaZWbC0G7NXQ8hl379ec_rYuDQwNA&s',
    reviews: [
      { author: 'Pranay Reddy', rating: 4, timestamp: '2023-09-12', reviewText: 'Nice and clean hospital. The staff is very polite and the facilities are modern.' },
      { author: 'Koushik Reddy', rating: 4, timestamp: '2023-09-18', reviewText: 'Good healthcare options with specialized departments. The dermatology clinic is excellent.' },
      { author: 'Deepika Patel', rating: 4, timestamp: '2023-10-20', reviewText: 'Reliable healthcare provider. They have all the necessary equipment and qualified doctors.' }
    ],
    contact: {
      phone: '+91-8080808080',
      gmail: 'info@careplushospital.com',
      email: 'info@careplushospital.com',
      website: 'https://www.careplushospital.com'
    }
  },
  {
    name: 'PrimeCare Hospital',
    address: 'Door No 5/123/1, Shop No 2, Boduppal Rd, Peerzadiguda, Buddha Nagar, Hyderabad, Telangana 500039',
    rating: 3,
    facilities: ['Emergency Services', 'Medication Therapy Management', 'Patient Transfers', 'Geriatrics', 'Psychiatry', 'Nutrition Counseling'],
    coords: { lat: 17.3890, lng: 78.4907 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '09:00 AM', closing: '07:00 PM', closed: false },
      { days: 'Saturday', opening: '09:00 AM', closing: '05:00 PM', closed: false },
      { days: 'Sunday', closed: true }
    ],
    imageSrc : 'https://images1-fabric.practo.com/practices/1138452/primecare-hospital-bangalore-5a30d6a8801a6.jpg',
    reviews: [
      { author: 'Akash', rating: 4, timestamp: '2023-10-20', reviewText: 'The staff is very knowledgeable and caring. They provide personalized attention to each patient.' },
      { author: 'Tej', rating: 4, timestamp: '2023-10-25', reviewText: 'Good prices on treatments. Sometimes they run out of stock on popular items, but the service is generally good.' },
      { author: 'Rajesh Kumar', rating: 3, timestamp: '2023-11-05', reviewText: 'Decent medical facility with experienced doctors. The psychiatry department is particularly helpful.' }
    ],
    contact: {
      phone: '+91-7070707070',
      gmail: 'contact@primecarehospital.com',
      email: 'contact@primecarehospital.com',
      website: 'https://www.primecarehospital.com'
    }
  },
  {
    name: 'Community Care Hospital',
    address: 'D.No.1 and 2, Nadergul X Roads, Village, Nadargul, Telangana',
    rating: 5,
    facilities: ['Travel Vaccinations', 'Health Consultations', 'Compounding Services', 'Family Medicine', 'Preventive Care', 'Occupational Health'],
    coords: { lat: 17.3900, lng: 78.4917 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '07:30 AM', closing: '08:30 PM', closed: false },
      { days: 'Saturday', opening: '08:00 AM', closing: '06:00 PM', closed: false },
      { days: 'Sunday', opening: '09:00 AM', closing: '04:00 PM', closed: false }
    ],
    imageSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpl9NXT2DwDO9KfNxjlxTW8bOA47irsMJ0A&s',
    reviews: [
      { author: 'Harsha', rating: 5, timestamp: '2023-12-02', reviewText: 'Great experience! The hospital is modern and well-equipped. The preventive care programs are excellent.' },
      { author: 'Shannu', rating: 5, timestamp: '2023-12-10', reviewText: 'I trust this hospital for all my health needs. The family medicine department is outstanding.' },
      { author: 'Meera Desai', rating: 5, timestamp: '2024-01-15', reviewText: 'Best healthcare facility in the region. Their travel vaccination services are comprehensive and efficient.' }
    ],
    contact: {
      phone: '+91-6060606060',
      gmail: 'info@communitycarehospital.com',
      email: 'info@communitycarehospital.com',
      website: 'https://www.communitycarehospital.com'
    }
  }
];


// Using local MongoDB instance instead of remote cluster
mongoose.connect('mongodb://localhost:27017/hms', { })
  .then(() => {
    console.log('Connected to MongoDB');
    return Location.insertMany(locations);
  })
  .then(() => {
    console.log('Data successfully inserted!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting data:', err);
  });