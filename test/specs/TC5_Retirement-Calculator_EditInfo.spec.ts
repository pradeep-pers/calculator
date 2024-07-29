const TC5RetirementCalculatorEditInfo=require('../pageobjects/Page/Retirement-Calculator.page')
describe('retirement-calculator Page', () => {

    // TC01_ Open_retirement-calculator_page
    it('retirement-calculator', async () => {
        TC5RetirementCalculatorEditInfo.OpenUrl()
 
    })
     // TC02_ Enter_current_Age
    it('EnterAge', async () => {
        TC5RetirementCalculatorEditInfo.EnterAge('40')
    })
     // TC03_ Enter_plan to retire_age
     it('plan to retire_age', async () => {
        TC5RetirementCalculatorEditInfo.pLantoRetire('68')
    })

    // TC04_ What is your current annual income?
    it('current annual income', async () => {
        TC5RetirementCalculatorEditInfo.cAnuualIncome('1000')
    })
    // TC05_ What is your spouse's annual income?
    it('Spouse Anuual Income', async () => {
        TC5RetirementCalculatorEditInfo.Spouseannualincome('500')
    })
    // TC06_ What is your current retirement savings balance?
    it('Currentretirementsavingsbalance', async () => {
        TC5RetirementCalculatorEditInfo.Currentretirementsavingsbalance('1000')
    })

    // TC07_ How much are you currently saving each year for retirement?
    it('SavingEachYearForRetirement', async () => {
        TC5RetirementCalculatorEditInfo.Savingeachyearforretirement('200')
    })
    //TC08_Clickon Calulate Button
    it('Calculate', async () => {
        TC5RetirementCalculatorEditInfo.ClickonCalulateButton()
    })

    //TC09_Clickon Edit Info
    it('Clickon Edit Info', async () => {
        TC5RetirementCalculatorEditInfo.ClickonCalulateButton()
    })
    
    


})