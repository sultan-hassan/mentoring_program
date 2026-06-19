import { motion } from 'framer-motion'
import { ArrowRight, Linkedin } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { MENTOR_FORM_URL } from '../../config'

// Mentor profiles — add your mentor data here
// Fields: id, name, country, title, field, photoUrl, linkedin, bio, color
// Automatically sorted by name alphabetically
const mentors = [
  {
    id: 1,
    name: 'Manal Salih',
    country: 'United States',
    title: 'Full time student',
    field: 'Pharmaceutical Science',
    photoUrl: './mentors_photos/manal-salih.png',
    linkedin: 'https://www.linkedin.com/in/manal-salih-7429501b1',
    bio: 'I am a passionate pharmacist who always loves to learn and add value to myself. Curiosity has always been my compass. Enjoying the journey while am learning.',
    color: '#059669'
  },
  {
    id: 2,
    name: 'Salma Eltayeb',
    country: 'Germany',
    title: 'Assistant Professor & Academic advisor',
    field: 'Chemistry Science',
    photoUrl: './mentors_photos/salma-eltayeb.png',
    linkedin: 'https://www.linkedin.com/in/dr-salma-eltayeb-b8a7a0bb',
    bio: 'I am an Assistant Professor in chemistry. With more than 10 years of experience as a lecturer and researcher, I have developed strong skills in communication, mentorship, leadership, and student support. I am passionate about creating a positive and collaborative environment, and I enjoy guiding students, sharing knowledge, and helping others grow both academically and personally.',
    color: '#059669'
  },
  {
    id: 3,
    name: 'Abdelslam Taha',
    country: 'Egypt',
    title: 'Founder and CEO YouthClimate Connect (YCC)',
    field: 'Health, Climate, and Education.',
    photoUrl: './mentors_photos/abdelslam-taha.png',
    linkedin: 'https://www.linkedin.com/in/abdelslam-taha-730587205',
    bio: 'As the Founder & CEO of YouthClimate Connect (YCC), I lead a nonprofit that empowers and educates youth, particularly from the Global South, to take action on climate change. My role emphasizes strategic leadership, program design, and partnership building to educate and empower 100,000 youth globally by 2030. YCC has successfully engaged participants from over 40 countries through programs on climate advocacy, sustainability, and AI in education.  I am a graduate doctor with a Bachelor of Medicine degree from Zagazig University. My work bridges the fields of health, climate, and education. Leveraging my expertise in public speaking, session management, and cross-functional team leadership, I aim to amplify underrepresented voices and strengthen equitable climate education. My commitment is to equip youth with the tools they need to lead impactful community-driven initiatives.',
    color: '#059669'
  }, 
  {
    id: 4,
    name: 'Mohamed Osman',
    country: 'Qatar',
    title: 'Researcher',
    field: 'Artificial Intelligence.',
    photoUrl: './mentors_photos/mohamed-osman.png',
    linkedin: 'https://www.linkedin.com/in/mohamed-osman-2000932b2',
    bio: 'I am a researcher with 3 years of experience in research, and Artificial Intelligence. I hold a Master degree from Qatar University. I believe in the importance of giving back to the community, and I can help those in their early careers in AI or Research.',
    color: '#059669'
  },
  {
    id: 5,
    name: 'Mozen Mertami',
    country: 'United States',
    title: 'R&D Packaging Scientist',
    field: 'Engineering, Organizing, & Philanthropy',
    photoUrl: './mentors_photos/mozen-mertami.png',
    linkedin: 'https://www.linkedin.com/in/mozen-mertami/',
    bio: 'My name is Mozen Mertami, and I currently work as an engineer at P&G while also staying heavily involved in community advocacy and philanthropic initiatives. A lot of my work has focused on supporting Sudanese and displaced communities through organizing, fundraising, and creating spaces for connection and growth. I’m passionate about helping people navigate both personal and professional goals, especially for those who may not always see representation in certain fields.',
    color: '#059669'
  },
  {
    id: 6,
    name: 'Zeinab Haroon',
    country: 'Sudan',
    title: 'Founder NextStep language & Tech',
    field: 'Machine Intelligence - Al Alignment',
    photoUrl: './mentors_photos/zeinab-haroon.png',
    linkedin: 'https://www.linkedin.com/in/zeinab-haroon-468bb3131',
    bio: 'I am a Sudanese researcher and educator with a First Class in Physics from the University of Khartoum and a Masters in Machine Intelligence from AMMI (AIMS Rwanda). I have taught machine learning and physics for over five years at AIMS Rwanda and Khartoum University, and in 2018 I founded the Sudanese Marie Curie Initiative to bring STEM workshops to Sudanese students.',
    color: '#059669'
  },
  {
    id: 7,
    name: 'Zeriab Fadol',
    country: 'United States',
    title: 'FZ Tech Founder / Salesforce Solution Architect',
    field: 'Salesforce - Customer Relationship Management (CRM)',
    photoUrl: './mentors_photos/zeriab-fadol.png',
    linkedin: 'https://www.linkedin.com/in/zeriab-fadol-400165172',
    bio: 'Results-driven Salesforce professional with 6+ years of experience in administration, development, and business analysis. Proven track record of delivering innovative solutions, driving efficiency, and generating cost/time savings. Skilled in Salesforce Sales Cloud, Service Cloud, Field Service Lightning, and Marketing Cloud.',
    color: '#059669'
  },
  {
    id: 8,
    name: 'Mohamed Elamin Ahmed',
    country: 'Sudan',
    title: 'Lecturer, IGCSE Qualified Teacher',
    field: 'English, English Literature, Physics, Mathematics, Science',
    photoUrl: './mentors_photos/mohamed-saber.jpg',
    linkedin: 'https://www.linkedin.com/in/mohamed-elamin-ahmed-84663a223',
    bio: 'Dedicated to stand and support students in their academic and personal development. With a strong background in teaching and mentoring, I strive to create an environment where students can thrive and reach their full potential.',
    color: '#059669'
  },
  {
    id: 9,
    name: 'Mohammed Sabri',
    country: 'Germany',
    title: 'Physicist',
    field: 'Experimental physics',
    photoUrl: './mentors_photos/mohammed-sabri.png',
    linkedin: 'https://www.linkedin.com/in/msgm',
    bio: 'Sudanese experimental physicist based in Germany with an international education and research experience in Sudan and Europe.',
    color: '#059669'
  },
  {
    id: 10,
    name: 'Yassir Elrayah',
    country: 'United States',
    title: 'Senior Data Scientist',
    field: 'AIML & Data Science and IT in general',
    photoUrl: './mentors_photos/yassir-elrayah.jpg',
    linkedin: 'https://www.linkedin.com/in/yassirelrayah/',
    bio: 'Senior Data Scientist with over 14 years of experience in machine learning, statistical modeling, and large-scale analytics across automotive, marketing science, and geospatial domains. Currently working at Dominos, focusing on Media Mix Modeling and marketing performance optimization, with previous experience at General Motors in safety analytics and connected vehicle data science. Holds a PhD in Technology along with master’s degrees in Computer Science and Civil Engineering, combining deep technical expertise with strong business impact and applied AI innovation.',
    color: '#059669'
  },
  {
    id: 11,
    name: 'Ilham Elsayed',
    country: 'United States',
    title: 'Professor',
    field: 'Engineering',
    photoUrl: './mentors_photos/ilham-elsayed.png',
    linkedin: 'https://www.linkedin.com/in/ilham-elsayed-ph-d-47031830',
    bio: 'I’d love to give some of my long experience to my home country new generations. I have an over 20 years of experience in teaching mentoring.',
    color: '#059669'  
  }, 
  {
    id: 12,
    name: 'Hafiz Fathelrahman',
    country: 'Saudi Arabia ',
    title: 'Assistant Professor',
    field: 'Physics',
    photoUrl: './mentors_photos/hafiz-fadlalla.png',
    linkedin: 'https://www.linkedin.com/in/hafizfathbabeker',
    bio: 'I gained experience in my scientific life from previous generations, and I will pass on all my scientific experiences to future generations.',
    color: '#059669'
  },
  { 
    id: 13,
    name: 'Saeeda Daoud',
    country: 'United States',
    title: 'Senior QA automation engineer',
    field: 'Information technology',
    photoUrl: './mentors_photos/saeeda-daoud.png',
    linkedin: 'https://www.linkedin.com/in/saeeda-daoud',
    bio: 'I am a Sudanese QA Automation Engineer with experience working in software testing and technology in the United States. I have a background in Physics and a strong interest in mentoring, continuous learning, and helping others grow professionally. I enjoy supporting students and young professionals with career guidance, interview preparation, and building confidence.',
    color: '#059669'
  },
  {
    id: 14,
    name: 'Tarig Omer',
    country: 'United States',
    title: 'Research Scientist',
    field: 'Civil Engineering - Construction Engineering and Management',
    photoUrl: './mentors_photos/tarig-omer.png',
    linkedin: 'https://www.linkedin.com/in/tarig-omer-ph-d-a-m-asce-6b814511/',
    bio: 'I am a civil engineering professional with experience in construction management, infrastructure utilities, research, and teaching. I earned multiple graduate degrees, including a Ph.D. in Civil Engineering from Iowa State University, and I have over 15 years of industry experience managing construction and quality assurance projects. I enjoy mentoring students and professionals, supporting community initiatives, and helping others achieve their academic and career goals. My interests include project management, lean construction, utility coordination, and leadership development.',
    color: '#059669'
  },
  {
    id: 15,
    name: 'Mamadou Abozeid',
    country: 'United Arab Emirates',
    title: 'Senior Creative Producer | Founder',
    field: 'Mass Communication in Digital media and GenAI',
    photoUrl: './mentors_photos/mamadou-abozeid.png',
    linkedin: 'https://www.linkedin.com/in/mamadouabozeid/',
    bio: 'I carry an experience of 16 years in the media sector. Having founded 2 production/post productions units and worked across 27 cities, I understand the impact and value my experience can bring to someone who seeks guidance in our sector.',
    color: '#059669'
  },
  {
    id: 16,
    name: 'Fatimah Mahmoud',
    country: 'Uganda',
    title: 'Freelance Graphic Designer',
    field: 'Information Technology and social media Graphic Design',
    photoUrl: './mentors_photos/fatimah-abdelmomen.JPG',
    linkedin: 'https://www.linkedin.com/in/fatom-mamoud-adam-38873b394/',
    bio: 'I am Fatimah Mahmoud Adam Abdelmomen. I am a recent Information Technology graduate from The National Ribat University, currently living in Kampala, Uganda. I work as a freelance graphic designer and am eager to learn app development.',
    color: '#059669'
  },
  { 
    id: 17,
    name: 'Alaa Rifat',
    country: 'Saudi Arabia',
    title: 'Founder and CEO of a Linguistic Services and Training Company',
    field: 'Proofreading and editing for Arabic',
    photoUrl: './mentors_photos/alaa-alnaeem.png',
    linkedin: 'https://www.linkedin.com/in/alaa-rifat-8b25a1293',
    bio: 'مستشارة لغوية، وكاتبة، ومؤسسة مجموعة رفعة المحدودة للخدمات والتدريب اللغوي. دققتُ عشرات الأعمال الأدبية والمعرفية؛ العربية منها والمترجمة، وأسعى عبر برامجي التدريبية إلى تعميق الوعي بضرورة ضبط الجودة اللغوية للنصوص العربية.',
    color: '#059669'
  },
  { 
    id: 18,
    name: 'Saifeldin M. Siddeeg',
    country: 'United Kingdom/Saudi Arabia',
    title: 'Associate professor',
    field: 'Inorganci Chemistry/ Environmental Radiochemistry',
    photoUrl: './mentors_photos/saifeldin-siddeeg.png',
    linkedin: 'https://www.linkedin.com/in/saifeldin-m-siddeeg-cchem-6a608432/',
    bio: 'A Chartered Chemist (CChem, MRSC) specialising in Inorganic Chemistry and Environmental Radiochemistry. I earned my PhD from the University of Manchester (UK) in 2013, where I investigated the geochemistry of natural radionuclides, and I recently returned to Manchester for advanced X-ray absorption spectroscopy (XAS) work at Diamond Light Source. Currently, I serve as Associate Professor at King Khalid University (Saudi Arabia), where I teach Radiation & Nuclear Chemistry and supervise postgraduate students. My research focuses on radionuclide mobility, nanomaterial-based remediation, and environmental risk assessment, with a strong commitment to international collaboration and supporting the next generation of STEM researchers.',
    color: '#059669'
  },
  {
    id: 19,
    name: 'Mazz Ahmed',
    country: 'United Arab Emirates',
    title: 'Vocational Instructor/Business Development',
    field: 'Electronics Engineering/International Trade',
    photoUrl: './mentors_photos/mazz-ahmed.jpg',
    linkedin: 'https://www.linkedin.com/in/mazz-a-ahmed/',
    bio: 'A teacher of Electrical and Electronics Engineering, and business consulting.',
    color: '#059669'
  },
  {
    id: 20,
    name: 'Shahd Elkheir',
    country: 'Egypt',
    title: 'Interior designer/ furniture designer',
    field: 'Interior design and visual arts (graphic design)',
    photoUrl: './mentors_photos/shahd-elkheir.png',
    linkedin: 'https://www.linkedin.com/in/shahd-elkheir-402450211/',
    bio: 'Double majored in architecture and visual arts but chose the interior design path, did two diplomas in interior design, latest one at Cairo design district and been working as an interior designer for the past 4 years. I believe that sharing knowledge is essential for growth and and the key to a stronger community.',
    color: '#059669'
  },
  {
    id: 21,
    name: 'Ahmed Hussein',
    country: 'Sudan',
    title: 'Biomedical Engineer',
    field: 'Biomedical engineer/Physics',
    photoUrl: './mentors_photos/ahmed-ossman.jpg',
    linkedin: 'https://www.linkedin.com/in/eng-ahmed-hussein/',
    bio: 'احب مساعدة الأخرين في التخصصات آلتي احبها',
    color: '#059669'
  },
  {
    id: 22,
    name: 'Soha Al-kanzy',
    country: 'United Arab Emirates',
    title: 'Senior medical Auditor - Insurance specialist',
    field: 'Health Insurance',
    photoUrl: './mentors_photos/soha-al-kanzy.png',
    linkedin: 'https://www.linkedin.com/in/dr-soha-al-kanzy-653906203/',
    bio: 'I’m a Medical Auditor working in the UAE health insurance field, and I’m passionate about helping healthcare professionals and Sudanese students better understand this career path. Through my TikTok account, I share simple and practical content about health insurance, medical auditing, monitoring, and data analysis, while explaining how physicians can build successful careers in this field. My goal is to make the industry easier to understand and more accessible for anyone interested in exploring opportunities beyond clinical practice.',
    color: '#059669'
  },
  {
    id: 23,
    name: 'Maha Abdalla Zakaria',
    country: 'Uganda',
    title: 'Stores manager',
    field: 'Statistics',
    photoUrl: './mentors_photos/maha-zakaria.jpg',
    linkedin: 'https://www.linkedin.com/in/maha-abdalla-zakaria-999b42224/',
    bio: '',
    color: '#059669'
  },
  {
    id: 24,
    name: 'Ali Mohamed',
    country: 'Saudi Arabia',
    title: 'Anesthesia Technician',
    field: 'Anesthesia',
    photoUrl: './mentors_photos/ali-mohamed.png',
    linkedin: 'https://www.linkedin.com/in/ali-mohamed-039317384',
    bio: '',
    color: '#059669'
  },
  {
    id: 25,
    name: 'Ahmed Elfadil',
    country: 'Saudi Arabia',
    title: 'Technical Instructor (mechanical engineer)',
    field: 'Earthmoving heavy equipment, oil and gas (piping, valves and pumps), Mechatronics',
    photoUrl: './mentors_photos/ahmed-ahmed.png',
    linkedin: 'https://www.linkedin.com/in/ahmed-elfadil-1179ba16b/',
    bio: 'I am a Mechanical and Mechatronics Engineer with strong interests in technology, innovation, and practical engineering solutions. Alongside my experience in heavy equipment, hydraulic, and electrical systems, I have developed skills in Python programming, Artificial Intelligence, and embedded systems using Raspberry Pi and Arduino for automation and smart control projects. I am passionate about creativity and innovation, and I enjoy combining engineering knowledge with modern technologies to solve real-world problems, develop training solutions, and inspire students to explore engineering and technology fields with confidence.',
    color: '#059669'
  },
  {
    id: 26,
    name: 'Najlaa Dahab',
    country: 'United Arab Emirates',
    title: 'Language Trainer',
    field: 'Education',
    photoUrl: './mentors_photos/najlaa-dahab.png',
    linkedin: 'https://www.linkedin.com/in/najlaa-dahab-2a9a5b1b3/',
    bio: 'I am an enthusiastic English language teacher, with a positive character that makes the learning process enjoying.',
    color: '#059669'
  },
  {
    id: 27,
    name: 'Rayyan Abdalla',
    country: 'United States',
    title: 'Graduate Research Assistant',
    field: 'Machine Learning for Signal Processing',
    photoUrl: './mentors_photos/rayyan-abdalla.png',
    linkedin: 'https://www.linkedin.com/in/rayyan-abdalla/',
    bio: 'I am an ECE graduate student at the University of Maryland, College Park (UMD) with a broad experience in digital signal processing, statistical pattern recognition, and optimization. My research focuses on developing interpretable machine learning architectures for signal processing, with particular interest in physics-informed deep learning for biomedical and sensing applications. I am currently interested in contrastive alignment techniques and multimodal representation learning in large foundation models, mainly in settings involving heterogeneous and/or limited data.',
    color: '#059669'
  },
  {
    id: 28,
    name: 'Mohammed Gibreel',
    country: 'Sudan',
    title: 'Medical student (5th year)',
    field: 'Medicine',
    photoUrl: './mentors_photos/mohammed-gibreel.png',
    linkedin: 'https://www.linkedin.com/in/mohammed-gibreel-27674b28a/',
    bio: 'I am a medical student at Sheikh Abdallah El-Badri University with a strong passion for public health, healthcare training, and humanitarian response. I have coordinated multiple mobile medical clinics and health convoys that served over 2,000 beneficiaries in underserved and disaster-affected communities across Sudan. As a certified Training of Trainers (TOT) facilitator, I enjoy building the capacity of volunteers and healthcare teams while contributing to impactful community health initiatives',
    color: '#059669'
  },
  {
    id: 29,
    name: 'Onab Zainelabdien',
    country: 'Netherlands',
    title: 'Student',
    field: 'Marketing',
    photoUrl: './mentors_photos/onab-zainelabdien.png',
    linkedin: 'https://www.linkedin.com/in/onab-zainelabdien-404112232',
    bio: 'I am currently studying International business in Rotterdam university , specialising in marketing.',
    color: '#059669'
  },
  {
    id: 30,
    name: 'Nuha Mahmoud',
    country: 'Germany',
    title: 'Toxicologist at Procter & Gamble',
    field: 'Toxicology / Human Health Risk Assessment',
    photoUrl: './mentors_photos/nuha-mahmoud.png',
    linkedin: 'https://www.linkedin.com/in/nuha-e-mahmoud/',
    bio: 'I’m a passionate scientist with a PhD in Pharmaceutical Biology and a strong foundation in pharmaceutical sciences. Today, as a toxicologist, I focus on human and product safety, ensuring that scientific knowledge is thoughtfully applied to create safe products. I thrive at the intersection between science and real-world consumer needs, where rigorous research guides decisions that support product safety. Currently, within P&G, I am working on the safety of menstrual products. The menstrual care space inspires my social commitment and dedication to product safety. I value integrity, ethics, responsibility, and I am motivated to learn, communicate, and make a meaningful difference in people lives.',
    color: '#059669'
  },
  //{
  //  id: 30,
  //  name: 'Wigdan Seedahmed',
  //  country: 'Sweden',
  //  title: 'Senior Analyst / Senior Advisor / Consultant',
  //  field: 'International Relations',
  //  photoUrl: './mentors_photos/wigdan-seedahmed.png',
  //  linkedin: 'https://www.linkedin.com/in/wigdan-seedahmed',
  //  bio: 'I am a Business Development Executive with 15 years of international experience. I specialize in transforming data and technologies into actionable strategies and solutions that drive growth.',
  //  color: '#059669'
  //},
  {
    id: 31,
    name: 'Mohamed Sharfi',
    country: 'Malaysia',
    title: 'RF and Microwaves engineer',
    field: 'Radio freq and microwaves circuits & some power electronics',
    photoUrl: './mentors_photos/mohamed-omer.png',
    linkedin: 'https://www.linkedin.com/in/msharfi',
    bio: 'A fresh graduate from utm malaysia, worked in wireless models pcb design and testing. Currently working in an RnD company to help screening cancer with Wireless technologies.',
    color: '#059669'
  },
  {
    id: 32,
    name: 'Awad Elkarim Mohamed Ahmed',
    country: 'United Arab Emirates',
    title: 'Senior Subject Matter Expert: Internal Audit and GRC',
    field: 'Internal Audit- Governance, Risk, Compliance (GRC)',
    photoUrl: './mentors_photos/awad-ahmed.png',
    linkedin: 'https://www.linkedin.com/in/awadelkarim/',
    bio: 'Professional Internal audit, GRC, and anti-corruption activist with 25+ years of international exposure experience',
    color: '#059669'
  },
  {
    id: 33,
    name: 'Mohammed Abdeen',
    country: 'Saudi Arabia',
    title: 'Research and development Supervisor',
    field: 'Pharmaceutical manufacturing',
    photoUrl: './mentors_photos/mohamed-abdeen.png',
    linkedin: 'https://www.linkedin.com/in/m-abdeen/',
    bio: '',
    color: '#059669'
  },
  {
    id: 34,
    name: 'Abubakr Ibrahim',
    country: 'Spain',
    title: 'Independent researcher',
    field: 'Astrophysics, Pulsar astronomy, High-energy Astrophysics.',
    photoUrl: './mentors_photos/abubakr-ibrahim.png',
    linkedin: 'https://www.linkedin.com/in/abubakryagob/',
    bio: 'An astrophysicist working in the field of radio astronomy, transient events, and pulsar studies. I focused on both research and educational outreach, including initiatives supporting Sudanese students and researchers affected by the ongoing war in Sudan (i.e. ICTP-PWF Sudan, Zool Astro). I want to make astronomy and scientific research more accessible and help students navigate academic and research opportunities internationally.',
    color: '#059669'
  },
  {
    id: 35,
    name: 'Sarah Eissa, Pharm.D',
    country: 'United States',
    title: 'Pharmacist In Charge',
    field: 'Pharmacy',
    photoUrl: './mentors_photos/sarah-eissa.png',
    linkedin: 'https://www.linkedin.com/in/sarah-eissa-pharmd-rph-9027275b/',
    bio: 'I am a pharmacist with a strong interest in community health, chronic disease state management, and preventive care. I am also a community leader and a passionate advocate for education and professional growth. In addition, I am deeply committed to serving my community through volunteer work and nonprofit organizations.',
    color: '#059669'
  },
  {
    id: 36,
    name: 'Shams Eissa',
    country: 'Italy',
    title: 'Physics teacher IB/ IGCSE',
    field: 'Physics/ Quantitative Biology',
    photoUrl: './mentors_photos/shams-eissa.png',
    linkedin: 'https://www.linkedin.com/in/shams-eissa/',
    bio: 'I am physics teacher with a great passion for biological sciences, singing, piano and Sudanese toub design. I have recently secured a job at one of the top 5 IB schools in Europe and I’m very proud to be a Sudanese in that position.',  
    color: '#059669'
  },
  {
    id: 37,
    name: 'Alaa Mohammed Idris Bakhit',
    country: 'Spain',
    title: 'Postdoctoral Researcher',
    field: 'Physics of Advanced Materials and Nanostructures',
    photoUrl: './mentors_photos/alaa-mohamed.png',
    linkedin: 'https://www.linkedin.com/in/alaa-mohammed-idris-bakhit-3aa46310b/',
    bio: '',
    color: '#059669'
  },
  {
    id: 38,
    name: 'Mona Saeed',
    country: 'United States',
    title: 'Data Scientist',
    field: 'Technology/Engineering',
    photoUrl: './mentors_photos/mona-saeed.png',
    linkedin: 'https://www.linkedin.com/in/mona-tagelsir/',
    bio: 'I am a Sudanese data scientist and recent graduate of Duke University’s Master’s in Data Science program, where I attended on a full merit scholarship. My work focuses on machine learning and AI for social impact, with projects spanning humanitarian aid, climate, healthcare, and financial systems. Beyond the technical side, I care deeply about community building and women empowerment, especially encouraging more women to pursue opportunities and leadership in STEM fields.',
    color: '#059669'

  },
  {
    id: 39,
    name: 'Israa Bashir',
    country: 'United Kingdom',
    title: 'Junior AI Engineer',
    field: 'Artificial Intelligence',
    photoUrl: './mentors_photos/israa-bashir.png',
    linkedin: 'https://www.linkedin.com/in/israa-bashir-524665173/',
    bio: 'I am an AI engineer based in the UK, originally from Khartoum, where I studied Electrical & Electronic Engineering at the University of Khartoum before completing an MSc in Artificial Intelligence at the University of Edinburgh as a Google DeepMind Scholar. Over the past three years I have built and deployed production AI systems, including NLP and LLM platforms for the United Nations across Sudan and Egypt. I also co-founded Sudans first Women in Machine Learning & Data Science chapter, where I have mentored 5+ students and run technical workshops. Helping the next generation of Sudanese students find their footing in tech is something I care about a lot.',
    color: '#059669'
  },
  {
    id: 40,
    name: 'Mohamed Alwathiq', 
    country: 'Malaysia',
    title: 'Student',
    field: 'Electrical Engineering, AI and ML',
    photoUrl: './mentors_photos/mohamed-alwathiq.png',
    linkedin: 'https://www.linkedin.com/in/mohamed-alwathiq/',
    bio: 'My name is Mohamed, an electrical engineering student at UTM with an interest in AI and ML. Before coming to Malaysia, I was a mechanical engineering student at the University of Khartoum. Since I was in Sudan, I have always chased opportunities and scholarships before the war broke out and the situation became more dire, like now. I am currently involved in Mantis AI team, led by the CSAIL lab at MIT.',
    color: '#059669'
  },
  {
    id: 41,
    name: 'Tarig Mohamed',
    country: 'United States',
    title: 'SQL developer/Business Intelligence',
    field: 'Information Technology',
    photoUrl: './mentors_photos/tarig-mohamed.png',
    linkedin: 'https://www.linkedin.com/in/tarig-mohamed-2b69863a2/',
    bio: 'SQL Server Developer and Business Intelligence Developer with 7 years of experience in protect, monitor, improve, design, and build on the database, reports and business intelligence application. Proficient with SSMS, Crystal Report, SSRS, T-SQL, Qlik Sense Power BI and Tableau. Excellent interpersonal and communications skills in working with individuals from diverse backgrounds and disciplines',
    color: '#059669'
  },
  {
    id: 42,
    name: 'Mazin AbdelGadir',
    country: 'Egypt',
    title: 'Architect & UN Youth Advisor',
    field: 'Architecture & Design',
    photoUrl: './mentors_photos//mazin-abdelGadir.png',
    linkedin: 'https://www.linkedin.com/in/mazin-abdelgadir-a907b2288/',
    bio: 'Mazin is a Sudanese youth leader and Architect in sustainable architecture. And he now serves as a UN Youth Advisor as part of the United Nations Country Team (UNCT) and is a member of the Youth Advisory Board (YAB).  Previously, he has worked for multiple firms, including DAL Group, and has served as a Team Supervisor, Teaching Assistant and Tutor for many Sudanese Universities, among other roles. Currently, he is a 2026 Fellow of the Local Pathways Fellowship (LPF) under the UN Sustainable Development Solutions Network - Youth Initiative, where he collaborates with 81 young urban leaders globally to localize the Sustainable Development Goals and contribute to resilient, inclusive cities.',
    color: '#059669'
  },
  {
    id: 43,
    name: 'Ashraf Hagelnur',
    country: 'United Arab Emirates',
    title: 'Commercial Operations Director',
    field: 'Satellite Communication',
    photoUrl: './mentors_photos/ashraf-hagelnur.png',
    linkedin: 'https://www.linkedin.com/in/ashraf-hagelnur-8ba49339/',
    bio: 'I specialize in the "Architecture of Growth"—building resilient organizations that thrive in complex environments. Whether it is ensuring "Business Continuity" in high-risk regions or designing "Market Entry" strategies for "Emerging Markets".',
    color: '#059669'
  },
  {
    id: 44,
    name: 'Sara Malik',
    country: 'Ireland',
    title: 'General Practitioner',
    field: 'Medicine',
    photoUrl: './mentors_photos/sara-malik.png',
    linkedin: 'https://www.linkedin.com/in/dr-sara-malik-97594b71/',
    bio: 'I work as a General Practitioner and very passionate about education and leadership developement.',
    color: '#059669'
  },
  {
    id: 45,
    name: 'Khalid Osman',
    country: 'United States',
    title: 'Senior Yield Development Engineer',
    field: 'Semiconductor and R&D',
    photoUrl: './mentors_photos/khalid-osman.png',
    linkedin: 'https://www.linkedin.com/in/khosman/',
    bio: 'I have a master degree in chemistry and been working with Intel for over 11 years in manufacturing, advanced packaging technology development (APTD: S&W), progressing from technician to lab owner to yield analysis engineer and currently senior yield development engineer. Through my career I handled many different roles ranging from managing lab operations, equipment service contracts and PO management, to analyzing samples, method development, leading cross-functional task forces, DOE experiments, validating white papers for new tools and chemistries, failure analysis, and process troubleshooting in research and development environment. I provided technical leadership in driving process improvements, mentoring team members, and leading technical decision-making for complex analytical challenges. I am skilled in data interpretation, LIMS management, SPC and material characterization using advanced analytical instrumentation.',
    color: '#059669'
  },
  {
    id: 63,
    name: 'Sahar Atif',
    country: 'United States',
    title: 'Teaching Assistant, Harvard',
    field: 'Law, Human rights, Public Adminstration',
    photoUrl: './mentors_photos/sahar-atif.png',
    linkedin: 'https://www.linkedin.com/in/sahar-atif-3a331a57/',
    bio: 'I am a lawyer, educator, and community leader passionate about empowering others through mentorship and education. As a former university lecturer in Sudan, I am committed to helping young people develop their potential and advance their careers.',
    color: '#059669'
  },
  {
    id: 47,
    name: 'Waad Alnosh',
    country: 'Qatar',
    title: 'Research Scientist',
    field: 'Cancer research',
    photoUrl: './mentors_photos/waad-alnosh.png',
    linkedin: 'https://www.linkedin.com/in/waad-ahmed99/',
    bio: 'I am a biomedical research scientist and current Master’s student in Genomics and Precision Medicine at Hamad Bin Khalifa University in Qatar with hands-on experience in diabetes and cancer research. I have worked in leading research environments in Qatar, including the Qatar Biomedical Research Institute, Hamad Medical Corporation, and Weill Cornell Medicine-Qatar, where I gained experience in genomic sequencing, cell culture, molecular biology, and data analysis. I am passionate about advancing healthcare through scientific research and enjoy working collaboratively to contribute to innovative research projects.',
    color: '#059669'
  },
  {
    id: 48,
    name: 'Alaa Abdelraheem',
    country: 'Saudi Arabia',
    title: 'Project Manager/Founder of YouthGuidance (تمهيد)',
    field: 'Project management',
    photoUrl: './mentors_photos/alaa-abdelraheem.png',
    linkedin: 'https://www.linkedin.com/in/alaa-abdelraheem-mba-pmp%C2%AE-379264115/',
    bio: 'A results-driven project management professional with a strong track record of delivering high-impact projects across public, private, and non-profit sectors. My expertise spans digital business, strategic planning, and governance, with a consistent focus on driving innovation and aligning initiatives with organisational goals. I am recognised for leading cross-functional teams, steering complex programmes from inception to delivery, and translating data-driven insights into sound decisions — all within fast-paced and ever-changing environments. Founder of YouthGuidance (تمهيد): https://www.linkedin.com/company/gdp-platform/about/, and  I am currently working on Tech Solution Mentor.',
    color: '#059669'
  },
  {
    id: 49,
    name: 'Amal Ali',
    country: 'Qatar',  
    title: 'Research Assistant',
    field: 'Data analysis',
    photoUrl: './mentors_photos/amal-ali.png',
    linkedin: 'https://www.linkedin.com/in/amal-ali-/',
    bio: '',
    color: '#059669'
  },
  {
    id: 50,
    name: 'Yousif M. Elsheikh',
    country: 'Germany',
    title: 'Research Associate',
    field: 'Aircraft Systems',
    photoUrl: './mentors_photos/yousif-elsheikh.png',
    linkedin: 'https://www.linkedin.com/in/yoelsheikh/',
    bio: 'I am interested in safety-critical/deterministic compute platforms and the robustness of ML applications. I am also working on formal verification of software.',
    color: '#059669'
  },
  {
    id: 51,
    name: 'Yasmeen Siddig',
    country: 'United States',
    title: 'Software QA Tester II',
    field: 'Software Development/Product Design',
    photoUrl: './mentors_photos/yasmeen-siddig.png',
    linkedin: 'https://www.linkedin.com/in/yasmeen-siddig/',
    bio: 'I’m an industrial designer with experience in product and digital design, currently working in the software development space. I’m passionate about sharing knowledge and fostering growth, and I’m excited to connect with and support sudanese students on their journey.',
    color: '#059669'
  },
  {
    id: 52,
    name: 'Sarah Saad',
    country: 'United Arab Emirates',
    title: 'Personal Assistant and Administrative Manager',
    field: 'Oil and Gas, Training, Real State Management',
    photoUrl: './mentors_photos/sarah-saad.png',
    linkedin: 'https://www.linkedin.com/in/sarah-s-31818135/',
    bio: 'Strong personality and hard worker with over 20 years experience in Dubai, UAE.',
    color: '#059669'
  },
  {
    id: 53,
    name: 'Muhtadi Idrees',
    country: 'Italy',
    title: '',
    field: 'Physics & Materials science',
    photoUrl: './mentors_photos/muhtadi-idrees.png',
    linkedin: 'https://www.linkedin.com/in/muhtadi-idrees-90094a136/',
    bio: '',
    color: '#059669'
  },
  {
    id: 54,
    name: 'Mohamed Saeed',
    country: 'Germany',
    title: 'Pharma Industry Consultant',
    field: 'Pharma Industry, Biomedical Research',
    photoUrl: './mentors_photos/mohamed-saeed.png',
    linkedin: 'https://www.linkedin.com/in/moe-saeed/',
    bio: 'I am a research scientist, university associate professor, and pharmaceutical consultant based in Germany, holding a PhD in Pharmacy and bringing over a decade of industry expertise to my work. My technical proficiency spans Good Manufacturing Practice (GMP) regulations, sterile pharmaceutical production technologies, and comprehensive Quality Risk Management (QRM) methodologies. Throughout my career, I have built a proven track record in cancer research, pharmacogenomics, and strategic leadership, consistently driving both regulatory adherence and operational excellence. Furthermore, my entrepreneurial drive has led me to establish an international pharmaceutical trading company and a specialized consultancy to empower and train fellow industry professionals.',
    color: '#059669'
  },
  {
    id: 55,
    name: 'Abdelrahman Elsheikh',
    country: 'Saudi Arabia',
    title: 'Senior Software Engineer (Mobile Apps Specialist)',
    field: 'Designing & Developing Tech Solutions. Specialized in mobile apps development',
    photoUrl: './mentors_photos/abdelrahman-elsheikh.png',
    linkedin: 'https://www.linkedin.com/in/abdelrahman-elsheikh-889604104/',
    bio: 'Entrepreneur and Apps Specialist with proven experience turning ideas into successful, market-ready products. Founded and grew a company with 20+ employees serving customers globally, leading cross-functional teams and overseeing product development from concept to launch.',
    color: '#059669'
  },
  {
    id: 56,
    name: 'Mohammed Abdalla',
    country: 'Saudi Arabia',
    title: 'General Surgery Registrar',
    field: 'Medicine',
    photoUrl: './mentors_photos/mohammed-abdalla.png',
    linkedin: 'https://www.linkedin.com/in/mohammed-abdalla-46a928107/',
    bio: '',
    color: '#059669'
  },
  {
    id: 57,
    name: 'Ashgan Mustafa',
    country: 'Rwanada',
    title: 'Senior Software Engineer',
    field: 'Software Engineering',
    photoUrl: './mentors_photos/ashgan-mustafa.png',
    linkedin: 'https://www.linkedin.com/in/ashgan-mustafa/',
    bio: 'I currently work with Spring ACT, a Swiss NGO, where I co-developed Sophia, an AI platform supporting domestic violence survivors that reached 42,000+ conversations across 172 countries and won the UN Global AI for Good Impact Award 2025. Across my career I have built everything from e-wallets to educational and content platforms while working across Sudan, Rwanda, Uganda, and remote international teams. I am passionate about using technology for social impact and helping the next generation of Sudanese developers find their path.',
    color: '#059669'
  },
  {
    id: 58,
    name: 'Safaa Mamoun',
    country: 'Italy',
    title: 'PhD Student',
    field: 'Neuroscience',
    photoUrl: './mentors_photos/safaa-mamoun.png',
    linkedin: 'https://www.linkedin.com/in/safaa-mamoun-abdelmageid-ali-6b062a102/',
    bio: 'I am a neuroscientist, will get my Phd by December 2026, I am working with behavioural analysis using computational tools.',
    color: '#059669'
  },
  {
    id: 59,
    name: 'Abdalrhaman Koko',
    country: 'United Kingdom',
    title: 'Senior Scientist',
    field: 'Materials Science',
    photoUrl: './mentors_photos/abdalrhaman-koko.png',
    linkedin: 'https://www.linkedin.com/in/abdalrhaman-koko-5bb002201/',
    bio: 'I research how metals deform, accumulate damage and fail under extreme conditions. My work combines micromechanics, fracture, advanced imaging and modelling to improve the safety of materials used in energy, aerospace and manufacturing. I also contribute to engineering standards and public knowledge, including major Wikipedia work on African and materials science topics.',
    color: '#059669'
  },
  {
    id: 60,
    name: 'Marwa Mohamed',
    country: 'United Arab Emirates',
    title: 'Procurement Officer',
    field: 'Oil & Gas and Mining Sectors',
    photoUrl: './mentors_photos/marwa-mohamed.png',
    linkedin: 'https://www.linkedin.com/in/marwaabdelmahmoud/',
    bio: 'I am a multidisciplinary professional with experience across Asset Integrity, Procurement & Supply Chain, Project Coordination, Data Management, and Geology. My career has exposed me to diverse industries and responsibilities, which has strengthened my adaptability, problem-solving skills, and ability to learn quickly. I enjoy taking on new challenges and finding innovative ways to improve processes, even in routine tasks.',
    color: '#059669'
  },
  {
    id: 61,
    name: 'Weam Ahmed',
    country: 'United Arab Emirates',
    title: 'Communications Consultant and Career Coach',
    field: 'Communication-Career Transition & Development',
    photoUrl: './mentors_photos/weam-ahmed.png',
    linkedin: 'https://www.linkedin.com/in/weamahmed-marketingcommunication/',
    bio: '',
    color: '#059669'
  },
  {
    id: 62,
    name: 'Sarah Musa',
    country: 'United Kingdom',
    title: 'Research Associate (Qualitative)',
    field: 'Health research-Community engagement and co-production',
    photoUrl: './mentors_photos/sarah-musa.png',
    linkedin: 'https://www.linkedin.com/in/sarah-musa-33ab92206/',
    bio: 'I am a Medical Doctor by background studied at the University of Gezira.  I won the university of Sheffield Africa Scholarship, and I am now Qualitative Researcher at the University of Sheffield School of Health Research.',
    color: '#059669'
  },
  {
    id: 63,
    name: 'May Atif',
    country: 'United Arab Emirates',
    title: 'MEA Sr. Learning & Leadership Development Manager',
    field: 'Human Resources - Learning and Development',
    photoUrl: './mentors_photos/may-atif.png',
    linkedin: 'https://www.linkedin.com/in/may-atif-44714b17/',
    bio: '',
    color: '#059669'
  },
   {
    id: 64,
    name: 'Iman Ahmed',
    country: 'Saudi Arabia',
    title: 'Quality Assurance and Quality Control Chemist',
    field: 'Chemistry',
    photoUrl: './mentors_photos/iman-ahmed.png',
    linkedin: 'https://www.linkedin.com/in/iman-ahmed-qa-qc',
    bio: 'I am a petroleum chemist with extensive experience in refinery operations, quality assurance, and laboratory analysis. Alongside my industrial career, I have a strong passion for chemistry education and mentoring. Over the years, I have participated in mentoring sessions focused on scholarship applications, training opportunities, and academic development. Recently, I founded the STEM Opportunities Network, a Telegram community dedicated to sharing educational and research opportunities and supporting applicants throughout the application process. I enjoy helping students and young professionals access opportunities that can advance their academic and professional careers.',
    color: '#059669'
  },
  {
    id: 65,
    name: 'Ahmed Abdelaziz',
    country: 'Saudi Arabia',
    title: 'Chief Operating Officer (COO)',
    field: 'Supply Chain Mangmnet',
    photoUrl: './mentors_photos/ahmed-abdelaziz.png',
    linkedin: 'https://www.linkedin.com/in/ahmed-abdelaziz-mba-cscp-cbm-pmp%C2%AE-pmi-acp%C2%AE-291b2b75/',
    bio: 'I am an operations and supply chain leader passionate about turning complex challenges into clear, practical solutions. With experience across Sudan and Saudi Arabia, I have led teams, improved business growth, and built data-driven systems in FMCG, hospitality, and retail. My goal is to support Sudanese youth by sharing leadership, business, and operational knowledge, helping them build skills, confidence, discipline, and future opportunities for their communities.',
    color: '#059669'
  },
  {
    id: 66,
    name: 'Zinah Abdelkareem',
    country: 'Uganda',
    title: 'Program Manager',
    field: 'Development and Humanitarian Work',
    photoUrl: './mentors_photos/zinah-abdelkareem.png',
    linkedin: 'https://www.linkedin.com/in/zinah-abdelkareem-bb948458/',
    bio: 'I am a humanitarian and community development professional with experience working with United Nations agencies, international NGOs. I founded a not-for-profit organization focused on youth empowerment, community development, and engagement. As a youth advocate, I am passionate about supporting young people and strengthening communities through youth and women led initiatives.',
    color: '#059669'
  },
  {
    id: 67,
    name: 'Shahd Abbas',
    country: 'Saudi Arabia',
    title: 'Monitoring and Evaluation Professional',
    field: 'Monitoring and Evaluation',
    photoUrl: './mentors_photos/shahd-abbas.png',
    linkedin: 'https://www.linkedin.com/in/shahd-abbas-a57895107/',
    bio: 'I am a Monitoring, Evaluation, Accountability, and Learning (MEAL/M&E) professional with experience in humanitarian and development programs, including developing monitoring systems and coordinating teams across sectors such as Health, Nutrition, Education, Child Protection, and WASH. I hold a Master’s degree in Environmental Science and am passionate about improving program quality through evidence-based approaches, learning, and effective data use. I am continuously developing my skills through professional opportunities, fellowships, and academic growth.',
    color: '#059669'
  },
  {
    id: 68,
    name: 'Raja Abdalnasir',
    country: 'Malaysia',
    title: 'Senior Executive, Business Performance Improvement',
    field: ' Business Planning - Strategy and Commercial',
    photoUrl: './mentors_photos/raja-abdalnasir.png',
    linkedin: 'https://www.linkedin.com/in/raja-abdalnasir/',
    bio: 'I am an engineer by degree and a business planner and strategist by profession, with over a decade of experience in the energy sector. I was fortunate to receive the PETRONAS Education Sponsorship Program, which exposed me to diverse cultures and perspectives early in my university years. I believe sustainable transformation requires both strategic execution and inclusive cultures where people feel recognized and empowered. I value leading with empathy as a guiding principle in driving meaningful change.',
    color: '#059669'
  },
  {
    id: 69,
    name: 'Hammam Abu obaida',
    country: 'Saudi Arabia',
    title: 'Digital Marketing Specialist',
    field: 'Marketing',
    photoUrl: './mentors_photos/hammam-abu-obaida.png',
    linkedin: '',
    bio: 'My name is Hamam Abu Obaida, and I specialize in digital marketing. I work in Saudi Arabia and can help you understand marketing and its tools from beginner to professional level. I can also advise you on how to leverage this field to develop your business or how to find a job in marketing.',
    color: '#059669'
  },
  {
    id: 70,
    name: 'Muntasir Adam',
    country: 'Sweden',
    title: 'Agentic AI Engineer',
    field: 'Software Engineering and Management',
    photoUrl: './mentors_photos/muntasir-adam.png',
    linkedin: 'https://www.linkedin.com/in/muntasir-adam-40890353/',
    bio: 'Software Engineer specializing in Agentic AI and LLM systems, currently completing an MSc in Software Engineering and Management at the University of Gothenburg (2024–2026).',
    color: '#059669'
  },
  {
    id: 71,
    name: 'Nasraldin Zakaria',
    country: 'Egypt',
    title: 'Teacher',
    field: 'Language, Education, Music, Performance',
    photoUrl: './mentors_photos/nasraldin-zakaria.png',
    linkedin: 'https://www.linkedin.com/in/nasir-zacki-221020328/',
    bio: 'Proud to have achieved a fulfilling balance between a successful career in performance and education and a happy family life. Fortunate to have turned my favorite hobby into a rewarding profession and to have found my perfect life partner in the love of my life. I believe that lasting success is built on passion, purpose, and meaningful relationships.',
    color: '#059669'
  },
  {
    id: 72,
    name: 'Mohamed Mohamed',
    country: 'United States',
    title: 'Process Development Engineer',
    field: 'Semiconductor Manufacturing | Advanced Packaging | Yield & Reliability | AI-Enabled Inspection',
    photoUrl: './mentors_photos/mohamed-mohamed.png',
    linkedin: 'https://www.linkedin.com/in/mohamed-m-63a00065/',
    bio: 'Process Development Engineer with 9+ years of experience across SiC wafer fabrication, advanced semiconductor assembly, thermoelectric devices, and high-reliability manufacturing. Proven record of leading NPI, technology transfer, process qualification, yield improvement, and automation from prototype through scalable production. Combines DOE, SPC, process capability, materials characterization, reliability engineering, and structured root-cause analysis with AI/ML-enabled inspection to improve yield, throughput, quality, and cost. Trusted cross-functional technical leader connecting R&D, Manufacturing, Quality, and Equipment Engineering.',
    color: '#059669'
  }
  
  

].sort((a, b) => a.name.localeCompare(b.name))

function Avatar({ photoUrl, name }) {
  return (
    <img
      src={photoUrl}
      alt={name}
      className="w-48 h-48 rounded-full ring-2 ring-white/10 group-hover:ring-brand-500/50 transition-all object-cover"
    />
  )
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function MentorPlaceholders() {
  return (
    <section id="our-mentors" className="bg-night-900 py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Mentors"
          title={<>Meet the<br /><span className="text-gradient">founding cohort</span></>}
          subtitle="Apply before June 16 to be featured here alongside our first mentors."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {mentors.map((m) => (
            <motion.div
              key={m.id}
              variants={card}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 border border-white/8 hover:border-white/16 hover:bg-white/5 transition-all duration-300 group h-full flex flex-col"
            >
              {/* Photo */}
              <div className="flex justify-center mb-4">
                <Avatar photoUrl={m.photoUrl} name={m.name} />
              </div>
               
              {/* Name */}
              <p className="text-white font-semibold text-xl leading-tight mb-1 text-center">{m.name}</p>
              
              {/* Country & Title */}
              <p className="text-slate-400 text-sm mb-0.5 text-center">{m.title}</p>
              <p className="text-slate-500 text-sm mb-3 text-center">{m.country}</p>
              
              {/* Field Badge */}
              <span
                className="inline-block self-center px-2 py-0.5 rounded-full text-sm font-semibold border mb-3"
                style={{ backgroundColor: `${m.color}18`, color: m.color, borderColor: `${m.color}33` }}
              >
                {m.field}
              </span>
              
              {/* Bio */}
              <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-grow text-justify">{m.bio}</p>
              
              {/* LinkedIn Link */}
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 text-xs font-semibold transition-colors self-center"
              >
                <Linkedin className="w-3 h-3" />
                View Profile
              </a>
            </motion.div>
          ))}

          {/* "Be next" card */}
          <motion.a
            variants={card}
            href={MENTOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-5 border border-dashed border-brand-500/30 hover:border-brand-500/60 hover:bg-brand-500/5 transition-all duration-300 text-center group flex flex-col items-center justify-center min-h-[172px]"
          >
            <div className="w-16 h-16 rounded-full bg-brand-500/10 border-2 border-dashed border-brand-500/40 flex items-center justify-center mb-3 group-hover:border-brand-500/70 transition-all">
              <span className="text-brand-400 text-2xl">+</span>
            </div>
            <p className="text-brand-400 font-semibold text-sm">Could be you</p>
            <p className="text-slate-500 text-xs mt-1">Apply by June 16</p>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={MENTOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-all"
          >
            Join the founding cohort
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-slate-500 text-xs mt-3">Deadline: June 16, 2026</p>
        </motion.div>
      </div>
    </section>
  )
}
