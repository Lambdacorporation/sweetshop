//work
var basicIncome = 1;
var workMultiplier = 1;
var userMoney = 1;
//advertisement
var numAd = 0;
var adIncome = 10;
var adCost = 10;
//rent for ad
var adRent = 60;
//worker
var numWorker = 0;
var workerIncome = 15;
var workerCost = 100;
//worker pay
var workerPay = 100;
//electricity
var electricityPay = 10;
//water
var waterPay = 15;
//taxes
var taxPay = 10;
//Dornbirn
var numDornbirn = 0;
var dornbirnIncome = 100;
var dornbirnCost = 1000;
//Villach
var numVillach = 0;
var villachIncome = 500;
var villachCost = 5000;
//Klagenfurt
var numKlagenfurt = 0;
var klagenfurtIncome = 1000;
var klagenfurtCost = 10000;
//Innsbruck
var numInnsbruck = 0;
var innsbruckIncome = 5000;
var innsbruckCost = 50000;
//Salzburg
var numSalzburg = 0;
var salzburgIncome = 10000;
var salzburgCost = 100000;
//Linz
var numLinz = 0;
var linzIncome = 50000;
var linzCost = 500000;
//Graz
var numGraz = 0;
var grazIncome = 100000;
var grazCost = 1000000;
//Wien
var numWien = 0;
var wienIncome = 500000;
var wienCost = 5000000;
//expand
var passports = false;
var website = false;
var siteselection = false;
var documents = false;
var workpermit = false;
var buildingPermit = false;
var land = false;
var transport = false;
var readyToExpand = false;
//work
function work() {
    userMoney = userMoney + basicIncome * workMultiplier;
    document.getElementById("userMoney").innerHTML = userMoney;
    if (userMoney == 5) {
        document.getElementById("instructions").innerHTML = "";
    }
}
//electricity
function electricity() {
    userMoney = userMoney - electricityPay;
    document.getElementById("userMoney").innerHTML = userMoney;
    electricityPay = Math.round((electricityPay * 1.05));
}
//water
function water() {
    userMoney = userMoney - waterPay;
    document.getElementById("userMoney").innerHTML = userMoney;
    waterPay = Math.round((waterPay * 1.05));
}
//taxes
function taxes() {
    userMoney = userMoney - taxPay;
    document.getElementById("userMoney").innerHTML = userMoney;
    taxPay = Math.round((taxPay * 1.05));
}
//worker and factories
//advertisement
function ad() {
    userMoney = userMoney + adIncome * numAd;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyAd() {
    if (userMoney < adCost) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have " + adCost + " €.");

        return;
    }
    numAd = numAd + 1;
    userMoney = userMoney - adCost;
    adCost = Math.round((adCost * 1.50));
    adIncome = Math.round((adIncome * 1.20))
    document.getElementById("adCost").innerHTML = adCost;
    document.getElementById("userMoney").innerHTML = userMoney;
    document.getElementById("adProduction").innerHTML = numAd * adIncome;
    document.getElementById("numAd").innerHTML = numAd;
    totalProduction();
}
//avertisement rent
function adm() {
    userMoney = userMoney - adRent * numAd;
    document.getElementById("userMoney").innerHTML = userMoney;
    adRent = Math.round((adRent * 1))
}
//worker
function worker() {
    userMoney = userMoney + workerIncome * numWorker;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyWorker() {
    if (userMoney < workerCost) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have" + workerCost + " €.");;

        return;
    }
    numWorker = numWorker + 1;
    userMoney = userMoney - workerCost;
    workerCost = Math.round((workerCost * 1.25));
    document.getElementById("workerCost").innerHTML = workerCost;
    document.getElementById("userMoney").innerHTML = userMoney;
    document.getElementById("workerProduction").innerHTML = numWorker * workerIncome;
    document.getElementById("numWorker").innerHTML = numWorker;
    totalProduction();
}
//worker pay
function workerm() {
    userMoney = userMoney - workerPay * numWorker;
    document.getElementById("userMoney").innerHTML = userMoney;
    workerPay = Math.round((workerPay * 1))
}
//Branches
numBranches = numDornbirn + numVillach + numKlagenfurt + numInnsbruck + numSalzburg + numLinz + numGraz + numWien;
document.getElementById("numBranches").innerHTML = numBranches;
//Dornbirn
function dornbirn() {
    userMoney = userMoney + dornbirnIncome * numDornbirn;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyDornbirn() {
    if (userMoney < dornbirnCost) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have " + dornbirnCost + " €.");;

        return;
    }
    numDornbirn = numDornbirn + 1;
    userMoney = userMoney - dornbirnCost;
    dornbirnCost = Math.round((dornbirnCost * 1.15));
    document.getElementById("dornbirnCost").innerHTML = dornbirnCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("dornbirnProduction").innerHTML = numDornbirn * dornbirnIncome;
    document.getElementById("numDornbirn").innerHTML = numDornbirn;
    totalProduction();
}
//Villach
function villach() {
    userMoney = userMoney + villachIncome * numVillach;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyVillach() {
    if (userMoney < villachCost) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have " + villachCost + " €.");;

        return;
    }
    numVillach = numVillach + 1;
    userMoney = userMoney - villachCost;
    villachCost = Math.round((villachCost * 1.15));
    document.getElementById("villachCost").innerHTML = villachCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("villachProduction").innerHTML = numVillach * villachIncome;
    document.getElementById("numVillach").innerHTML = numVillach;
    totalProduction();
}
//Klagenfurt
function klagenfurt() {
    userMoney = userMoney + klagenfurtIncome * numKlagenfurt;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyKlagenfurt() {
    if (userMoney < klagenfurtCost) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have " + klagenfurtCost + " €.");;

        return;
    }
    numKlagenfurt = numKlagenfurt + 1;
    userMoney = userMoney - klagenfurtCost;
    klagenfurtCost = Math.round((klagenfurtCost * 1.15));
    document.getElementById("klagenfurtCost").innerHTML = klagenfurtCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("klagenfurtProduction").innerHTML = numKlagenfurt * klagenfurtIncome;
    document.getElementById("numKlagenfurt").innerHTML = numKlagenfurt;
    totalProduction();
}
//Innsbruck
function innsbruck() {
    userMoney = userMoney + innsbruckIncome * numInnsbruck;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyInnsbruck() {
    if (userMoney < innsbruckCost) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have " + innsbruckCost + " €.");;

        return;
    }
    numInnsbruck = numInnsbruck + 1;
    userMoney = userMoney - innsbruckCost;
    innsbruckCost = Math.round((innsbruckCost * 1.15));
    document.getElementById("innsbruckCost").innerHTML = innsbruckCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("innsbruckProduction").innerHTML = numInnsbruck * innsbruckIncome;
    document.getElementById("numInnsbruck").innerHTML = numInnsbruck;
    totalProduction();
}
//Salzburg
function salzburg() {
    userMoney = userMoney + salzburgIncome * numSalzburg;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buySalzburg() {
    if (userMoney < salzburgCost) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have " + salzburgCost + " €.");;

        return;
    }
    numSalzburg = numSalzburg + 1;
    userMoney = userMoney - salzburgCost;
    salzburgCost = Math.round((salzburgCost * 1.15));
    document.getElementById("salzburgCost").innerHTML = salzburgCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("salzburgProduction").innerHTML = numSalzburg * salzburgIncome;
    document.getElementById("numSalzburg").innerHTML = numSalzburg;
    totalProduction();
}
//Linz
function linz() {
    userMoney = userMoney + linzIncome * numLinz;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyLinz() {
    if (userMoney < linzCost) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have " + linzCost + " €.");;

        return;
    }
    numLinz = numLinz + 1;
    userMoney = userMoney - linzCost;
    linzCost = Math.round((linzCost * 1.15));
    document.getElementById("linzCost").innerHTML = linzCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("linzProduction").innerHTML = numLinz * linzIncome;
    document.getElementById("numLinz").innerHTML = numLinz;
    totalProduction();
}
//Graz
function graz() {
    userMoney = userMoney + grazIncome * numGraz;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyGraz() {
    if (userMoney < grazCost) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have " + grazCost + " €.");;

        return;
    }
    numGraz = numGraz + 1;
    userMoney = userMoney - grazCost;
    grazCost = Math.round((grazCost * 1.15));
    document.getElementById("grazCost").innerHTML = grazCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("grazProduction").innerHTML = numGraz * grazIncome;
    document.getElementById("numGraz").innerHTML = numGraz;
    totalProduction();
}
//Wien
function wien() {
    userMoney = userMoney + wienIncome * numWien;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyWien() {
    if (userMoney < wienCost) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have " + wienCost + " €.");;

        return;
    }
    numWien = numWien + 1;
    userMoney = userMoney - wienCost;
    wienCost = Math.round((wienCost * 1.15));
    document.getElementById("wienCost").innerHTML = wienCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("wienProduction").innerHTML = numWien * wienIncome;
    document.getElementById("numWien").innerHTML = numWien;
    totalProduction();
}
//shop construction
//passports
function buyPassports() {
    if (userMoney < 10000000) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have 10000000 €.");

        return;
    }
    if (passports) {
        alert("You already have passports!");
        return;
    }
    passports = true;
    userMoney = userMoney - 10000000;
    document.getElementById("passports").innerHTML = "";
    document.getElementById("passportsPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//website
function buyWebsite() {
    if (userMoney < 15000000) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have 15000000 €.");

        return;
    }
    if (website) {
        alert("You already have website!");
        return;
    }
    website = true;
    userMoney = userMoney - 15000000;
    document.getElementById("website").innerHTML = "";
    document.getElementById("websitePrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//site selection
function buySiteselection() {
    if (userMoney < 20000000) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have 20000000 €.");

        return;
    }
    if (siteselection) {
        alert("You already have site selection!");
        return;
    }
    siteselection = true;
    userMoney = userMoney - 20000000;
    document.getElementById("siteselection").innerHTML = "";
    document.getElementById("siteselectionPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//documents
function buyDocuments() {
    if (userMoney < 25000000) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have 25000000 €.");

        return;
    }
    if (documents) {
        alert("You already have documents!");
        return;
    }
    documents = true;
    userMoney = userMoney - 25000000;
    document.getElementById("documents").innerHTML = "";
    document.getElementById("documentsPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//work permit
function buyWorkPermit() {
    if (userMoney < 30000000) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have 30000000 €.");

        return;
    }
    if (workpermit) {
        alert("You already have work permit!");
        return;
    }
    workpermit = true;
    userMoney = userMoney - 30000000;
    document.getElementById("workpermit").innerHTML = "";
    document.getElementById("workpermitPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//building permit
function buyBuildingPermit() {
    if (userMoney < 35000000) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have 35000000 €.");

        return;
    }
    if (buildingPermit) {
        alert("You already have building permit!");
        return;
    }
    buildingPermit = true;
    userMoney = userMoney - 35000000;
    document.getElementById("buildingPermit").innerHTML = "";
    document.getElementById("buildingPermitPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//land
function buyLand() {
    if (userMoney < 40000000) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have 40000000 €.");

        return;
    }
    if (land) {
        alert("You already have land!");
        return;
    }
    land = true;
    userMoney = userMoney - 40000000;
    document.getElementById("land").innerHTML = "";
    document.getElementById("landPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//transport
function buyTransport() {
    if (userMoney < 45000000) {
        alert("You don't have enough €! You have only " + userMoney + " €! You must have 45000000 €.");

        return;
    }
    if (transport) {
        alert("You already have transport!");
        return;
    }
    transport = true;
    userMoney = userMoney - 45000000;
    document.getElementById("transport").innerHTML = "";
    document.getElementById("transportPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//expansion status
function checkExpandStatus() {
    if (passports && website) {
        if (siteselection && documents) {
            if (workpermit && buildingPermit) {
                if (land && transport) {
                    readyToExpand = true;
                }
            }
        }
    }
    if (readyToExpand) {
        document.getElementById("expandStatus").innerHTML = "Ready to expand!";
    }
}
//expansion
function expandCompany() {
    if (!readyToExpand) {
        alert("Expansion is not ready!");
        return;
    }
    if (userMoney < 100000000) {
        alert("You don't have enought € to expand your company!");
        return;
    }
    document.getElementById("expandStatus").innerHTML = "Built!!!";
    document.getElementById("header").innerHTML = "Your company was expand succesfully!!";
    alert("Well done you pass level 2.");
    window.location.href="shop_open_cz.html";
}
//calculate total production
function totalProduction() {
    var adProduction = parseInt(document.getElementById("adProduction").innerHTML);
    var workerProduction = parseInt(document.getElementById("workerProduction").innerHTML);
    var dornbirnProduction = parseInt(document.getElementById("dornbirnProduction").innerHTML);
    var villachProduction = parseInt(document.getElementById("villachProduction").innerHTML);
    var klagenfurtProduction = parseInt(document.getElementById("klagenfurtProduction").innerHTML);
    var innsbruckProduction = parseInt(document.getElementById("innsbruckProduction").innerHTML);
    var salzburgProduction = parseInt(document.getElementById("salzburgProduction").innerHTML);
    var linzProduction = parseInt(document.getElementById("linzProduction").innerHTML);
    var grazProduction = parseInt(document.getElementById("grazProduction").innerHTML);
    var wienProduction = parseInt(document.getElementById("wienProduction").innerHTML);
    document.getElementById("totalProduction").innerHTML = adProduction + workerProduction + dornbirnProduction + villachProduction + klagenfurtProduction + innsbruckProduction + salzburgProduction + linzProduction + grazProduction + wienProduction;
}
//reset
function reset() {
    window.location.href="shop_open.html";
}
//interval functions
window.setInterval(function() {
    ad();
    worker()
    dornbirn();
    villach();
    klagenfurt();
    innsbruck();
    salzburg();
    linz();
    graz();
    wien();
}, 1000);
window.setInterval(function() {
    adm();
    workerm();
    electricity();
    water();
    taxes();
}, 10000);