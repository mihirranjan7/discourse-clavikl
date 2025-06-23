import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ClaviklFindCollege extends Component {
  // --- DATA ---
  @tracked search = "";
  @tracked results = [];
  @tracked showList = false;
  @tracked message = "";
  @tracked placeholder = "Search for your college...";
  @tracked placeholderIndex = 0;
  @tracked isTyping = false;

  colleges = "AIIMS Delhi",
    "AIIMS Bhopal",
    "PGIMER Chandigarh",
    "CMC Vellore",
    "NIMHANS Bangalore",
    "SGPGIMS Lucknow",
    "IMS-BHU",
    "ILBS",
    "Jawaharlal Nehru Medical College",
    "VMMC & Safdarjung Hospital",
    "Kasturba Medical College",
    "JIPMER",
    "UCMS",
    "Amrita School of Medicine",
    "Madras Medical College",
    "St. John’s Medical College",
    "KGMU",
    "AIIMS Jodhpur",
    "Siksha ‘O’ Anusandhan",
    "Saveetha Institute of Medical & Technical Sciences",
    "Lady Hardinge Medical College",
    "KMC Mangalore",
    "JSS Medical College",
    "Jamia Hamdard",
    "Dayanand Medical College",
    "GMC Chandigarh",
    "AIIMS Bhubaneswar",
    "Medical College Kolkata",
    "PSG Institute of Medical Sciences",
    "Datta Meghe Institute of Medical Sciences",
    "Maharishi Markandeshwar",
    "KIIT",
    "MS Ramaiah Medical College",
    "SMS Medical College",
    "SCB Medical College",
    "Annamalai University Medical College",
    "DY Patil Medical College",
    "Krishna Institute of Medical Sciences",
    "Narayana Medical College",
    "RIMS Imphal",
    "KS Hegde Medical Academy",
    "MGM Puducherry",
    "Tirunelveli Medical College",
    "Chettinad Hospital & Research Institute",
    "BM Patil Medical College",
    "NDMC Medical College",
    "GMC Kozhikode",
    "Stanley Medical College",
    "BJ Medical College Pune",
    "KIMS Bhubaneswar",
    "Mysore Medical College",
    "Kempegowda Institute of Medical Sciences",
    "GMC Nagpur",
    "Osmania Medical College",
    "GMC Guwahati",
    "Goa Medical College",
    "GMC Bhavnagar",
    "AIIMS Rishikesh",
    "GSVM Medical College",
    "Assam Medical College",
    "KIMS Hubli",
    "Bankura Sammilani Medical College",
    "SNMC Agra",
    "Himalayan Institute of Medical Sciences",
    "PIMS Puducherry",
    "NRSMC",
    "RUHS Medical College",
    "IGMC Shimla",
    "RIMS Ranchi",
    "SNMC Jodhpur",
    "Bharati Vidyapeeth Medical College",
    "Burdwan Medical College",
    "BPS GMC Sonepat",
    "MLB Medical College Jhansi",
    "SNMC Bagalkot",
    "VIMSAR Burla",
    "Ambedkar Medical College Bangalore",
    "Rajarajeswari Medical College",
    "Raja Muthiah Medical College",
    "MGM Aurangabad",
    "RNT Medical College",
    "MGM Medical College Indore",
    "LLRM Medical College",
    "GMC Patiala",
    "NSCB Medical College",
    "Vydehi Medical College",
    "GMC Aurangabad",
    "BJ Medical College Ahmedabad",
    "Calcutta National Medical College",
    "SCTIMST Thiruvananthapuram"];

  placeholderTexts = ["Search for AIIMS Jodhpur",
    "Find CMC Vellore",
    "Explore KGMU",
    "Search for JIPMER",
    "e.g., St. John’s Medical College",
    "Try 'PGIMER Chandigarh'",
    "Looking for NIMHANS Bangalore?",
    "Search for IMS-BHU",
    "Find VMMC & Safdarjung Hospital",
    "Explore Kasturba Medical College",
    "Search for Amrita School of Medicine",
    "Try 'Madras Medical College'",
    "Looking for JSS Medical College?",
    "Explore Lady Hardinge Medical College",
    "Find AIIMS Rishikesh"];

  userShares = [ {
        id: 1,
        userName: "Aditi",
        userDp: "https://res.cloudinary.com/dn1hjjczy/image/upload/v1750591103/a35b0754838892a605e0ed486ea62306_zqe39y.jpg",
        collegeName: "AIIMS Delhi",
        question: "Is it true that AIIMS Delhi has secret ‘no books, no PG’ circles?"
    },
    {
        id: 2,
        userName: "Priya L.",
        userDp: "https://res.cloudinary.com/dn1hjjczy/image/upload/v1750591103/162efb901e422fecfaa5aac52d33a652_jo9nm0.jpg",
        collegeName: "JIPMER",
        question: "Do JIPMER seniors really prank freshers with ‘fake viva’ stunts?"
    },
    {
        id: 3,
        userName: "Amit K.",
        userDp: "https://res.cloudinary.com/dn1hjjczy/image/upload/v1750591103/234135427e9c7caca995c65819b9fdd3_rivb6t.jpg",
        collegeName: "CMC Vellore",
        question: "Is it true CMC doesn’t allow relationships on campus?"
    },
    {
        id: 4,
        userName: "Sneha G.",
        userDp: "https://res.cloudinary.com/dn1hjjczy/image/upload/v1750591104/65e02bc9d3d1ae231c0fb6278f6ba035_rvnvdw.jpg",
        collegeName: "KMC Manipal",
        question: "What’s wilder at KMC: night parties or exam week breakdowns?"
    },
    {
        id: 5,
        userName: "Vikram R.",
        userDp: "https://res.cloudinary.com/dn1hjjczy/image/upload/v1750591103/9d7dc6599ddbc3380123672396f54bad_agtwwk.jpg",
        collegeName: "AIIMS Rishikesh",
        question: "Do AIIMS Rishikesh students really sneak out in ambulances?"
    },
    {
        id: 6,
        userName: "Divya M.",
        userDp: "https://res.cloudinary.com/dn1hjjczy/image/upload/v1750591102/98728620af34b4f46e84aca85ef78735_ceuypj.jpg",
        collegeName: "Bharati Vidyapeeth Medical College",
        question: "Is there a hidden ‘attendance mafia’ at BVMC?"
    },
    {
        id: 7,
        userName: "Karan P.",
        userDp: "https://res.cloudinary.com/dn1hjjczy/image/upload/v1750591102/df0b4e02088f3be968626dc7dac0be42_f39kei.jpg",
        collegeName: "MGM Medical College Aurangabad",
        question: "Do interns at MGM Aurangabad actually do any work, or just sign sheets?"
    },
    {
        id: 8,
        userName: "Neha S.",
        userDp: "https://res.cloudinary.com/dn1hjjczy/image/upload/v1750591102/9b04f26f2ea8c2de8f559c431c7cd603_pi0qri.jpg",
        collegeName: "Madras Medical College",
        question: "Are love stories common at MMC despite 90% attendance rules?"
    },
    {
        id: 9,
        userName: "Yash T.",
        userDp: "https://res.cloudinary.com/dn1hjjczy/image/upload/v1731857128/profile_images/673a0addf09ee.jpg",
        collegeName: "St. John’s Medical College",
        question: "What happens if you skip Sunday mass at St. John’s?"
    },
    {
        id: 10,
        userName: "Megha D.",
        userDp: "https://res.cloudinary.com/dn1hjjczy/image/upload/v1750591103/9b3245e4274b5d939f11fc37eccd508f_rkwes2.jpg",
        collegeName: "KGMU",
        question: "Do juniors at KGMU still get assigned ‘seniors to serve’ during 1st year?"
    }

  // --- Placeholder animation ---
  placeholderTimeout = null;

  constructor() {
    super(...arguments);
    this.startPlaceholderCycle();
  }

  willDestroy() {
    super.willDestroy(...arguments);
    if (this.placeholderTimeout) clearTimeout(this.placeholderTimeout);
  }

  // --- ACTIONS ---
  @action
  handleInput(event) {
    this.search = event.target.value;
    this.isTyping = true;
    this.showList = !!this.search;
    this.filterResults();

    if (!this.search) {
      this.isTyping = false;
      this.startPlaceholderCycle();
      this.showList = false;
    }
  }

  @action
  handleFocus() {
    this.isTyping = true;
    this.placeholder = "";
  }

  @action
  handleBlur() {
    setTimeout(() => { // Timeout to allow click on list item
      if (!this.search) {
        this.isTyping = false;
        this.startPlaceholderCycle();
        this.showList = false;
      }
    }, 200);
  }

  @action
  selectCollege(college) {
    window.location.href = `/g/${encodeURIComponent(college.replace(/\s+/g, '-').toLowerCase())}`;
  }

  filterResults() {
    if (!this.search) {
      this.results = [];
      this.message = "";
      return;
    }
    let lower = this.search.toLowerCase();
    this.results = this.colleges.filter(c => c.toLowerCase().includes(lower));
    this.message = this.results.length
      ? ""
      : `No results found for "<strong>${this.search}</strong>". Please reach out to <a href="/u/clavikl">Clavikl</a> to get your college registered and be the moderator.`;
  }

  // --- Placeholder Typewriter ---
  startPlaceholderCycle() {
    if (this.isTyping) return;
    const text = this.placeholderTexts[this.placeholderIndex];
    this.typePlaceholder(text, 0);
  }

  typePlaceholder(text, idx) {
    if (this.isTyping) return;
    if (idx <= text.length) {
      this.placeholder = text.substring(0, idx);
      this.placeholderTimeout = setTimeout(() => this.typePlaceholder(text, idx + 1), 60);
    } else {
      this.placeholderTimeout = setTimeout(() => this.deletePlaceholder(text, text.length), 1200);
    }
  }

  deletePlaceholder(text, idx) {
    if (this.isTyping) return;
    if (idx >= 0) {
      this.placeholder = text.substring(0, idx);
      this.placeholderTimeout = setTimeout(() => this.deletePlaceholder(text, idx - 1), 35);
    } else {
      this.placeholderIndex = (this.placeholderIndex + 1) % this.placeholderTexts.length;
      this.startPlaceholderCycle();
    }
  }
}
