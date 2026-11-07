// Speed Post by SL Post — fee calculator (plain, readable implementation).
//
// The fee table below was recovered from the original calculator and is
// dated 2024-04-14 (see "Last Updated" on the page). Sri Lanka Post changes
// its rates from time to time, so BEFORE relying on these numbers, verify
// them against the current SL Post Speed Post rate sheet and update
// FEE_TABLE below — that is the only place rates live in this project.
// Bands are lower-inclusive: a parcel is charged at the first band whose
// `upTo` is >= its weight. Maximum weight handled: 40,000 g.

// Optional Google Analytics measurement ID. Leave empty to disable
// analytics entirely; the gtag snippet is only loaded when this is set.
var GA_MEASUREMENT_ID = '';

var FEE_TABLE = [
  { upTo: 249, fee: 200 },
  { upTo: 499, fee: 250 },
  { upTo: 999, fee: 350 },
  { upTo: 1999, fee: 400 },
  { upTo: 2999, fee: 450 },
  { upTo: 3999, fee: 500 },
  { upTo: 4999, fee: 550 },
  { upTo: 5999, fee: 600 },
  { upTo: 6999, fee: 650 },
  { upTo: 7999, fee: 700 },
  { upTo: 8999, fee: 750 },
  { upTo: 9999, fee: 800 },
  { upTo: 14999, fee: 850 },
  { upTo: 19999, fee: 1100 },
  { upTo: 24999, fee: 1600 },
  { upTo: 29999, fee: 2100 },
  { upTo: 34999, fee: 2600 },
  { upTo: 40000, fee: 3100 }
];

var MAX_WEIGHT_GRAMS = 40000;

function lookupFee(weightGrams) {
  for (var i = 0; i < FEE_TABLE.length; i++) {
    if (weightGrams <= FEE_TABLE[i].upTo) return FEE_TABLE[i].fee;
  }
  return null; // over the maximum weight
}

function calculateFee() {
  var input = document.getElementById('weightInput');
  var result = document.getElementById('result');
  var weight = Number(input.value);

  if (!input.value || isNaN(weight) || weight <= 0) {
    result.innerHTML = 'Please enter a valid weight in grams (greater than 0).';
    return;
  }
  if (weight > MAX_WEIGHT_GRAMS) {
    result.innerHTML = 'No fee available for this weight range. The maximum weight is '
      + MAX_WEIGHT_GRAMS + ' grams.';
    return;
  }

  var fee = lookupFee(weight);
  result.innerHTML = 'The fee for ' + weight + ' grams is ' + fee + ' LKR.';
}

function resetCalc() {
  document.getElementById('weightInput').value = '';
  document.getElementById('result').innerHTML = '';
}

function toggleMenu() {
  var menuItems = document.getElementById('menuItems');
  menuItems.classList.toggle('active');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    }
  });
});

// Load Google Analytics only when a measurement ID is configured.
if (GA_MEASUREMENT_ID) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { dataLayer.push(arguments); };
  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(gtagScript);
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}
