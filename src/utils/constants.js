import acne from "./acne.jpg";

export const categories = [
  {
    id: 123,
    image: acne,
    title: "Dermatologist",
    desc: "Acne Pimple or Skin Issues",
  },
  {
    id: 124,
    image:
      "https://img.freepik.com/free-photo/3d-render-covid-19-virus-cells_1048-13983.jpg?w=900&t=st=1705984784~exp=1705985384~hmac=c7edb446e144bf5f84c1d8fbc65eb653e0a14b3a0962a7aed4c4ebd5ff98c4ba",
    title: "Oncology",
    desc: "Cancer, Tumours",
  },
  {
    id: 125,
    image:
      "https://img.freepik.com/free-photo/view-3d-tooth-with-toothpaste-as-hair_52683-111490.jpg?w=900&t=st=1705984466~exp=1705985066~hmac=00b5227565b6907d785ab68e9222639282a3d5498e0d81f37621dd9dfde1bda2",
    title: "Dentist",
    desc: "Dental Cavity, Tooth Pain, Gum Issues",
  },
  {
    id: 126,
    image:
      "https://img.freepik.com/free-photo/blood-glucose-meter-stethoscope-white-background_1387-240.jpg?w=360&t=st=1705984463~exp=1705985063~hmac=ef5062d946ed7ad305d5f8edff20d3b352c8f8db2b92cd76c46d32645a4a253f",
    title: "Diabetologist",
    desc: "Diabetes, Nerve Damage",
  },
  {
    id: 127,
    image:
      "https://img.freepik.com/free-vector/realistic-neuroscience-set-with-human-brain-nerve-anatomy-isolated-vector-illustration_1284-68308.jpg?w=740&t=st=1705984455~exp=1705985055~hmac=d2d75218bc8c76b34ee3b73e3341fe2624038ac0ab54dc7c288a05622ae057ff",
    title: "Neurologist",
    desc: "Muscle Weakness, Stroke",
  },
  {
    id: 128,
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-menopause-illustration_23-2149372533.jpg?w=740&t=st=1705984468~exp=1705985068~hmac=5caa617e8df70947b7a0fb6178f45919f14824b789be7a398bea2e203fd90bf6",
    title: "Obstetricians",
    desc: "Periods Doubt & Pregnancy",
  },
  {
    id: 129,
    image:
      "https://img.freepik.com/free-vector/food-pain-concept-illustration_114360-16553.jpg?w=740&t=st=1705984459~exp=1705985059~hmac=9acd2033687ab2a6917533b587b37831ac6fb6d07032d4ddc3d6b0dcf10dfb68",
    title: "Sports Medicine",
    desc: "Shoulder Pain, Ankle Pain, Knee Pain",
  },
];

export const SUPPORTED_LANGAUGES = [
  { identifier: "Delhi", name: "Delhi" },
  { identifier: "Mumbai", name: "Mumbai" },
  { identifier: "Ahemdabad", name: "Ahemdabad" },
  { identifier: "Banglore", name: "Banglore" },
  { identifier: "Hyderabad", name: "Hyderabad" },
  { identifier: "kolkata", name: "kolkata" },
  { identifier: "Surat", name: "Surat" },
  { identifier: "Pune", name: "Pune" },
  { identifier: "Chennai", name: "Chennai" },
];

export const checkValidation = (
  name,
  age,
  phoneno,
  company,
  Complaint,
  exiperence
) => {
  const regex = /[^0-9]/g;
  if (name.length < 3) return "Enter a valid Name";
  if (age.length === 0 || Number(age) <= 0 || Number(age) > 100)
    return "Enter a valid Age";
  if (phoneno.length !== 10 || regex.test(phoneno))
    return "Enter a valid 10 digit Phone Number";
  if (company.length < 0) return "Please Enter company Name";
  if (Complaint.length < 0) return "Please Enter Complaint";
  if (Number(age) >= 40 && exiperence.length === 0)
    return "Enter your Previous Experience";
};

export const PeopleReviews = [
  {
    id: 123,
    name: "Abhay Sharma",
    review:
      "It is a very good app. I live in a remote area, and the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
  {
    id: 124,
    name: "Vaishali",
    review:
      "Given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb!  it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eius deleniti beatae sunt repellat ipsum excepturi. ",
  },
  {
    id: 125,
    name: "Lalita",
    review:
      "I live in a remote area, and the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eius deleniti beatae sunt repellat ipsum excepturi. Aperiam similique ullam atque error odio ex",
  },
  {
    id: 126,
    name: "Himani",
    review:
      " it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eius deleniti beatae sunt repellat ipsum excepturi.  So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
  {
    id: 127,
    name: "Rishabh",
    review:
      "Online on MFine and the experience has been superb! Thank you so much MFine. Lorem ipsum dolor,the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
  {
    id: 128,
    name: "Kapil",
    review:
      "Experience has been superb! Thank you so much MFine. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit eius deleniti beatae sunt repellat ipsuin a remote area, and the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
  {
    id: 129,
    name: "Shivangi",
    review:
      "It is a very good app. I live in a remote area, and the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
  {
    id: 130,
    name: "Mohan",
    review:
      "It is a very good app. I live in a remote area, and the nearest specialist is 200kms away. And given the pandemic situation, it’s riskier to go out. So, I consulted online on MFine and the experience has been superb! Thank you so much MFine.",
  },
];
