# User Stories and Acceptance Criteria

### 1. Event Creation and Management 
#### User Story:
As a staff/ admin, I want to create and manage blood donation events so that donor registrations and donations can be tracked during the event.

#### Acceptance Criteria 
- Event can be created, updated and deleted.
- Required event fields include event name, location, organizer, date, and assigned staff.
- Event automatically changes status (Upcoming -> Active -> Completed)
- Staff can open an event and add donor donations dynamically during the event.
- Event list must show the total donations count.

### 2. Donor Registration and Blood Donation Logging
#### User Story:
As a staff, I want to register donors during or after an event so their personal and donation details are recorded. 

#### Acceptance Criteria 
- Donor form collects name, age, gender, RHO, contact, address, donor type (new/ existing).
- Donation details include all donor form details and others like donor no, bag number, collection time, volume, remarks.
- System prevents duplicate bag numbers.
- Successful creation shows the donor under the selected event donation list.

### 3. Serology 
#### User Story
As a lab technician/ staff, I want to enter blood test results so that safe and unsafe blood can be categorized.

#### Acceptance Criteria
- Tests include HIV I & II, HBsAg, HCV, VDRL with pass/ fail results.
- Marking failed immediately flags blood bag as Rejected and it is removed or thrown away.
- Marking Passed, results into the next phase that is component separation.


### 4. Component Separation
#### User Story
As a technician, I want to searate blood into components so that separated components can be stored and issued independently.

#### Acceptance Criteria 
- Components incude PRP, FFP, PRBC With SAGM(PRBC Sagm), Whole Divide(W.B. Divide), Prp Divide(PRP Divide), PRBC(PRBC), Cryo, Platelets Conc, Buffy Coat, Poor Plasma, Washed Cell.
- Each has bag code + expiry date + storage type.
- Failed or expired units automatically change status to Expired.
- Component separation record links component ID to the bag number.


### 5. Stock Inventory 
#### User Story
As a staff member, I want to view the available blood component stocks so I can check inventory levels.

#### Acceptance Criteria
- Stock table must show component type, blood group, quantity, expiry date , and location.
- Only components with status Available appear in inventory.
- Alerts trigger for low-stock and near-expiry units.

### 6. Cross-Match for Patient/ Blood Request
#### User Story
As medical staff, I want to cross-match blood units with a patient request so that compatibility can be confirmed.

#### Acceptance Criteria
- Patient details include name, age, urgency, blood group, hospital.
- System restricts selection to matching blood types only.
- Cross- match result can be Compatible or Incompatible
- Only compatible units cna be move forward to Ussue/ Transfer. 

### 7. Blood Issue / Hospital Transfer
#### User Story
As a staff member, I want to issue blood to hospitals or patients so that blood movement can be tracked.

#### Acceptance Criteria
- Once issued, stock quantity must decrease automatically.
- Issued record stores recipient name/ hospital, units issued, date/ time staff.
- Cannot issue if stock is insufficient or incompatible.

### 8. Billing & Invoice Generation
#### User Story
As a staff, I want to generate invoices from blood issues so that payments can be tracked.

#### Acceptance Criteria
- Billing Template defines cross match, Blood bag, Blood grouping, HIV Test, HBSAG Test, VDRL Test, and HCV Test.
- Invoice contains bill number, recipient/ hospital, quantity, rate, total.
- Invoice includes patient detail (name, age, address, contact), hospital type, id number, quantity and billing template pricing details. 
- Invoice PDF can be generated and printed.

### 9. Reporting & Analytics
#### User Story
As a staff or management team, I want to view event and inventory analytics so that yearly reports can be generated.

#### Acceptance Criteria
- Reports available by event,donor count, blood collected, components produced, stock availability, billing amount.
- CSV/ PDF export is supported 
