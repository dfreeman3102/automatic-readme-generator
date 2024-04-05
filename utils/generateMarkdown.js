//function that returns a license badge based on which license is passed
function renderLicense(license) {
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "BSD"){
    return `[![License: BSD](https://img.shields.io/badge/License-BSD-red.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === "CDDL"){
    return `[![License: CDDL](https://img.shields.io/badge/License-CDDL-brightgreen.svg)](https://opensource.org/licenses/CDDL-1.0)`
  }
}

module.exports = renderLicense;
