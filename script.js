/* =========================================================
   VITACARE — COMPLETE SCRIPT.JS
   ========================================================= */


/* =========================================================
   01. WHATSAPP CONFIG
   ========================================================= */

const WHATSAPP_NUMBER = "919693487083";


/* =========================================================
   02. COMPLETE TEST DATABASE
   PRICE IS STORED ONLY FOR REFERENCE.
   IT IS NEVER DISPLAYED OR SENT TO WHATSAPP.
   ========================================================= */

const tests = [

  { sn: 1, name: "ABSOLUTE EOSINOPHIL COUNT (AEC)", mrp: 150, price: 30 },
  { sn: 2, name: "ABSOLUTE LYMPHOCYTE COUNT", mrp: 150, price: 30 },
  { sn: 3, name: "Absolute Neutrophil Count EDTA", mrp: 150, price: 30 },
  { sn: 4, name: "ACTIVATED PARTIAL THROMBOPLASTIN TIME (APTT)", mrp: 500, price: 100 },
  { sn: 5, name: "ADENOSINE DEAMINASE (ADA)", mrp: 900, price: 130 },
  { sn: 6, name: "ALANINE TRANSAMINASE (ALT/SGPT)", mrp: 150, price: 30 },
  { sn: 7, name: "ALBUMIN", mrp: 200, price: 30 },
  { sn: 8, name: "Alpha Feto Protein (AFP)", mrp: 1000, price: 250 },
  { sn: 9, name: "AMYLASE SERUM", mrp: 700, price: 100 },
  { sn: 10, name: "ANTI MULLERIAN HORMONE (AMH)", mrp: 2000, price: 550 },
  { sn: 11, name: "ANTI NUCLEAR ANTIBODIES (ANA ELISA)", mrp: 1000, price: 200 },
  { sn: 12, name: "ANTI NUCLEAR ANTIBODY (ANA )IFA", mrp: 1800, price: 400 },
  { sn: 13, name: "BETA HUMAN CHORIONIC GONODOTROPIN HORMONE(bhCG) TOTAL", mrp: 500, price: 100 },
  { sn: 14, name: "BILIRUBIN -TOTAL(TDI)", mrp: 150, price: 30 },
  { sn: 15, name: "BILIRUBIN-DIRECT", mrp: 150, price: 30 },
  { sn: 16, name: "BILIRUBIN-INDIRECT", mrp: 150, price: 30 },
  { sn: 17, name: "BIOPSY (LARGE SPECIMEN)", mrp: 2000, price: 700 },
  { sn: 18, name: "BIOPSY (MEDIUM SPECIMEN)", mrp: 1500, price: 450 },
  { sn: 19, name: "BIOPSY-(SMALL SPECIMEN)", mrp: 800, price: 250 },
  { sn: 20, name: "BLOOD CULTURE & SENSITIVITY", mrp: 800, price: 250 },
  { sn: 21, name: "BLOOD GROUPING (ABO) & RH FACTOR", mrp: 100, price: 30 },
  { sn: 22, name: "BLOOD SUGAR FASTING (BSF)", mrp: 100, price: 20 },
  { sn: 23, name: "BLOOD SUGAR POSTPRANDIAL ( BSPP) - PP", mrp: 100, price: 20 },
  { sn: 24, name: "BLOOD SUGAR RANDOM ( BSR)", mrp: 100, price: 20 },
  { sn: 25, name: "BLOOD UREA NITROGEN (BUN)", mrp: 150, price: 30 },
  { sn: 26, name: "C Reactive Protein-Quantitative (CRP)", mrp: 500, price: 100 },
  { sn: 27, name: "CA 15.3", mrp: 1200, price: 300 },
  { sn: 28, name: "CA 19.9", mrp: 1500, price: 250 },
  { sn: 29, name: "CA-125 (OVARIAN CANCER MARKER)", mrp: 1000, price: 250 },
  { sn: 30, name: "CHLORIDESERUM", mrp: 150, price: 30 },
  { sn: 31, name: "CHOLESTEROL HDL", mrp: 150, price: 30 },
  { sn: 32, name: "CHOLESTEROL-LDL", mrp: 150, price: 30 },
  { sn: 33, name: "CHOLESTEROL-LDL DIRECT", mrp: 150, price: 30 },
  { sn: 34, name: "COMPLETE BLOOD COUNT (CBC)", mrp: 300, price: 50 },
  { sn: 35, name: "CREATINE KINASE -(CPK - MB)", mrp: 600, price: 120 },
  { sn: 36, name: "CREATININE KINASE ( CPK)", mrp: 600, price: 120 },
  { sn: 37, name: "CREATININE SERUM", mrp: 150, price: 30 },
  { sn: 38, name: "CULTURE AND SENSITIVITY URINE", mrp: 500, price: 90 },
  { sn: 39, name: "CULTURE AND SENSITIVITY( ANY)", mrp: 500, price: 150 },
  { sn: 40, name: "D-DIMER", mrp: 1200, price: 400 },
  { sn: 41, name: "DENGUE - IgG & IgM BY ELISA", mrp: 1200, price: 400 },
  { sn: 42, name: "DENGUE - IgG & IgM BY RAPID CARD", mrp: 1000, price: 250 },
  { sn: 43, name: "Dengue IgM (ELISA )", mrp: 600, price: 200 },
  { sn: 44, name: "Dengue Antigen NS1 & IgG + IgM", mrp: 1800, price: 500 },
  { sn: 45, name: "Dengue IgG (ELISA )", mrp: 600, price: 200 },
  { sn: 46, name: "DENGUE NS1 ANTIGEN RAPID (TEST) BY CARD", mrp: 600, price: 200 },

  { sn: 47, name: "DIFFERENTIAL LEUCOCYTE COUNT", mrp: 150, price: 50 },
  { sn: 48, name: "ERYTHROCYTE SEDIMENTATION RATE(ESR)", mrp: 150, price: 30 },
  { sn: 49, name: "ERYTHROCYTE SEDIMENTATION RATE(ESR)", mrp: 150, price: 30 },
  { sn: 50, name: "ESTRADIOL - II (E2)", mrp: 700, price: 150 },
  { sn: 51, name: "FERRITIN", mrp: 700, price: 150 },
  { sn: 52, name: "FLUID EXAMINATION -ROUTINE", mrp: 300, price: 80 },
  { sn: 53, name: "FLUID EXAMINATION -ROUTINE( PLEURAL FLUID)", mrp: 500, price: 150 },
  { sn: 54, name: "FOLIC ACID", mrp: 800, price: 200 },
  { sn: 55, name: "FOLLICLE STIMULATING HORMONE (FSH)", mrp: 500, price: 100 },
  { sn: 56, name: "FUNGAL STAIN", mrp: 600, price: 100 },
  { sn: 57, name: "GLUCOSE CHALLENGE TEST(GCT)", mrp: 200, price: 50 },
  { sn: 58, name: "Glucose Tolerance Test (GTT) - 5 Sample", mrp: 500, price: 100 },
  { sn: 59, name: "GLUCOSE TOLERANCE TEST (GTT)-5 SAMPLE", mrp: 500, price: 100 },
  { sn: 60, name: "Glucose Tolerance Test (OGTT) - 3Sample", mrp: 300, price: 60 },
  { sn: 61, name: "GLUCOSE TOLERANCE TEST(GTT) -2 SAMPLE", mrp: 200, price: 40 },
  { sn: 62, name: "GLYCOSYLATED HEMOGLOBIN (HBA1C)", mrp: 500, price: 100 },
  { sn: 63, name: "GRAM STAIN", mrp: 350, price: 80 },
  { sn: 64, name: "HAEMOGLOBIN (HB)", mrp: 150, price: 30 },
  { sn: 65, name: "HAEMOGLOBIN ELECTROPHORESIS (HPLC)", mrp: 1000, price: 250 },
  { sn: 66, name: "HEPATITIS B SURFACE ANTIBODY (HBsAb)", mrp: 1200, price: 250 },
  { sn: 67, name: "HEPATITIS B SURFACE ANTIGEN (HBsAg) RAPID", mrp: 500, price: 80 },

  { sn: 69, name: "HEPATITIS C VIRUS ANTIBODY(HCV) - RAPID CARD", mrp: 700, price: 80 },
  { sn: 70, name: "HEPATITIS-B SURFACE ANTIGEN (HBsAg) Elisa", mrp: 800, price: 150 },
  { sn: 71, name: "HIV ANTIBODY 1 & 2 RAPID", mrp: 500, price: 80 },
  { sn: 72, name: "HIV 1 & 2 ANTIBODY (ELISA)", mrp: 600, price: 150 },
  { sn: 73, name: "Immunoglobulin IgE", mrp: 700, price: 120 },
  { sn: 74, name: "INSULIN", mrp: 750, price: 150 },
  { sn: 75, name: "INSULIN - RANDOM", mrp: 750, price: 150 },
  { sn: 76, name: "IONIC CALCIUM", mrp: 500, price: 150 },
  { sn: 77, name: "IRON", mrp: 450, price: 80 },
  { sn: 78, name: "KIDNEY FUNCTION TEST (KFT)", mrp: 600, price: 80 },
  { sn: 79, name: "LIPASE SERUM", mrp: 700, price: 100 },
  { sn: 80, name: "LIPID PROFILE", mrp: 600, price: 80 },
  { sn: 81, name: "LIVER FUNCTION TEST (LFT)", mrp: 600, price: 80 },
  { sn: 82, name: "LUTEINISING HORMONE (LH)", mrp: 500, price: 100 },
  { sn: 83, name: "MAGNESIUM", mrp: 600, price: 100 },
  { sn: 84, name: "MALARIA ANTIGEN", mrp: 500, price: 100 },
  { sn: 85, name: "MANTOUX TEST TUBERCULIN SKIN TEST", mrp: 300, price: 100 },
  { sn: 86, name: "PERIPHERAL SMEAR EXAMINATION (PS)", mrp: 500, price: 50 },
  { sn: 87, name: "PHOSPHORUS SERUM", mrp: 150, price: 30 },
  { sn: 88, name: "PLATELET COUNT (PLT)", mrp: 150, price: 30 },
  { sn: 89, name: "PREGNANCY TEST URINE", mrp: 200, price: 50 },
  { sn: 90, name: "PROLACTIN (PRL)", mrp: 500, price: 100 },
  { sn: 91, name: "PROSTATE SPECIFIC ANTIGEN ( PSA) -FREE", mrp: 1000, price: 300 },
  { sn: 92, name: "PROSTATE SPECIFIC ANTIGEN (PSA) - TOTAL", mrp: 700, price: 150 },
  { sn: 93, name: "PROTHROMBIN TIMR (PT -INR)", mrp: 600, price: 100 },

  { sn: 94, name: "Rheumatoid Factor Quantitative", mrp: 600, price: 100 },
  { sn: 95, name: "SEMEN ANALYSIS", mrp: 700, price: 100 },
  { sn: 96, name: "SEMEN CULTURE & SENSITIVITY", mrp: 500, price: 100 },
  { sn: 97, name: "SERUM POTASSIUM", mrp: 150, price: 30 },
  { sn: 98, name: "SODIUM SERUM", mrp: 150, price: 30 },
  { sn: 99, name: "SPUTUM CULTURE & SENSITIVITY", mrp: 500, price: 100 },
  { sn: 100, name: "STOOL CULTURE & SENSITIVITY", mrp: 500, price: 80 },
  { sn: 101, name: "STOOL EXAMINATION R/M", mrp: 159, price: 30 },
  { sn: 102, name: "STOOL FOR OCCULT BLOOD", mrp: 400, price: 40 },
  { sn: 103, name: "TESTOSTERONE - TOTAL", mrp: 700, price: 150 },
  { sn: 104, name: "TESTOSTERONE- FREE", mrp: 1800, price: 300 },
  { sn: 105, name: "THYROID STIMULATING HORMONE (TSH)", mrp: 300, price: 30 },
  { sn: 106, name: "THYROXINE FREE (FT4)", mrp: 300, price: 50 },
  { sn: 107, name: "THYROXINE-TOTAL (TT4)", mrp: 150, price: 30 },
  { sn: 108, name: "TOTAL CALCIUM", mrp: 150, price: 30 },
  { sn: 109, name: "TOTAL CHOLESTEROL", mrp: 150, price: 30 },
  { sn: 110, name: "TOTAL IgE LEVEL", mrp: 800, price: 130 },
  { sn: 111, name: "TOTAL LECUCYTE COUNT( TLC)", mrp: 150, price: 30 },
  { sn: 112, name: "TOTAL PROTEIN", mrp: 150, price: 30 },
  { sn: 113, name: "TRIGLYCERIDES (TG)", mrp: 150, price: 40 },
  { sn: 114, name: "TRIIODOTHYRONINE (FT3)FT3", mrp: 200, price: 50 },
  { sn: 115, name: "TRI-IODOTHYRONINE (TT3)", mrp: 150, price: 40 },
  { sn: 116, name: "TROPONIN - I", mrp: 1500, price: 400 },
  { sn: 117, name: "TROPONIN - T", mrp: 1500, price: 400 },
  { sn: 118, name: "TUBERCULOSIS -GAMMA INTERFERON ( TB-GOLD)", mrp: 2500, price: 650 },
  { sn: 119, name: "TYPHI DOT IgG/IgM", mrp: 600, price: 150 },
  { sn: 120, name: "UREA SERUM", mrp: 150, price: 30 },
  { sn: 121, name: "URIC ACID SERUM", mrp: 150, price: 30 },
  { sn: 122, name: "VDRL TITRE", mrp: 400, price: 150 },
  { sn: 123, name: "VITAMIN B12", mrp: 1000, price: 100 },
  { sn: 124, name: "VITAMIN D 3", mrp: 1500, price: 200 },
  { sn: 125, name: "WIDAL TEST (SLIDE SEMI QUANTITATIVE METHOD)", mrp: 200, price: 30 },
  { sn: 126, name: "WIDAL TEST (TUBE METHOD)", mrp: 350, price: 150 },
  { sn: 127, name: "ALLERGY COMPREHENSIVE PROFILE", mrp: 7000, price: 1500 },
  { sn: 128, name: "ANTENATAL PROFILE ADVANCE", mrp: 3200, price: 900 },
  { sn: 129, name: "Antenatal Profile Basic", mrp: 1800, price: 450 },

  { sn: 132, name: "COAGULATION PROFILE BASIC", mrp: 1200, price: 200 },
  { sn: 133, name: "COMPLETE BLOOD COUNT WITH ESR .", mrp: 400, price: 80 },
  { sn: 134, name: "COMPLETE HAEMOGRAM", mrp: 400, price: 100 },

  { sn: 142, name: "IRON PROFILE -I", mrp: 600, price: 150 },
  { sn: 144, name: "MATERNAL SCREENING DUAL MARKER WITH GRAPH", mrp: 2000, price: 600 },
  { sn: 145, name: "MATERNAL SCREENING QUADRUPLE MARKER", mrp: 3500, price: 1150 },
  { sn: 146, name: "MATERNAL SCREENING TRIPLE MARKER WITH GRAPH", mrp: 2100, price: 650 },
  { sn: 147, name: "THYROID PROFILE FREE (FT3 FT4 TSH )", mrp: 600, price: 150 },
  { sn: 148, name: "THYROID PROFILE TOTAL (T3T4TSH)(TFT)", mrp: 400, price: 90 },
  { sn: 149, name: "VIRAL MARKER QUANTITATIVE", mrp: 2000, price: 450 },
  { sn: 151, name: "VIRAL MARKER QUALITATIVE", mrp: 1500, price: 280 }

];


/* =========================================================
   03. FEATURED PACKAGES
   ONLY MRP
   ========================================================= */

const featuredPackages = [

  {
    sn: 152,
    name: "Viral Marker Quantitative with VDRL",
    mrp: 2000
  },

  {
    sn: 153,
    name: "BSD Health Package Basic",
    mrp: 1500
  },

  {
    sn: 154,
    name: "BSD Health Package Advance",
    mrp: 2899
  }

];


/* =========================================================
   04. SELECTED ITEM
   ========================================================= */

let selectedItem = null;


/* =========================================================
   05. DOM ELEMENTS
   ========================================================= */

const testCatalogue =
  document.getElementById("testCatalogue");

const testSearch =
  document.getElementById("testSearch");

const clearSearch =
  document.getElementById("clearSearch");

const testCount =
  document.getElementById("testCount");

const noResults =
  document.getElementById("noResults");

const selectedSummary =
  document.getElementById("selectedSummary");

const selectedCount =
  document.getElementById("selectedCount");

const selectedTestName =
  document.getElementById("selectedTestName");

const continueBooking =
  document.getElementById("continueBooking");

const bookingForm =
  document.getElementById("bookingForm");

const bookingSelection =
  document.getElementById("bookingSelection");

const selectedBookingTests =
  document.getElementById("selectedBookingTests");

const selectedBookingSN =
  document.getElementById("selectedBookingSN");

const selectedBookingMRP =
  document.getElementById("selectedBookingMRP");

const formStatus =
  document.getElementById("formStatus");

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");

const progressBar =
  document.getElementById("progressBar");

const cursorGlow =
  document.querySelector(".cursor-glow");

const heroStage =
  document.querySelector(".hero-stage");


/* =========================================================
   06. PRICE FORMAT
   ========================================================= */

function formatPrice(value) {

  return new Intl.NumberFormat("en-IN").format(value);

}


/* =========================================================
   07. SECURITY / HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

  const div =
    document.createElement("div");

  div.textContent =
    value;

  return div.innerHTML;

}


/* =========================================================
   08. RENDER ALL TESTS
   IMPORTANT:
   ONLY MRP IS SHOWN.
   PRICE IS NOT SHOWN.
   ========================================================= */

function renderTests(list = tests) {

  if (!testCatalogue) {
    return;
  }

  testCatalogue.innerHTML = "";

  if (testCount) {
    testCount.textContent =
      list.length;
  }

  if (!list.length) {

    if (noResults) {
      noResults.hidden = false;
    }

    return;
  }

  if (noResults) {
    noResults.hidden = true;
  }


  const fragment =
    document.createDocumentFragment();


  list.forEach((test) => {

    const card =
      document.createElement("article");


    card.className =
      "test-card reveal-up";


    card.dataset.sn =
      test.sn;


    const isSelected =
      selectedItem &&
      selectedItem.sn === test.sn &&
      selectedItem.type === "test";


    if (isSelected) {
      card.classList.add("selected");
    }


    card.innerHTML = `

      <div class="test-number">
        ${test.sn}
      </div>


      <div class="test-info">

        <small>
          TEST ${test.sn}
        </small>


        <h3>
          ${escapeHTML(test.name)}
        </h3>


        <!-- ONLY MRP -->
        <div class="test-prices">

          <span class="test-mrp">

            MRP:

            <strong>
              ₹${formatPrice(test.mrp)}
            </strong>

          </span>

        </div>

      </div>


      <button
        type="button"
        class="test-select"
        data-test-select="${test.sn}"
      >

        ${isSelected ? "Selected" : "Select"}

      </button>

    `;


    fragment.appendChild(card);

  });


  testCatalogue.appendChild(fragment);


  requestAnimationFrame(() => {

    document
      .querySelectorAll(
        "#testCatalogue .reveal-up"
      )
      .forEach((element, index) => {

        setTimeout(() => {

          element.classList.add(
            "visible"
          );

        }, Math.min(index * 15, 300));

      });

  });

}


/* =========================================================
   09. SEARCH
   ========================================================= */

function searchTests() {

  if (!testSearch) {
    return;
  }


  const query =
    testSearch.value
      .trim()
      .toLowerCase();


  if (!query) {

    renderTests(tests);

    return;
  }


  const filtered =
    tests.filter((test) => {

      const name =
        test.name.toLowerCase();

      const number =
        String(test.sn);


      return (
        name.includes(query) ||
        number.includes(query)
      );

    });


  renderTests(filtered);

}


/* =========================================================
   10. CLEAR SEARCH
   ========================================================= */

function clearTestSearch() {

  if (!testSearch) {
    return;
  }


  testSearch.value = "";

  renderTests(tests);

  testSearch.focus();

}


/* =========================================================
   11. SELECT NORMAL TEST
   ========================================================= */

function selectTest(sn) {

  const test =
    tests.find(
      item =>
        item.sn === Number(sn)
    );


  if (!test) {
    return;
  }


  selectedItem = {

    type: "test",

    sn: test.sn,

    name: test.name,

    mrp: test.mrp

  };


  updateBookingUI();

}


/* =========================================================
   12. SELECT FEATURED PACKAGE
   152 / 153 / 154
   ONLY MRP
   ========================================================= */

function selectFeaturedPackage(data) {

  selectedItem = {

    type: "package",

    sn: Number(data.sn),

    name: data.name,

    mrp: Number(data.mrp)

  };


  updateBookingUI();

}


/* =========================================================
   13. UPDATE BOOKING UI
   ========================================================= */

function updateBookingUI() {

  if (!selectedItem) {
    return;
  }


  /* -----------------------------------------
     SELECTED SUMMARY
  ----------------------------------------- */

  if (selectedSummary) {

    selectedSummary.hidden = false;

  }


  if (selectedCount) {

    selectedCount.textContent =
      "1 item selected";

  }


  if (selectedTestName) {

    selectedTestName.textContent =
      selectedItem.name;

  }


  /* -----------------------------------------
     BOOKING FORM SELECTION
     ONLY MRP
  ----------------------------------------- */

  if (bookingSelection) {

    bookingSelection.innerHTML = `

      <div class="booking-selected-item">

        <div>

          <span>

            SELECTED ${selectedItem.type === "package"
        ? "PACKAGE"
        : "TEST"
      }

          </span>


          <strong>
            ${escapeHTML(
        selectedItem.name
      )}
          </strong>

        </div>


        <small>

          MRP ₹${formatPrice(
        selectedItem.mrp
      )}

        </small>

      </div>

    `;

  }


  /* -----------------------------------------
     HIDDEN FORM DATA
  ----------------------------------------- */

  if (selectedBookingTests) {

    selectedBookingTests.value =
      selectedItem.name;

  }


  if (selectedBookingSN) {

    selectedBookingSN.value =
      selectedItem.sn;

  }


  if (selectedBookingMRP) {

    selectedBookingMRP.value =
      selectedItem.mrp;

  }


  /* -----------------------------------------
     SCROLL TO BOOKING
  ----------------------------------------- */

  const booking =
    document.getElementById("booking");


  if (booking) {

    setTimeout(() => {

      booking.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }, 250);

  }

}


/* =========================================================
   14. CONTINUE BUTTON
   ========================================================= */

function goToBooking() {

  if (!selectedItem) {

    alert(
      "Please select a test or package first."
    );

    return;
  }


  const booking =
    document.getElementById("booking");


  if (booking) {

    booking.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

}


/* =========================================================
   15. WHATSAPP BOOKING
   IMPORTANT:
   NO PRICE.
   ONLY MRP.
   ========================================================= */

function submitBooking(event) {

  event.preventDefault();


  if (!selectedItem) {

    showFormError(
      "Please select a test or package first."
    );

    return;
  }


  const nameInput =
    document.getElementById("name");

  const phoneInput =
    document.getElementById("phone");

  const cityInput =
    document.getElementById("city");


  const name =
    nameInput
      ? nameInput.value.trim()
      : "";


  const phone =
    phoneInput
      ? phoneInput.value.trim()
      : "";


  const city =
    cityInput
      ? cityInput.value.trim()
      : "";


  /* -----------------------------------------
     VALIDATE NAME
  ----------------------------------------- */

  if (name.length < 2) {

    showFormError(
      "Please enter your full name."
    );

    if (nameInput) {
      nameInput.focus();
    }

    return;
  }


  /* -----------------------------------------
     VALIDATE MOBILE
  ----------------------------------------- */

  if (!/^[0-9]{10}$/.test(phone)) {

    showFormError(
      "Please enter a valid 10-digit mobile number."
    );

    if (phoneInput) {
      phoneInput.focus();
    }

    return;
  }


  /* -----------------------------------------
     VALIDATE CITY
  ----------------------------------------- */

  if (city.length < 2) {

    showFormError(
      "Please enter your city."
    );

    if (cityInput) {
      cityInput.focus();
    }

    return;
  }


  /* -----------------------------------------
     WHATSAPP MESSAGE
     
     PRICE IS COMPLETELY REMOVED.
     ONLY MRP.
  ----------------------------------------- */

  const itemType =
    selectedItem.type === "package"
      ? "Package"
      : "Test";


  const message =

    `Hello VitaCare,

I want to book a health ${itemType.toLowerCase()}.

Full Name: ${name}
Mobile Number: ${phone}
City: ${city}

Selected ${itemType}:
${selectedItem.name}

Serial Number: ${selectedItem.sn}
MRP: ₹${formatPrice(selectedItem.mrp)}

Please confirm my booking.
Thank you.`;


  /* -----------------------------------------
     WHATSAPP URL
  ----------------------------------------- */

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;


  /* -----------------------------------------
     STATUS
  ----------------------------------------- */

  if (formStatus) {

    formStatus.style.color =
      "#0a9f70";

    formStatus.textContent =
      "Opening WhatsApp...";

  }


  /* -----------------------------------------
     OPEN WHATSAPP
  ----------------------------------------- */

  window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   16. FORM ERROR
   ========================================================= */

function showFormError(message) {

  if (!formStatus) {

    alert(message);

    return;
  }


  formStatus.style.color =
    "#d94b4b";


  formStatus.textContent =
    message;

}


/* =========================================================
   17. FEATURED PACKAGE BUTTONS
   ========================================================= */

function setupFeaturedPackages() {

  const buttons =
    document.querySelectorAll(
      "[data-featured-select='true']"
    );


  buttons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        selectFeaturedPackage({

          sn:
            button.dataset.sn,

          name:
            button.dataset.name,

          mrp:
            button.dataset.mrp

        });

      }
    );

  });

}


/* =========================================================
   18. TEST SELECT BUTTONS
   ========================================================= */

function setupTestSelection() {

  if (!testCatalogue) {
    return;
  }


  testCatalogue.addEventListener(
    "click",
    (event) => {

      const button =
        event.target.closest(
          "[data-test-select]"
        );


      if (!button) {
        return;
      }


      const sn =
        button.dataset.testSelect;


      selectTest(sn);

    }
  );

}


/* =========================================================
   19. SEARCH EVENTS
   ========================================================= */

if (testSearch) {

  testSearch.addEventListener(
    "input",
    searchTests
  );

}


if (clearSearch) {

  clearSearch.addEventListener(
    "click",
    clearTestSearch
  );

}


/* =========================================================
   20. CONTINUE BOOKING BUTTON
   ========================================================= */

if (continueBooking) {

  continueBooking.addEventListener(
    "click",
    goToBooking
  );

}


/* =========================================================
   21. BOOKING FORM
   ========================================================= */

if (bookingForm) {

  bookingForm.addEventListener(
    "submit",
    submitBooking
  );

}


/* =========================================================
   22. MOBILE MENU
   ========================================================= */

if (menuToggle && navLinks) {

  menuToggle.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle(
        "active"
      );

    }
  );


  navLinks
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          navLinks.classList.remove(
            "active"
          );

        }
      );

    });

}


/* =========================================================
   23. SCROLL PROGRESS BAR
   ========================================================= */

function updateProgress() {

  if (!progressBar) {
    return;
  }


  const scrollTop =
    window.scrollY;


  const totalHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;


  const percentage =
    totalHeight > 0
      ? (scrollTop / totalHeight) * 100
      : 0;


  progressBar.style.width =
    `${percentage}%`;

}


window.addEventListener(
  "scroll",
  updateProgress,
  {
    passive: true
  }
);


/* =========================================================
   24. SCROLL REVEAL
   ========================================================= */

function setupRevealAnimations() {

  const elements =
    document.querySelectorAll(
      ".reveal, .reveal-up, .reveal-left"
    );


  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(
      element => {

        element.classList.add(
          "visible"
        );

      }
    );

    return;
  }


  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.12
      }
    );


  elements.forEach(
    element =>
      observer.observe(element)
  );

}


/* =========================================================
   25. CURSOR GLOW
   ========================================================= */

if (
  cursorGlow &&
  window.matchMedia(
    "(pointer:fine)"
  ).matches
) {

  window.addEventListener(
    "mousemove",
    (event) => {

      cursorGlow.style.transform =
        `translate(${event.clientX}px, ${event.clientY}px)`;

    },
    {
      passive: true
    }
  );

}


/* =========================================================
   26. HERO PARALLAX
   ========================================================= */

if (
  heroStage &&
  window.matchMedia(
    "(pointer:fine)"
  ).matches
) {

  heroStage.addEventListener(
    "mousemove",
    (event) => {

      const rect =
        heroStage.getBoundingClientRect();


      const x =
        (event.clientX - rect.left) /
        rect.width -
        0.5;


      const y =
        (event.clientY - rect.top) /
        rect.height -
        0.5;


      heroStage.style.transform =
        `translate(${x * 8}px, ${y * 8}px)`;

    }
  );


  heroStage.addEventListener(
    "mouseleave",
    () => {

      heroStage.style.transform =
        "translate(0, 0)";

    }
  );

}


/* =========================================================
   27. MOBILE PHONE INPUT
   ========================================================= */

const phoneInput =
  document.getElementById("phone");


if (phoneInput) {

  phoneInput.addEventListener(
    "input",
    () => {

      phoneInput.value =
        phoneInput.value
          .replace(/\D/g, "")
          .slice(0, 10);

    }
  );

}


/* =========================================================
   28. INITIALIZE WEBSITE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /* Render all tests */

    renderTests(tests);


    /* Setup featured packages */

    setupFeaturedPackages();


    /* Setup normal test selection */

    setupTestSelection();


    /* Setup scroll animations */

    setupRevealAnimations();


    /* Setup progress bar */

    updateProgress();


    console.log(
      "VitaCare loaded successfully."
    );

    console.log(
      `Total tests: ${tests.length}`
    );

    console.log(
      "MRP display mode: ONLY MRP"
    );

  }
);