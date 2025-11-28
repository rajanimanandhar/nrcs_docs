# Work Breakdown Structure
## 1. Project Initiation   <u>**- 42 hours**</u>
### 1.1. Requirements validation from existing system <u>**- 7 hours**</u>
### 1.2. Defined refined project scope and acceptance criteria <u>**- 14 hours**</u>
### 1.3. Create development timeline and sprint planning <u>**- 14 hours**</u>
### 1.4. Review existing schema and code structure <u>**- 7 hours**</u> 

## 2. Development <u>**- 140 hours** </u>
### 2.1. Event Creation and Management <u>**- 14 hours**</u> 

#### 2.1.1. Review and rewrite Event Create/Edit/ Delete functionality <u>**- 7 hours**</u> 
#### 2.1.2. Event closing/ locking after completion <u>**- 5 hours**</u> 
#### 2.1.3. Improve views for Event Details page <u>**- 2 hours**</u> 

### 2.2. Donor Registration and Blood Donation Logging <u>**- 22 hours**</u> 

#### 2.2.1. Add new donor entry and duplicate prevention check <u>**- 8 hours**</u> 
#### 2.2.2. Auto-bag number generator for each blood donation <u>**- 8 hours**</u> 
#### 2.2.3. Optimize "add new donor" workflow for fast data entry <u>**- 6 hours**</u> 


### 2.3. Laboratory Screening and Blood Test Entry <u>**- 18 hours**</u> 
#### 2.3.1. Test entry workflow (HIV, HCV, HBsAg, VDRL) <u>**- 6 hours**</u> 
#### 2.3.2. Auto Pass/ Fail status + rejected unit logic <u>**- 12 hours**</u> 

### 2.4. Component Separation <u>**- 16 hours**</u> 
#### 2.4.1. Component separation = auto creation of RCC/ FFP/ Platelets <u>**- 6 hours**</u> 
#### 2.4.2. Validate expiry date generation based on shelf life <u>**- 6 hours**</u> 
#### 2.4.3. Restrict separation edits after completion <u>**- 4 hours**</u> 

### 2.5. Stock Inventory <u>**- 4 hours**</u> 
#### 2.5.1. Real-time component-level stock updates <u>**- 4 hours**</u> 

### 2.6. Cross-Match for Patient/ Blood Request <u>**- 11 hours**</u> 
#### 2.6.1. Cross-match validation logic (blood group compatibility) <u>**- 8 hours**</u> 
#### 2.6.2. Prevent duplicate use of a separated unit <u>**- 3 hours**</u> 

### 2.7. Blood Issue/ Hospital Transfer <u>**- 20 hours**</u> 
#### 2.7.1. Blood issue request + approva workflow <u>**- 8 hours**</u> 
#### 2.7.2. Undo/ cancel logic with safe rollback to stock <u>**- 8 hours**</u> 
#### 2.7.3. Add hospital record linkage <u>**- 4 hours**</u> 

### 2.8. Billing & Invoice Generation <u>**- 28 hours**</u> 
#### 2.8.1. Billing Setup <u>**- 7 hours**</u> 
#### 2.8.2. Billing templates  <u>**- 7 hours**</u> 
#### 2.8.3. Dynamic invoice generation <u>**- 7 hours**</u> 
#### 2.8.4. Prevent invoice editing after payment completion <u>**- 7 hours**</u> 

### 2.9. Report & Analytics <u>**- 7 hours**</u> 
#### 2.9.1. Monthly billing reports for hospitals and events <u>**- 7 hours**</u> 

## 3. Testing <u>**- 21 hours**</u>
### 3.1. Functional and integration testing for all flows

## 4. Deployment/ Update <u>**- 7 hours**</u>
### 4.1. GitHub workflow cleanup and production deployment 

