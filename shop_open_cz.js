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
var taxPay = 30;
//Trebic
var numTrebic = 0;
var TrebicIncome = 100;
var TrebicCost = 2000;
//CeskeBudejovice
var numCeskeBudejovice = 0;
var CeskeBudejoviceIncome = 500;
var CeskeBudejoviceCost = 10000;
//Olomouc
var numOlomouc = 0;
var OlomoucIncome = 1000;
var OlomoucCost = 20000;
//Liberec
var numLiberec = 0;
var LiberecIncome = 5000;
var LiberecCost = 100000;
//Plzen
var numPlzen = 0;
var PlzenIncome = 10000;
var PlzenCost = 200000;
//Ostrava
var numOstrava = 0;
var OstravaIncome = 50000;
var OstravaCost = 1000000;
//Brno
var numBrno = 0;
var BrnoIncome = 100000;
var BrnoCost = 2000000;
//Prague
var numPrague = 0;
var PragueIncome = 500000;
var PragueCost = 10000000;
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
    taxPay = Math.round((taxPay * 1.10));
}
//worker and branches
//advertisement
function ad() {
    userMoney = userMoney + adIncome * numAd;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyAd() {
    if (userMoney < adCost) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have " + adCost + " Kč.");

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
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have" + workerCost + " Kč.");;

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
    workerPay = Math.round((workerPay * 1.10))
}
//Trebic
function Trebic() {
    userMoney = userMoney + TrebicIncome * numTrebic;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyTrebic() {
    if (userMoney < TrebicCost) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have " + TrebicCost + " Kč.");;

        return;
    }
    numTrebic = numTrebic + 1;
    userMoney = userMoney - TrebicCost;
    TrebicCost = Math.round((TrebicCost * 1.15));
    document.getElementById("TrebicCost").innerHTML = TrebicCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("TrebicProduction").innerHTML = numTrebic * TrebicIncome;
    document.getElementById("numTrebic").innerHTML = numTrebic;
    totalProduction();
}
//CeskeBudejovice
function CeskeBudejovice() {
    userMoney = userMoney + CeskeBudejoviceIncome * numCeskeBudejovice;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyCeskeBudejovice() {
    if (userMoney < CeskeBudejoviceCost) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have " + CeskeBudejoviceCost + " Kč.");;

        return;
    }
    numCeskeBudejovice = numCeskeBudejovice + 1;
    userMoney = userMoney - CeskeBudejoviceCost;
    CeskeBudejoviceCost = Math.round((CeskeBudejoviceCost * 1.15));
    document.getElementById("CeskeBudejoviceCost").innerHTML = CeskeBudejoviceCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("CeskeBudejoviceProduction").innerHTML = numCeskeBudejovice * CeskeBudejoviceIncome;
    document.getElementById("numCeskeBudejovice").innerHTML = numCeskeBudejovice;
    totalProduction();
}
//Olomouc
function Olomouc() {
    userMoney = userMoney + OlomoucIncome * numOlomouc;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyOlomouc() {
    if (userMoney < OlomoucCost) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have " + OlomoucCost + " Kč.");;

        return;
    }
    numOlomouc = numOlomouc + 1;
    userMoney = userMoney - OlomoucCost;
    OlomoucCost = Math.round((OlomoucCost * 1.15));
    document.getElementById("OlomoucCost").innerHTML = OlomoucCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("OlomoucProduction").innerHTML = numOlomouc * OlomoucIncome;
    document.getElementById("numOlomouc").innerHTML = numOlomouc;
    totalProduction();
}
//Liberec
function Liberec() {
    userMoney = userMoney + LiberecIncome * numLiberec;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyLiberec() {
    if (userMoney < LiberecCost) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have " + LiberecCost + " Kč.");;

        return;
    }
    numLiberec = numLiberec + 1;
    userMoney = userMoney - LiberecCost;
    LiberecCost = Math.round((LiberecCost * 1.15));
    document.getElementById("LiberecCost").innerHTML = LiberecCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("LiberecProduction").innerHTML = numLiberec * LiberecIncome;
    document.getElementById("numLiberec").innerHTML = numLiberec;
    totalProduction();
}
//Plzen
function Plzen() {
    userMoney = userMoney + PlzenIncome * numPlzen;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyPlzen() {
    if (userMoney < PlzenCost) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have " + PlzenCost + " Kč.");;

        return;
    }
    numPlzen = numPlzen + 1;
    userMoney = userMoney - PlzenCost;
    PlzenCost = Math.round((PlzenCost * 1.15));
    document.getElementById("PlzenCost").innerHTML = PlzenCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("PlzenProduction").innerHTML = numPlzen * PlzenIncome;
    document.getElementById("numPlzen").innerHTML = numPlzen;
    totalProduction();
}
//Ostrava
function Ostrava() {
    userMoney = userMoney + OstravaIncome * numOstrava;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyOstrava() {
    if (userMoney < OstravaCost) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have " + OstravaCost + " Kč.");;

        return;
    }
    numOstrava = numOstrava + 1;
    userMoney = userMoney - OstravaCost;
    OstravaCost = Math.round((OstravaCost * 1.15));
    document.getElementById("OstravaCost").innerHTML = OstravaCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("OstravaProduction").innerHTML = numOstrava * OstravaIncome;
    document.getElementById("numOstrava").innerHTML = numOstrava;
    totalProduction();
}
//Brno
function Brno() {
    userMoney = userMoney + BrnoIncome * numBrno;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyBrno() {
    if (userMoney < BrnoCost) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have " + BrnoCost + " Kč.");;

        return;
    }
    numBrno = numBrno + 1;
    userMoney = userMoney - BrnoCost;
    BrnoCost = Math.round((BrnoCost * 1.15));
    document.getElementById("BrnoCost").innerHTML = BrnoCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("BrnoProduction").innerHTML = numBrno * BrnoIncome;
    document.getElementById("numBrno").innerHTML = numBrno;
    totalProduction();
}
//Prague
function Prague() {
    userMoney = userMoney + PragueIncome * numPrague;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyPrague() {
    if (userMoney < PragueCost) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have " + PragueCost + " Kč.");;

        return;
    }
    numPrague = numPrague + 1;
    userMoney = userMoney - PragueCost;
    PragueCost = Math.round((PragueCost * 1.15));
    document.getElementById("PragueCost").innerHTML = PragueCost;
    document.getElementById("userMoney").innerHTML = userMoney;
document.getElementById("PragueProduction").innerHTML = numPrague * PragueIncome;
    document.getElementById("numPrague").innerHTML = numPrague;
    totalProduction();
}
//shop construction
//passports
function buyPassports() {
    if (userMoney < 100000000) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have 100000000 Kč.");

        return;
    }
    if (passports) {
        alert("You already have passports!");
        return;
    }
    passports = true;
    userMoney = userMoney - 100000000;
    document.getElementById("passports").innerHTML = "";
    document.getElementById("passportsPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//website
function buyWebsite() {
    if (userMoney < 150000000) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have 150000000 Kč.");

        return;
    }
    if (website) {
        alert("You already have website!");
        return;
    }
    website = true;
    userMoney = userMoney - 150000000;
    document.getElementById("website").innerHTML = "";
    document.getElementById("websitePrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//site selection
function buySiteselection() {
    if (userMoney < 200000000) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have 200000000 Kč.");

        return;
    }
    if (siteselection) {
        alert("You already have site selection!");
        return;
    }
    siteselection = true;
    userMoney = userMoney - 200000000;
    document.getElementById("siteselection").innerHTML = "";
    document.getElementById("siteselectionPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//documents
function buyDocuments() {
    if (userMoney < 250000000) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have 250000000 Kč.");

        return;
    }
    if (documents) {
        alert("You already have documents!");
        return;
    }
    documents = true;
    userMoney = userMoney - 250000000;
    document.getElementById("documents").innerHTML = "";
    document.getElementById("documentsPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//work permit
function buyWorkPermit() {
    if (userMoney < 300000000) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have 300000000 Kč.");

        return;
    }
    if (workpermit) {
        alert("You already have work permit!");
        return;
    }
    workpermit = true;
    userMoney = userMoney - 300000000;
    document.getElementById("workpermit").innerHTML = "";
    document.getElementById("workpermitPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//building permit
function buyBuildingPermit() {
    if (userMoney < 350000000) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have 350000000 Kč.");

        return;
    }
    if (buildingPermit) {
        alert("You already have building permit!");
        return;
    }
    buildingPermit = true;
    userMoney = userMoney - 350000000;
    document.getElementById("buildingPermit").innerHTML = "";
    document.getElementById("buildingPermitPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//land
function buyLand() {
    if (userMoney < 400000000) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have 400000000 Kč.");

        return;
    }
    if (land) {
        alert("You already have land!");
        return;
    }
    land = true;
    userMoney = userMoney - 400000000;
    document.getElementById("land").innerHTML = "";
    document.getElementById("landPrice").innerHTML = "Already bought";
    checkExpandStatus();
}
//transport
function buyTransport() {
    if (userMoney < 450000000) {
        alert("You don't have enough Kč! You have only " + userMoney + " Kč! You must have 450000000 Kč.");

        return;
    }
    if (transport) {
        alert("You already have transport!");
        return;
    }
    transport = true;
    userMoney = userMoney - 450000000;
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
    if (userMoney < 1000000000) {
        alert("You don't have enought Kč to expand your company!");
        return;
    }
    document.getElementById("expandStatus").innerHTML = "Built!!!";
    document.getElementById("header").innerHTML = "Your company was expand succesfully!!";
    alert("Well done you pass level 3.");
    window.location.href="level_nope.html";
}
//calculate total production
function totalProduction() {
    var adProduction = parseInt(document.getElementById("adProduction").innerHTML);
    var workerProduction = parseInt(document.getElementById("workerProduction").innerHTML);
    var TrebicProduction = parseInt(document.getElementById("TrebicProduction").innerHTML);
    var CeskeBudejoviceProduction = parseInt(document.getElementById("CeskeBudejoviceProduction").innerHTML);
    var OlomoucProduction = parseInt(document.getElementById("OlomoucProduction").innerHTML);
    var LiberecProduction = parseInt(document.getElementById("LiberecProduction").innerHTML);
    var PlzenProduction = parseInt(document.getElementById("PlzenProduction").innerHTML);
    var OstravaProduction = parseInt(document.getElementById("OstravaProduction").innerHTML);
    var BrnoProduction = parseInt(document.getElementById("BrnoProduction").innerHTML);
    var PragueProduction = parseInt(document.getElementById("PragueProduction").innerHTML);
    document.getElementById("totalProduction").innerHTML = adProduction + workerProduction + TrebicProduction + CeskeBudejoviceProduction + OlomoucProduction + LiberecProduction + PlzenProduction + OstravaProduction + BrnoProduction + PragueProduction;
}
//reset
function reset() {
    window.location.href="shop_open_cz.html";
}
//interval functions
window.setInterval(function() {
    ad();
    worker()
    Trebic();
    CeskeBudejovice();
    Olomouc();
    Liberec();
    Plzen();
    Ostrava();
    Brno();
    Prague();
}, 1000);
window.setInterval(function() {
    adm();
    workerm();
    electricity();
    water();
    taxes();
}, 10000);