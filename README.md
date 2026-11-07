# speed-post-by-sl-post
Speed Post by SL Post Fee Calculator
![Speed-post-github](https://github.com/harindujayakody/speed-post-by-sl-post/assets/9878813/56259745-6a9f-4487-bd32-531ed1957aa9)

# Speed Post Price Calculator by Ekathuwa.org

This tool provides a simple way to calculate the price for sending a parcel using Sri Lankan Post Department's Speed Post service. It also includes delivery standards for reference.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Introduction

The Speed Post Price Calculator allows users to estimate the cost of sending a parcel via the Sri Lankan Post Department's Speed Post service. It provides information on the pricing structure based on weight and delivery destination.

## Installation

There is no installation required to use this tool. Simply access the calculator via the provided link.

## Usage

To use the Speed Post Price Calculator:

1. Enter the weight of your parcel in grams.
2. Click on the "Calculate" button to view the estimated price.
3. Optionally, you can reset the calculator by clicking the "Reset" button.

## Fee table (rates as of 2024-04-14)

The rates below are the ones this calculator ships with. **Verify them against
the current SL Post Speed Post rate sheet before relying on them** — SL Post
updates its rates periodically, and the table has not been re-verified since
2024-04-14. To update the rates, edit `FEE_TABLE` in `script.js` (the only
place rates live); each entry is `{ upTo: <max grams in band>, fee: <LKR> }`,
bands are lower-inclusive, max weight 40,000 g.

| Weight | Fee (LKR) |
|---|---|
| 1–249 g | 200 |
| 250–499 g | 250 |
| 500–999 g | 350 |
| 1,000–1,999 g | 400 |
| 2,000–2,999 g | 450 |
| 3,000–3,999 g | 500 |
| 4,000–4,999 g | 550 |
| 5,000–5,999 g | 600 |
| 6,000–6,999 g | 650 |
| 7,000–7,999 g | 700 |
| 8,000–8,999 g | 750 |
| 9,000–9,999 g | 800 |
| 10,000–14,999 g | 850 |
| 15,000–19,999 g | 1,100 |
| 20,000–24,999 g | 1,600 |
| 25,000–29,999 g | 2,100 |
| 30,000–34,999 g | 2,600 |
| 35,000–40,000 g | 3,100 |

## Analytics

Google Analytics is disabled by default. To enable it, set
`GA_MEASUREMENT_ID` at the top of `script.js` — the measurement ID is no
longer hardcoded in `index.html`.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For inquiries or assistance, please contact [Infiax (Private) Limited](https://ekathuwa.org/speed-post/).
