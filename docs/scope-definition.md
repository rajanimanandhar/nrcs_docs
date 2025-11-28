# Scope Definition
## In-scope Features
### 1. User and Access Management


-> Different access roles: Super Admin, Admin, and Staff.

-> Secure authentication and authorization 

-> Full activity logging for compliance


### 2. Blood Donation Event and Workflow

-> Event creation, update, delete and archive

-> Assign event organizers/ volunteers and event location

->Event day donor entry via manual form

-> Staff assignment and duration tracking

-> Donation data capture (blood bag number, donor info, blood group, etc)

-> Donation status transition (Collected -> Tested -> Separated -> Issued)


###  3. Donor and Donation Data Management

-> Donor CRUD operations 

-> Maintain eligibility period (eg: donor cannot donate before 3 months)


-> Lifetime donation history tracking

-> Multiple donations linking under a single donor



### 4.  Laboratory Test Results Recording

-> Record and track every unit of collected blood

-> Recording of mandatory tests: HIV-I, HIV-II, HBsAG, HCV, BDRL

-> Secure update of test results with role-based access.

-> Unit transition to "Tested OK" status when all test results are valid.


### 5.Blood Component Separation

-> Separation logging: PRBC/ FP/ Platelet/ Whole Blood

-> Auto-calculation of expiry by component type

-> Linking separated units with original bag number

-> Auto-update of available component stock.

### 6. Inventory and Stock Control
-> Component-wise stock list by blood group

-> Real-time quantity update based on separation and issuance

-> Expiry tracking and near-expiry alerts

-> Components reservation and issue logging


### 7. Cross-Matching and Blood Issuance

-> Cross-match record for recipients/ hospitals.

-> Restriction on issuance unless cross-match succeds.

-> Final dispatch and handover record and update status 
(store, dispatch, remove)


### 8. Billing and Financial Transactions
-> New invoice generation

-> Custom billing template setup (charges for components/ cross-match/ others)

-> Payment history, pending invoices, and discount handling 

-> Printable invoice formats for customers records



### 9. Reports and Data Export
-> Event summary reports

-> Donor and donation history 

-> Test results and rejection stats

-> Inventory and stock aging 

-> Billing and revenue reports

-> Export support: Excel/ CSV/ PDF


### 10. Audit Trail and Compliance
-> Log every update to donor data, blood units, discharge history, and billing

-> Maintain timestamp and responsible user identity

-> Keep compliance with government health standards and Red Cross rules

## Out-scope Features
-> Online donor appointment booking

-> Donor mobile app/ self-registration portal

-> Automated physical blood tracking using QR/ barcode.

-> General patient medical case tracking outside of blood service



