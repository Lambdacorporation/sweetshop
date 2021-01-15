//basic
var basicIncome = 1;
var workMultiplier = 1;
var userMoney = 1;
//advertisement
var numAd = 0;
var adIncome = 10;
var adCost = 10;
//worker
var numWorker = 0;
var workerIncome = 10;
var workerCost = 100;
//machine
var numMachine = 0;
var machineIncome = 100;
var machineCost = 1000;
//factory
var numFactory = 0;
var factoryIncome = 1000;
var factoryCost = 10000;
//robofactory
var numRobofactory = 0;
var robofactoryIncome = 10000;
var robofactoryCost = 100000;
//beltfactory
var numBeltfactory = 0;
var beltfactoryIncome = 100000;
var beltfactoryCost = 1000000;
//carconstruction
var shelves = false;
var cashregister = false;
var floors = false;
var walls = false;
var windows = false;
var roof = false;
var stock = false;
var transport = false;
var readyToOpen = false;
//work
function work() {
    userMoney = userMoney + basicIncome * workMultiplier;
    document.getElementById("userMoney").innerHTML = userMoney;
    if (userMoney == 5) {
        document.getElementById("instructions").innerHTML = "";
    }
}
//worker and factories
//advertisement
function ad() {
    userMoney = userMoney + adIncome * numAd;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyAd() {
    if (userMoney < adCost) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have" + adCost + "sweets.");

        return;
    }
    numAd = numAd + 1;
    userMoney = userMoney - adCost;
    adCost = Math.round((adCost * 1.50));
    adIncome = Math.round((adIncome * 1.10))
    document.getElementById("adCost").innerHTML = adCost;
    document.getElementById("userMoney").innerHTML = userMoney;
    document.getElementById("adProduction").innerHTML = numAd * adIncome;
    document.getElementById("numAd").innerHTML = numAd;
    totalProduction();
}
//worker
function worker() {
    userMoney = userMoney + workerIncome * numWorker;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyWorker() {
    if (userMoney < workerCost) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have" + workerCost + "sweets.");;

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
//machine
function machine() {
    userMoney = userMoney + machineIncome * numMachine;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyMachine() {
    if (userMoney < machineCost) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have" + machineCost + "sweets.");;

        return;
    }
    numMachine = numMachine + 1;
    userMoney = userMoney - machineCost;
    machineCost = Math.round((machineCost * 1.25));
    document.getElementById("machineCost").innerHTML = machineCost;
    document.getElementById("userMoney").innerHTML = userMoney;
    document.getElementById("machineProduction").innerHTML = numMachine * machineIncome;
    document.getElementById("numMachine").innerHTML = numMachine;
    totalProduction();
}
//factory
function factory() {
    userMoney = userMoney + factoryIncome * numFactory;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyFactory() {
    if (userMoney < factoryCost) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have" + factoryCost + "sweets.");;

        return;
    }
    numFactory = numFactory + 1;
    userMoney = userMoney - factoryCost;
    factoryCost = Math.round((factoryCost * 1.25));
    document.getElementById("factoryCost").innerHTML = factoryCost;
    document.getElementById("userMoney").innerHTML = userMoney;
    document.getElementById("factoryProduction").innerHTML = numFactory * factoryIncome;
    document.getElementById("numFactory").innerHTML = numFactory;
    totalProduction();
}
//robofactory
function robofactory() {
    userMoney = userMoney + robofactoryIncome * numRobofactory;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyRobofactory() {
    if (userMoney < robofactoryCost) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have" + robofactoryCost + "sweets.");;

        return;
    }
    numRobofactory = numRobofactory + 1;
    userMoney = userMoney - robofactoryCost;
    robofactoryCost = Math.round((robofactoryCost * 1.25));
    document.getElementById("robofactoryCost").innerHTML = robofactoryCost;
    document.getElementById("userMoney").innerHTML = userMoney;
    document.getElementById("robofactoryProduction").innerHTML = numRobofactory * robofactoryIncome;
    document.getElementById("numRobofactory").innerHTML = numRobofactory;
    totalProduction();
}
//beltfactory
function beltfactory() {
    userMoney = userMoney + beltfactoryIncome * numBeltfactory;
    document.getElementById("userMoney").innerHTML = userMoney;
}
function buyBeltfactory() {
    if (userMoney < beltfactoryCost) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have" + beltfactoryCost + "sweets.");;

        return;
    }
    numBeltfactory = numBeltfactory + 1;
    userMoney = userMoney - beltfactoryCost;
    beltfactoryCost = Math.round((beltfactoryCost * 1.25));
    document.getElementById("beltfactoryCost").innerHTML = beltfactoryCost;
    document.getElementById("userMoney").innerHTML = userMoney;
    document.getElementById("beltfactoryProduction").innerHTML = numBeltfactory * beltfactoryIncome;
    document.getElementById("numBeltfactory").innerHTML = numBeltfactory;
    totalProduction();
}
//shop construction
//shelves
function buyShelves() {
    if (userMoney < 10000000) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have 10000000 sweets.");

        return;
    }
    if (shelves) {
        alert("You already have shelves!");
        return;
    }
    shelves = true;
    userMoney = userMoney - 10000000;
    document.getElementById("shelves").innerHTML = "";
    document.getElementById("shelvesPrice").innerHTML = "Already bought";
    checkOpenStatus();
}
//cashregister
function buyCashregister() {
    if (userMoney < 15000000) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have 15000000 sweets.");

        return;
    }
    if (cashregister) {
        alert("You already have cash register!");
        return;
    }
    cashregister = true;
    userMoney = userMoney - 15000000;
    document.getElementById("cashregister").innerHTML = "";
    document.getElementById("cashregisterPrice").innerHTML = "Already bought";
    checkOpenStatus();
}
//floors
function buyFloors() {
    if (userMoney < 20000000) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have 20000000 sweets.");

        return;
    }
    if (floors) {
        alert("You already have floors!");
        return;
    }
    floors = true;
    userMoney = userMoney - 20000000;
    document.getElementById("floors").innerHTML = "";
    document.getElementById("floorsPrice").innerHTML = "Already bought";
    checkOpenStatus();
}
//walls
function buyWalls() {
    if (userMoney < 25000000) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have 25000000 sweets.");

        return;
    }
    if (walls) {
        alert("You already have walls!");
        return;
    }
    walls = true;
    userMoney = userMoney - 25000000;
    document.getElementById("walls").innerHTML = "";
    document.getElementById("wallsPrice").innerHTML = "Already bought";
    checkOpenStatus();
}
//windows
function buyWindows() {
    if (userMoney < 30000000) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have 30000000 sweets.");

        return;
    }
    if (windows) {
        alert("You already have windows!");
        return;
    }
    windows = true;
    userMoney = userMoney - 30000000;
    document.getElementById("windows").innerHTML = "";
    document.getElementById("windowsPrice").innerHTML = "Already bought";
    checkOpenStatus();
}
//roof
function buyRoof() {
    if (userMoney < 35000000) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have 35000000 sweets.");

        return;
    }
    if (roof) {
        alert("You already have roof!");
        return;
    }
    roof = true;
    userMoney = userMoney - 35000000;
    document.getElementById("roof").innerHTML = "";
    document.getElementById("roofPrice").innerHTML = "Already bought";
    checkOpenStatus();
}
//stock
function buyStock() {
    if (userMoney < 40000000) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have 40000000 sweets.");

        return;
    }
    if (stock) {
        alert("You already have stock!");
        return;
    }
    stock = true;
    userMoney = userMoney - 40000000;
    document.getElementById("stock").innerHTML = "";
    document.getElementById("stockPrice").innerHTML = "Already bought";
    checkOpenStatus();
}
//transport
function buyTransport() {
    if (userMoney < 45000000) {
        alert("You don't have enough sweets! You have only" + userMoney + "sweets! You must have 45000000 sweets.");

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
    checkOpenStatus();
}
//shop status
function checkOpenStatus() {
    if (shelves && cashregister) {
        if (floors && walls) {
            if (windows && roof) {
                if (stock && transport) {
                    readyToOpen = true;
                }
            }
        }
    }
    if (readyToRide) {
        document.getElementById("shopStatus").innerHTML = "Ready to open!";
    }
}
//open shop
function openShop() {
    if (!readyToOpen) {
        alert("Shop is not ready to open!");
        return;
    }
    if (userMoney < 100000000) {
        alert("You don't have enought sweets to open shop!");
        return;
    }
    document.getElementById("shopStatus").innerHTML = "Built!!!";
    document.getElementById("header").innerHTML = "Shop was built succesfully!!";
    alert("Well done you pass level 1.");
    window.location.href="shop_open.html";
}
//calculate total production
function totalProduction() {
    var adProduction = parseInt(document.getElementById("adProduction").innerHTML);
    var workerProduction = parseInt(document.getElementById("workerProduction").innerHTML);
    var machineProduction = parseInt(document.getElementById("machineProduction").innerHTML);
    var factoryProduction = parseInt(document.getElementById("factoryProduction").innerHTML);
    var robofactoryProduction = parseInt(document.getElementById("robofactoryProduction").innerHTML);
    var beltfactoryProduction = parseInt(document.getElementById("beltfactoryProduction").innerHTML);
    document.getElementById("totalProduction").innerHTML = adProduction + workerProduction + machineProduction + factoryProduction + robofactoryProduction + beltfactoryProduction;
}
//reset
function reset() {
    window.location.href="shop.html";
}
//interval functions
window.setInterval(function() {
    ad();
    worker();
    machine();
    factory();
    robofactory();
    beltfactory();
}, 1000);