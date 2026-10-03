/* =========================================================
   VITACARE — COMPLETE SCRIPT
   ========================================================= */

"use strict";


/* =========================================================
   CONFIG
   ========================================================= */

const WHATSAPP_NUMBER = "919693487083";


/* =========================================================
   TEST DATA
   NOTE:
   MRP is shown to the user.
   Selling price is NOT used anywhere in the website.
   ========================================================= */

const tests = [

    { sn: 1, name: "ABSOLUTE EOSINOPHIL COUNT (AEC)", mrp: 150 },
    { sn: 2, name: "ABSOLUTE LYMPHOCYTE COUNT", mrp: 150 },
    { sn: 3, name: "Absolute Neutrophil Count EDTA", mrp: 150 },
    { sn: 4, name: "ACTIVATED PARTIAL THROMBOPLASTIN TIME (APTT)", mrp: 500 },
    { sn: 5, name: "ADENOSINE DEAMINASE (ADA)", mrp: 900 },
    { sn: 6, name: "ALANINE TRANSAMINASE (ALT/SGPT)", mrp: 150 },
    { sn: 7, name: "ALBUMIN", mrp: 200 },
    { sn: 8, name: "Alpha Feto Protein (AFP)", mrp: 1000 },
    { sn: 9, name: "AMYLASE SERUM", mrp: 700 },
    { sn: 10, name: "ANTI MULLERIAN HORMONE (AMH)", mrp: 2000 },
    { sn: 11, name: "ANTI NUCLEAR ANTIBODIES (ANA ELISA)", mrp: 1000 },
    { sn: 12, name: "ANTI NUCLEAR ANTIBODY (ANA )IFA", mrp: 1800 },
    { sn: 13, name: "BETA HUMAN CHORIONIC GONODOTROPIN HORMONE (bhCG) TOTAL", mrp: 500 },
    { sn: 14, name: "BILIRUBIN -TOTAL(TDI)", mrp: 150 },
    { sn: 15, name: "BILIRUBIN-DIRECT", mrp: 150 },
    { sn: 16, name: "BILIRUBIN-INDIRECT", mrp: 150 },
    { sn: 17, name: "BIOPSY (LARGE SPECIMEN)", mrp: 2000 },
    { sn: 18, name: "BIOPSY (MEDIUM SPECIMEN)", mrp: 1500 },
    { sn: 19, name: "BIOPSY-(SMALL SPECIMEN)", mrp: 800 },
    { sn: 20, name: "BLOOD CULTURE & SENSITIVITY", mrp: 800 },
    { sn: 21, name: "BLOOD GROUPING (ABO) & RH FACTOR", mrp: 100 },
    { sn: 22, name: "BLOOD SUGAR FASTING (BSF)", mrp: 100 },
    { sn: 23, name: "BLOOD SUGAR POSTPRANDIAL ( BSPP) - PP", mrp: 100 },
    { sn: 24, name: "BLOOD SUGAR RANDOM ( BSR)", mrp: 100 },
    { sn: 25, name: "BLOOD UREA NITROGEN (BUN)", mrp: 150 },
    { sn: 26, name: "C Reactive Protein-Quantitative (CRP)", mrp: 500 },
    { sn: 27, name: "CA 15.3", mrp: 1200 },
    { sn: 28, name: "CA 19.9", mrp: 1500 },
    { sn: 29, name: "CA-125 (OVARIAN CANCER MARKER)", mrp: 1000 },
    { sn: 30, name: "CHLORIDE SERUM", mrp: 150 },
    { sn: 31, name: "CHOLESTEROL HDL", mrp: 150 },
    { sn: 32, name: "CHOLESTEROL-LDL", mrp: 150 },
    { sn: 33, name: "CHOLESTEROL-LDL DIRECT", mrp: 150 },
    { sn: 34, name: "COMPLETE BLOOD COUNT (CBC)", mrp: 300 },
    { sn: 35, name: "CREATINE KINASE -(CPK - MB)", mrp: 600 },
    { sn: 36, name: "CREATININE KINASE ( CPK)", mrp: 600 },
    { sn: 37, name: "CREATININE SERUM", mrp: 150 },
    { sn: 38, name: "CULTURE AND SENSITIVITY URINE", mrp: 500 },
    { sn: 39, name: "CULTURE AND SENSITIVITY( ANY)", mrp: 500 },
    { sn: 40, name: "D-DIMER", mrp: 1200 },
    { sn: 41, name: "DENGUE - IgG & IgM BY ELISA", mrp: 1200 },
    { sn: 42, name: "DENGUE - IgG & IgM BY RAPID CARD", mrp: 1000 },
    { sn: 43, name: "Dengue IgM (ELISA)", mrp: 600 },
    { sn: 44, name: "Dengue Antigen NS1 & IgG + IgM", mrp: 1800 },
    { sn: 45, name: "Dengue IgG (ELISA)", mrp: 600 },
    { sn: 46, name: "DENGUE NS1 ANTIGEN RAPID (TEST) BY CARD", mrp: 600 },

    { sn: 47, name: "DIFFERENTIAL LEUCOCYTE COUNT", mrp: 150 },
    { sn: 48, name: "ERYTHROCYTE SEDIMENTATION RATE(ESR)", mrp: 150 },
    { sn: 49, name: "ERYTHROCYTE SEDIMENTATION RATE(ESR)", mrp: 150 },
    { sn: 50, name: "ESTRADIOL - II (E2)", mrp: 700 },
    { sn: 51, name: "FERRITIN", mrp: 700 },
    { sn: 52, name: "FLUID EXAMINATION -ROUTINE", mrp: 300 },
    { sn: 53, name: "FLUID EXAMINATION -ROUTINE( PLEURAL FLUID)", mrp: 500 },
    { sn: 54, name: "FOLIC ACID", mrp: 800 },
    { sn: 55, name: "FOLLICLE STIMULATING HORMONE (FSH)", mrp: 500 },
    { sn: 56, name: "FUNGAL STAIN", mrp: 600 },
    { sn: 57, name: "GLUCOSE CHALLENGE TEST(GCT)", mrp: 200 },
    { sn: 58, name: "Glucose Tolerance Test (GTT) - 5 Sample", mrp: 500 },
    { sn: 59, name: "GLUCOSE TOLERANCE TEST (GTT)-5 SAMPLE", mrp: 500 },
    { sn: 60, name: "Glucose Tolerance Test (OGTT) - 3Sample", mrp: 300 },
    { sn: 61, name: "GLUCOSE TOLERANCE TEST(GTT) -2 SAMPLE", mrp: 200 },
    { sn: 62, name: "GLYCOSYLATED HEMOGLOBIN (HBA1C)", mrp: 500 },
    { sn: 63, name: "GRAM STAIN", mrp: 350 },
    { sn: 64, name: "HAEMOGLOBIN (HB)", mrp: 150 },
    { sn: 65, name: "HAEMOGLOBIN ELECTROPHORESIS (HPLC)", mrp: 1000 },
    { sn: 66, name: "HEPATITIS B SURFACE ANTIBODY (HBsAb)", mrp: 1200 },
    { sn: 67, name: "HEPATITIS B SURFACE ANTIGEN (HBsAg) RAPID", mrp: 500 },
    { sn: 69, name: "HEPATITIS C VIRUS ANTIBODY(HCV) - RAPID CARD", mrp: 700 },
    { sn: 70, name: "HEPATITIS-B SURFACE ANTIGEN (HBsAg) Elisa", mrp: 800 },
    { sn: 71, name: "HIV ANTIBODY 1 & 2 RAPID", mrp: 500 },
    { sn: 72, name: "HIV 1 & 2 ANTIBODY (ELISA)", mrp: 600 },
    { sn: 73, name: "Immunoglobulin IgE", mrp: 700 },
    { sn: 74, name: "INSULIN", mrp: 750 },
    { sn: 75, name: "INSULIN - RANDOM", mrp: 750 },
    { sn: 76, name: "IONIC CALCIUM", mrp: 500 },
    { sn: 77, name: "IRON", mrp: 450 },
    { sn: 78, name: "KIDNEY FUNCTION TEST (KFT)", mrp: 600 },
    { sn: 79, name: "LIPASE SERUM", mrp: 700 },
    { sn: 80, name: "LIPID PROFILE", mrp: 600 },
    { sn: 81, name: "LIVER FUNCTION TEST (LFT)", mrp: 600 },
    { sn: 82, name: "LUTEINISING HORMONE (LH)", mrp: 500 },
    { sn: 83, name: "MAGNESIUM", mrp: 600 },
    { sn: 84, name: "MALARIA ANTIGEN", mrp: 500 },
    { sn: 85, name: "MANTOUX TEST TUBERCULIN SKIN TEST", mrp: 300 },
    { sn: 86, name: "PERIPHERAL SMEAR EXAMINATION (PS)", mrp: 500 },
    { sn: 87, name: "PHOSPHORUS SERUM", mrp: 150 },
    { sn: 88, name: "PLATELET COUNT (PLT)", mrp: 150 },
    { sn: 89, name: "PREGNANCY TEST URINE", mrp: 200 },
    { sn: 90, name: "PROLACTIN (PRL)", mrp: 500 },
    { sn: 91, name: "PROSTATE SPECIFIC ANTIGEN ( PSA) -FREE", mrp: 1000 },
    { sn: 92, name: "PROSTATE SPECIFIC ANTIGEN (PSA) - TOTAL", mrp: 700 },
    { sn: 93, name: "PROTHROMBIN TIMR (PT -INR)", mrp: 600 },

    { sn: 94, name: "Rheumatoid Factor Quantitative", mrp: 600 },
    { sn: 95, name: "SEMEN ANALYSIS", mrp: 700 },
    { sn: 96, name: "SEMEN CULTURE & SENSITIVITY", mrp: 500 },
    { sn: 97, name: "SERUM POTASSIUM", mrp: 150 },
    { sn: 98, name: "SODIUM SERUM", mrp: 150 },
    { sn: 99, name: "SPUTUM CULTURE & SENSITIVITY", mrp: 500 },
    { sn: 100, name: "STOOL CULTURE & SENSITIVITY", mrp: 500 },
    { sn: 101, name: "STOOL EXAMINATION R/M", mrp: 159 },
    { sn: 102, name: "STOOL FOR OCCULT BLOOD", mrp: 400 },
    { sn: 103, name: "TESTOSTERONE - TOTAL", mrp: 700 },
    { sn: 104, name: "TESTOSTERONE- FREE", mrp: 1800 },
    { sn: 105, name: "THYROID STIMULATING HORMONE (TSH)", mrp: 300 },
    { sn: 106, name: "THYROXINE FREE (FT4)", mrp: 300 },
    { sn: 107, name: "THYROXINE-TOTAL (TT4)", mrp: 150 },
    { sn: 108, name: "TOTAL CALCIUM", mrp: 150 },
    { sn: 109, name: "TOTAL CHOLESTEROL", mrp: 150 },
    { sn: 110, name: "TOTAL IgE LEVEL", mrp: 800 },
    { sn: 111, name: "TOTAL LECUCYTE COUNT( TLC)", mrp: 150 },
    { sn: 112, name: "TOTAL PROTEIN", mrp: 150 },
    { sn: 113, name: "TRIGLYCERIDES (TG)", mrp: 150 },
    { sn: 114, name: "TRIIODOTHYRONINE (FT3)FT3", mrp: 200 },
    { sn: 115, name: "TRI-IODOTHYRONINE (TT3)", mrp: 150 },
    { sn: 116, name: "TROPONIN - I", mrp: 1500 },
    { sn: 117, name: "TROPONIN - T", mrp: 1500 },
    { sn: 118, name: "TUBERCULOSIS -GAMMA INTERFERON ( TB-GOLD)", mrp: 2500 },
    { sn: 119, name: "TYPHI DOT IgG/IgM", mrp: 600 },
    { sn: 120, name: "UREA SERUM", mrp: 150 },
    { sn: 121, name: "URIC ACID SERUM", mrp: 150 },
    { sn: 122, name: "VDRL TITRE", mrp: 400 },
    { sn: 123, name: "VITAMIN B12", mrp: 1000 },
    { sn: 124, name: "VITAMIN D 3", mrp: 1500 },
    { sn: 125, name: "WIDAL TEST (SLIDE SEMI QUANTITATIVE METHOD)", mrp: 200 },
    { sn: 126, name: "WIDAL TEST (TUBE METHOD)", mrp: 350 },

    { sn: 127, name: "ALLERGY COMPREHENSIVE PROFILE", mrp: 7000 },
    { sn: 128, name: "ANTENATAL PROFILE ADVANCE", mrp: 3200 },
    { sn: 129, name: "Antenatal Profile Basic", mrp: 1800 },
    { sn: 132, name: "COAGULATION PROFILE BASIC", mrp: 1200 },
    { sn: 133, name: "COMPLETE BLOOD COUNT WITH ESR.", mrp: 400 },
    { sn: 134, name: "COMPLETE HAEMOGRAM", mrp: 400 },
    { sn: 142, name: "IRON PROFILE -I", mrp: 600 },
    { sn: 144, name: "MATERNAL SCREENING DUAL MARKER WITH GRAPH", mrp: 2000 },
    { sn: 145, name: "MATERNAL SCREENING QUADRUPLE MARKER", mrp: 3500 },
    { sn: 146, name: "MATERNAL SCREENING TRIPLE MARKER WITH GRAPH", mrp: 2100 },
    { sn: 147, name: "THYROID PROFILE FREE (FT3 FT4 TSH)", mrp: 600 },
    { sn: 148, name: "THYROID PROFILE TOTAL (T3T4TSH)(TFT)", mrp: 400 },
    { sn: 149, name: "VIRAL MARKER QUANTITATIVE", mrp: 2000 },
    { sn: 151, name: "VIRAL MARKER QUALITATIVE", mrp: 1500 }

];


/* =========================================================
   FEATURED PACKAGES
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
   SELECTED ITEMS
   ========================================================= */

let selectedItems = [];


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderTests(tests);

    setupSearch();

    setupFeaturedPackages();

    setupBookingForm();

    setupContinueBooking();

    setupMobileMenu();

    setupScrollProgress();

    setupRevealAnimation();

    setupCursorGlow();

    setupHeroParallax();

    setupPhoneInput();

    setupAgeInput();

    updateBookingUI();

});


/* =========================================================
   GET TEST BY SERIAL NUMBER
   ========================================================= */

function findTestBySN(sn) {

    const number = Number(sn);

    return tests.find(test => test.sn === number) ||
           featuredPackages.find(test => test.sn === number) ||
           null;

}


/* =========================================================
   RENDER ALL TESTS
   ========================================================= */

function renderTests(list = tests) {

    const catalogue = document.getElementById("testCatalogue");
    const testCount = document.getElementById("testCount");
    const noResults = document.getElementById("noResults");

    if (!catalogue) return;

    catalogue.innerHTML = "";

    if (testCount) {
        testCount.textContent = list.length;
    }

    if (list.length === 0) {

        catalogue.style.display = "none";

        if (noResults) {
            noResults.hidden = false;
        }

        return;
    }

    catalogue.style.display = "";

    if (noResults) {
        noResults.hidden = true;
    }


    list.forEach(test => {

        const isSelected = selectedItems.some(
            item => item.sn === test.sn
        );

        const card = document.createElement("article");

        card.className = "test-card";

        if (isSelected) {
            card.classList.add("selected");
        }


        card.dataset.sn = test.sn;


        card.innerHTML = `

            <div class="test-number">
                ${test.sn}
            </div>

            <div class="test-info">

                <h3>
                    ${escapeHTML(test.name)}
                </h3>

                <small>
                    Diagnostic Test
                </small>

            </div>

            <div class="test-prices">

                <span class="test-mrp">
                    ₹${formatNumber(test.mrp)}
                </span>

                <button
                    type="button"
                    class="test-select"
                    data-sn="${test.sn}"
                >
                    ${isSelected ? "Selected" : "Select"}
                </button>

            </div>

        `;


        const selectButton = card.querySelector(".test-select");

        selectButton.addEventListener("click", (event) => {

            event.stopPropagation();

            toggleTest(test.sn);

        });


        card.addEventListener("click", () => {

            toggleTest(test.sn);

        });


        catalogue.appendChild(card);

    });

}


/* =========================================================
   TOGGLE TEST
   ========================================================= */

function toggleTest(sn) {

    const number = Number(sn);

    const existingIndex = selectedItems.findIndex(
        item => item.sn === number
    );


    if (existingIndex !== -1) {

        selectedItems.splice(existingIndex, 1);

    } else {

        const test = findTestBySN(number);

        if (!test) return;

        selectedItems.push({
            sn: test.sn,
            name: test.name,
            mrp: test.mrp
        });

    }


    updateBookingUI();

    refreshVisibleTestSelection();

}


/* =========================================================
   FEATURED PACKAGE SETUP
   ========================================================= */

function setupFeaturedPackages() {

    const buttons = document.querySelectorAll(
        "[data-featured-select='true']"
    );

    buttons.forEach(button => {

        button.addEventListener("click", (event) => {

            event.preventDefault();

            event.stopPropagation();

            const sn = Number(button.dataset.sn);

            toggleTest(sn);

        });

    });

}


/* =========================================================
   UPDATE VISIBLE TEST SELECTION
   ========================================================= */

function refreshVisibleTestSelection() {

    const cards = document.querySelectorAll(".test-card");

    cards.forEach(card => {

        const sn = Number(card.dataset.sn);

        const isSelected = selectedItems.some(
            item => item.sn === sn
        );

        const button = card.querySelector(".test-select");

        card.classList.toggle("selected", isSelected);

        if (button) {
            button.textContent = isSelected
                ? "Selected"
                : "Select";
        }

    });

}


/* =========================================================
   UPDATE BOOKING UI
   ========================================================= */

function updateBookingUI() {

    const countElement = document.getElementById("selectedCount");

    const selectedNameElement =
        document.getElementById("selectedTestName");

    const bookingList =
        document.getElementById("selectedBookingTests");

    const bookingEmpty =
        document.getElementById("selectedBookingEmpty");

    const bookingCount =
        document.getElementById("selectedBookingCount");


    /* -------------------------
       COUNT
       ------------------------- */

    if (countElement) {
        countElement.textContent = selectedItems.length;
    }

    if (bookingCount) {

        bookingCount.textContent =
            `${selectedItems.length} selected`;

    }


    /* -------------------------
       SUMMARY NAME
       ------------------------- */

    if (selectedNameElement) {

        if (selectedItems.length === 0) {

            selectedNameElement.textContent =
                "No test selected";

        } else if (selectedItems.length === 1) {

            selectedNameElement.textContent =
                selectedItems[0].name;

        } else {

            selectedNameElement.textContent =
                `${selectedItems.length} tests/packages selected`;

        }

    }


    /* -------------------------
       BOOKING LIST
       ------------------------- */

    if (bookingList) {

        bookingList.innerHTML = "";

        selectedItems.forEach(item => {

            const row = document.createElement("div");

            row.className = "selected-booking-item";


            row.innerHTML = `

                <div class="selected-booking-item-info">

                    <div class="selected-booking-item-number">
                        ${item.sn}
                    </div>

                    <div class="selected-booking-item-text">

                        <strong>
                            ${escapeHTML(item.name)}
                        </strong>

                        <span>
                            MRP ₹${formatNumber(item.mrp)}
                        </span>

                    </div>

                </div>

                <span class="selected-booking-item-mrp">
                    MRP ₹${formatNumber(item.mrp)}
                </span>

                <button
                    type="button"
                    class="selected-booking-remove"
                    data-remove-sn="${item.sn}"
                    aria-label="Remove ${escapeHTML(item.name)}"
                    title="Remove"
                >
                    <i class="fa-solid fa-xmark"></i>
                </button>

            `;


            const removeButton =
                row.querySelector(".selected-booking-remove");


            removeButton.addEventListener("click", () => {

                removeSelectedItem(item.sn);

            });


            bookingList.appendChild(row);

        });

    }


    /* -------------------------
       EMPTY STATE
       ------------------------- */

    if (bookingEmpty) {

        bookingEmpty.style.display =
            selectedItems.length === 0
                ? "flex"
                : "none";

    }

}


/* =========================================================
   REMOVE SELECTED ITEM
   ========================================================= */

function removeSelectedItem(sn) {

    const number = Number(sn);

    selectedItems = selectedItems.filter(
        item => item.sn !== number
    );

    updateBookingUI();

    refreshVisibleTestSelection();

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

    const searchInput =
        document.getElementById("testSearch");

    const clearButton =
        document.getElementById("clearSearch");


    if (!searchInput) return;


    searchInput.addEventListener("input", () => {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        const filtered = tests.filter(test => {

            const name =
                test.name.toLowerCase();

            const serial =
                String(test.sn);

            return (
                name.includes(query) ||
                serial.includes(query)
            );

        });


        renderTests(filtered);


        if (clearButton) {

            if (query.length > 0) {

                clearButton.style.opacity = "1";
                clearButton.style.pointerEvents = "auto";

            } else {

                clearButton.style.opacity = "0";
                clearButton.style.pointerEvents = "none";

            }

        }

    });


    if (clearButton) {

        clearButton.addEventListener("click", () => {

            searchInput.value = "";

            renderTests(tests);

            clearButton.style.opacity = "0";
            clearButton.style.pointerEvents = "none";

            searchInput.focus();

        });

    }

}


/* =========================================================
   CONTINUE TO BOOKING
   ========================================================= */

function setupContinueBooking() {

    const button =
        document.getElementById("continueBooking");


    if (!button) return;


    button.addEventListener("click", () => {

        if (selectedItems.length === 0) {

            showFormStatus(
                "Please select at least one test or package first.",
                "error"
            );

            document
                .getElementById("tests")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            return;

        }


        document
            .getElementById("booking")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


        setTimeout(() => {

            document
                .getElementById("name")
                ?.focus();

        }, 700);

    });

}


/* =========================================================
   BOOKING FORM
   ========================================================= */

function setupBookingForm() {

    const form =
        document.getElementById("bookingForm");


    if (!form) return;


    form.addEventListener("submit", submitBooking);

}


/* =========================================================
   SUBMIT BOOKING
   ========================================================= */

function submitBooking(event) {

    event.preventDefault();


    const nameInput =
        document.getElementById("name");

    const phoneInput =
        document.getElementById("phone");

    const ageInput =
        document.getElementById("age");

    const addressInput =
        document.getElementById("address");


    const name =
        nameInput?.value.trim() || "";

    const phone =
        phoneInput?.value.trim() || "";

    const age =
        ageInput?.value.trim() || "";

    const address =
        addressInput?.value.trim() || "";


    /* -------------------------
       NAME
       ------------------------- */

    if (name.length < 2) {

        showFormStatus(
            "Please enter your full name.",
            "error"
        );

        nameInput?.focus();

        return;

    }


    /* -------------------------
       PHONE
       ------------------------- */

    if (!/^[6-9]\d{9}$/.test(phone)) {

        showFormStatus(
            "Please enter a valid 10-digit mobile number.",
            "error"
        );

        phoneInput?.focus();

        return;

    }


    /* -------------------------
       AGE
       ------------------------- */

    const numericAge = Number(age);


    if (
        !Number.isInteger(numericAge) ||
        numericAge < 1 ||
        numericAge > 100
    ) {

        showFormStatus(
            "Age must be between 1 and 100 years.",
            "error"
        );

        ageInput?.focus();

        return;

    }


    /* -------------------------
       ADDRESS
       ------------------------- */

    if (address.length < 5) {

        showFormStatus(
            "Please enter your full address.",
            "error"
        );

        addressInput?.focus();

        return;

    }


    /* -------------------------
       TEST SELECTION
       ------------------------- */

    if (selectedItems.length === 0) {

        showFormStatus(
            "Please select at least one test or package.",
            "error"
        );

        document
            .getElementById("tests")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        return;

    }


    /* -------------------------
       WHATSAPP MESSAGE
       ------------------------- */

    let message =
        `*VitaCare Booking Request*%0A%0A`;


    message +=
        `*Full Name:* ${encodeURIComponent(name)}%0A`;

    message +=
        `*Mobile Number:* ${encodeURIComponent(phone)}%0A`;

    message +=
        `*Age:* ${encodeURIComponent(age)} years%0A`;

    message +=
        `*Full Address:* ${encodeURIComponent(address)}%0A%0A`;


    message +=
        `*Selected Tests / Packages:*%0A`;


    selectedItems.forEach((item, index) => {

        message +=
            `${index + 1}. ${encodeURIComponent(item.name)}%0A`;

        message +=
            `   SN: ${item.sn}%0A`;

        message +=
            `   MRP: ₹${formatNumber(item.mrp)}%0A`;

    });


    message +=
        `%0A*Please assist me with the booking.*`;


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


    showFormStatus(
        "Opening WhatsApp...",
        "success"
    );


    setTimeout(() => {

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    }, 250);

}


/* =========================================================
   PHONE INPUT
   ========================================================= */

function setupPhoneInput() {

    const phone =
        document.getElementById("phone");


    if (!phone) return;


    phone.addEventListener("input", () => {

        phone.value =
            phone.value
                .replace(/\D/g, "")
                .slice(0, 10);

    });

}


/* =========================================================
   AGE INPUT
   ========================================================= */

function setupAgeInput() {

    const age =
        document.getElementById("age");


    if (!age) return;


    age.addEventListener("input", () => {

        let value =
            age.value
                .replace(/\D/g, "");


        if (value.length > 3) {

            value =
                value.slice(0, 3);

        }


        age.value = value;


        if (Number(value) > 100) {

            age.value = "100";

        }

    });

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const toggle =
        document.getElementById("menuToggle");

    const nav =
        document.getElementById("navLinks");


    if (!toggle || !nav) return;


    toggle.addEventListener("click", () => {

        nav.classList.toggle("active");

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });

}


/* =========================================================
   SCROLL PROGRESS
   ========================================================= */

function setupScrollProgress() {

    const progress =
        document.getElementById("progressBar");


    if (!progress) return;


    const updateProgress = () => {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        const percentage =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;


        progress.style.width =
            `${percentage}%`;

    };


    window.addEventListener(
        "scroll",
        updateProgress,
        { passive: true }
    );


    updateProgress();

}


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

function setupRevealAnimation() {

    const elements =
        document.querySelectorAll(".reveal");


    if (!elements.length) return;


    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {

            element.classList.add("active");

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   CURSOR GLOW
   ========================================================= */

function setupCursorGlow() {

    if (
        window.matchMedia &&
        window.matchMedia("(pointer: coarse)").matches
    ) {
        return;
    }


    window.addEventListener("mousemove", event => {

        document.documentElement.style.setProperty(
            "--mouse-x",
            `${event.clientX}px`
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            `${event.clientY}px`
        );

    });

}


/* =========================================================
   HERO PARALLAX
   ========================================================= */

function setupHeroParallax() {

    const heroVisual =
        document.querySelector(".hero-visual");


    if (!heroVisual) return;


    if (
        window.matchMedia &&
        window.matchMedia("(pointer: coarse)").matches
    ) {
        return;
    }


    heroVisual.addEventListener("mousemove", event => {

        const rect =
            heroVisual.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const rotateY =
            ((x / rect.width) - 0.5) * 5;

        const rotateX =
            ((y / rect.height) - 0.5) * -5;


        heroVisual.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    heroVisual.addEventListener("mouseleave", () => {

        heroVisual.style.transform =
            "";

    });

}


/* =========================================================
   FORM STATUS
   ========================================================= */

function showFormStatus(message, type = "") {

    const status =
        document.getElementById("formStatus");


    if (!status) return;


    status.textContent = message;

    status.className =
        `form-status ${type}`;


    if (type === "error") {

        setTimeout(() => {

            if (status.textContent === message) {

                status.textContent = "";

                status.className =
                    "form-status";

            }

        }, 5000);

    }

}


/* =========================================================
   NUMBER FORMAT
   ========================================================= */

function formatNumber(number) {

    return Number(number).toLocaleString("en-IN");

}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   END
   ========================================================= */