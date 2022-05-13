// IMPORTAÇÕES
const {Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

// MÉTODO SETDEFAULTSERVICE DO CHROME 
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());


// FUNÇÃO ASSINCRONA CHAMADA TESTE
async function teste(){

    // INSTÂNCIA DO DRIVER E QUERO QUE ABRA NO BROWSER CHROME
    let driver = await new Builder().forBrowser('chrome').build();

    // MÉTODO GET PARA NAVEGAR NA PÁGINA QUE DESEJO IR
    await driver.get('http://automationpractice.com/index.php');

    // ENCONTRAR UM ELEMENTO ESPECIFICO DA PÁGINA
    await driver.findElement(By.className("header_user_info")).click();
    await driver.findElement(By.id("email_create")).sendKeys("teste2004@gmail.com");
    await driver.findElement(By.id("SubmitCreate")).click();

    // MASSA DE TESTE LOGIN COM SUCESSO
    await driver.findElement(By.id("id_gender1")).click();
    await driver.findElement(By.className("is_required validate form-control")).sendKeys("EL TESTE");
    await driver.findElement(By.id("customer_lastname")).sendKeys("ALVES");
    await driver.findElement(By.id("passwd")).sendKeys("123456");
    await driver.findElement(By.id("days")).sendKeys("11");
    await driver.findElement(By.name("months")).sendKeys("May");
    await driver.findElement(By.name("years")).sendKeys("2004");
    await driver.findElement(By.id("firstname")).sendKeys("TESTE");
    await driver.findElement(By.id("lastname")).sendKeys("TWO");
    await driver.findElement(By.id("company")).sendKeys("TESLE");
    await driver.findElement(By.id("id_state")).sendKeys("New York");
    await driver.findElement(By.id("postcode")).sendKeys("34567893");
    await driver.findElement(By.id("id_country")).sendKeys("United States");
    await driver.findElement(By.id("phone_mobile")).sendKeys("9876345123");
    await driver.findElement(By.id("submitAccount")).click();


};


// CHAMADA DO MÉTODO TESTE -> IRÁ SER EXECUTADO
teste();