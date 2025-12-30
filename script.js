// 🔗 Google Apps Script Web App URL
const DATA_URL = "https://script.google.com/macros/s/AKfycbx2_Kt4wxKpQIb5k_AM6H7GltivF49CmjULrwJPMj3o8SdzjMix5uxSzvzfFrZVZK0aTw/exec";

// 🎯 Fixed plot-twist rules
const fixedRules = {
  "venus": "AARUSH GUPTA",
  "venus chaudhary": "AARUSH GUPTA",

  "saumya": "MAANAS VAID",
  "soumya": "MAANAS VAID",
  "saumya agarwal": "MAANAS VAID",

  "garima": "VIDHI MISHRA",
  "garima dhulia": "VIDHI MISHRA"
};

// 🎁 FULL AVAILABLE NAME POOL (fixed receivers REMOVED)
let availableNames = [
"AASTHA ROHILA","ABHINAV RAJ SINGH","ABHISHEK KUMAR",
"ABHISHEK PRATAP SINGH","ABHISHEK VERMA","ADARSH MAURYA",
"ADIBA","ADITI SINGH","AHMAD RAHMANI","AJAY ARORA",
"AJAZ AHMAD KHAN","ALINA GARG","AMAAN ZUBERI","ANANY AGARWAL",
"ANCHIT GANGWAR","ANJU PATEL","ANKIT KUMAR PATEL",
"ANKITA AGARWAL","ANKITA MEENA","ANSH MISHRA",
"ANSHUMAN SINGH","ANUJ POONIA","ANUPAMA SINGH",
"ANUSHKA SHARMA","AREEBA SIDDIQUI","ASCHARYA NAGARJUN",
"ASHI GUPTA","ATUL TEOTIA","AYUSH","AZEEM",
"DEEKSHA SINGH","DEEPAK","DEVANSH",
"DHRUV YADAV","ESHA RAGHAV","EVAAN KHAN",
"FAISAL IQBAL","GARGI KAUSHIK","GLORIYA SINGH",
"GULSHAN KUMAR","HIMANSHU AGARWAL","HIMANSHU YADAV",
"HUMZA NEYAZ","HUZAIFA FARHEEN","ISHA PRITAM",
"ISHITA VATS","JAHANVI","JAHNAVI YADAV",
"KAJAL GERA","KANCHAN","KARTIK CHAUDHARY",
"KASHISH VATS","KHUSHI CHAUDHARY","KOMAL SINGH",
"KUSHAGRA BHARDWAJ","LAKSHAY","MAHESH KUMAR SAINI",
"MAHIMA SINGH","MANSIJ AGARWAL","MEHVISH",
"MOH SARFRAJ","MOHAMMAD ALI","MOHAMMAD MUAZ MALIK",
"MOHAN CHAUDHARY","MOHD DAAIM","MOHD FAISAL",
"MOHD SHAHRAN","MOHD ZAID","MUBASHIRA ANSARI",
"MUHAMMAD AYAZ","MUSKAN KUMARI","NADISH RAJORA",
"NANCY ADHANA","NANDANI KALWAR","NIKHIL PATEL",
"NOOR AKMAL ANSARI","OJAS GUPTA","PAWAN SUTHAR",
"PRASHU HANUMAN NAYAK","PRATHAM AGARWAL",
"PRIYANSHU GOND","PRIYANSHU SHARMA","RAHUL GIRI",
"RANGOLI CHAUDHARY","RASHI SINGH","RAVI VARSHNEY",
"RIBHAV AGRAWAL","RISHABH SAINI","RITURAJ BHASKAR",
"RUDRA","RUDRANSH RASTOGI","SAHIL ZAMEER",
"SAIF AHMAD","SAKSHI CHAHAL","SAKSHI KUMARI",
"SANSKRITI SHARMA","SARIYA ASLAM","SATYAM RAI",
"SAURABH YADAV","SHAHANSHAH VERMA","SHASHANK GUPTA",
"SHIKHAR AWASTHI","SHIVAM","SHIVAM KATARIYA",
"SHIVAM SINGH","SHIVANG SAINI","SHIVANI GUPTA",
"SHIVANI SINGH","SHIVANSH KUMAR","SHLOK KUMAR",
"SHREYA SINGH","SHRIEYA SINGH","SHRINIDHI PANDEY",
"SHRUTI","SHUBHAM MALIK","SNEHA DHIRAN",
"SRISHTI RANA","SRUSHTI JAIN","SUMAIRA AKBAR",
"SUNIL KUMAR","SUNIL KUMAR KUSHWAHA","SURBHI SHARMA",
"SURUCHI DEVI","TANISHKA SHARMA","TANU SAINI",
"TARUSHI RANA","TEJASVITA SINGH","TEJENDRA",
"UBAID CHAUDHARY","UTKARSH TIWARI","VANDNA",
"VANSH GAUTAM","VANSH SHARMA","VANSHIKA",
"VARNIKA","VENUS CHAUDHARY","VIDHI MISHRA",
"VIKASH PACHAR","VINEET SHARMA","VISHAL PATEL",
"VIVEK","YADUNANDAN","YASHASHVI GUPTA",
"YOGESH KUMAR","ZIA UR RAHMAN",
"PRATIKSHA CHOUDHARY","SAKSHAM ARYA"
];

function reveal() {
  const name = document.getElementById("playerName").value.trim();
  if (!name) {
    alert("Enter your name");
    return;
  }

  const key = name.toLowerCase();

  if (localStorage.getItem(key)) {
    alert("You have already played!");
    return;
  }

  let assigned;

  if (fixedRules[key]) {
    assigned = fixedRules[key];
    removeFromPool(assigned);
  } else {
    if (availableNames.length === 0) {
      alert("No names left!");
      return;
    }
    const i = Math.floor(Math.random() * availableNames.length);
    assigned = availableNames.splice(i, 1)[0];
  }

  localStorage.setItem(key, assigned);

  fetch(DATA_URL, {
    method: "POST",
    body: JSON.stringify({
      player: name,
      assigned: assigned
    })
  });

  document.getElementById("result").innerText =
    "🎉 You got: " + assigned;
  const card = document.getElementById("card");
card.style.display = "block";
card.classList.remove("closed");
card.classList.add("open");
}

function removeFromPool(name) {
  availableNames = availableNames.filter(n => n !== name);
}
