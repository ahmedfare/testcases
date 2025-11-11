const testData = {
  categories: [
    {
      id: 'cart',
      name: 'Cart',
      description: 'Shopping cart functionality tests',
      icon: '🛒',
      iconBg: '#f56565',
      tests: [
        {
          id: 'cart-1',
          testId : 'CART-001' ,
          name: 'Verify that the product is displayed in the cart with a quantity of 1 When a user clicks Add to Cart from a product page and then clicks View Cart.',
          status: 'passed',
          message: 'All good',
          steps: '1. Open the website: https://automationexercise.com/. \n 2. Click the Products link in the header. \n 3. Locate Men T-shirt and click View Product. \n 4. On the Product Detail Page, click the Add to Cart button. \n 5. In the confirmation pop-up, click View Cart.',
          expected: 'Product A is displayed in the cart with a quantity of 1.',
          actual: 'Product A displayed correctly in the cart.',
          testType : 'Functional'
        },
        
        {
          id: 'cart-2',
          testId : 'CART-002' ,
          name: 'Verify that the cart displays two separate items in their own rows When a user adds two different products (A and B) to the cart.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/. \n 2. Add Product A to cart (via Product page). \n 3. Click Continue Shopping in the pop-up. \n 4. Repeat steps 2-3 for Product B. \n 5. In the confirmation pop-up, click View Cart.',
          expected: 'The cart displays two separate items — Product A and Product B — each in its own row.',
          actual: 'Both products displayed separately.',
          testType : 'Functional'

        },
        {
          id: 'cart-3',
          testId : 'CART-003' ,
          name: 'Verify that the product appears once with the quantity updated to 2 When a user adds the same product to the cart twice.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/. \n 2. Add Product A to cart. \n 3. Click Continue Shopping. \n 4. Repeat steps 2-3 for Product A again (without changing quantity). \n 5. Click View Cart.',
          expected: 'Product A appears once in the cart with the quantity updated to 2.',
          actual: 'Quantity updated correctly to 2.',
          testType : 'Functional'
        },{
          id: 'cart-4',
          testId : 'CART-004' ,
          name: 'Verify that the product is removed (and the Grand Total recalculates) When a user clicks the X (Remove) icon for that item in the cart.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/. \n 2. Ensure Cart contains Product A and Product B. \n 3. Navigate to the Cart page. \n 4. Locate Product A and click the X (Remove) icon.',
          expected: 'Product A is removed. Product B remains. The Grand Total is recalculated correctly.',
          actual: 'Product A removed successfully; total updated.',
          testType : 'Functional'
        },{
          id: 'cart-5',
          testId : 'CART-005' ,
          name: 'Verify that an "Empty Cart" message is displayed When a user sequentially clicks the X icon to remove all products.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/. \n 2. Ensure Cart contains 3 different products. \n 3. Navigate to the Cart page. \n 4. Sequentially click the X icon for all 3 products until the list is clear.',
          expected: 'All products are removed, and the cart displays an "Empty Cart" message.',
          actual: 'Empty Cart message displayed as expected.',
          testType : 'Functional'
        } ,{
          id: 'cart-6',
          testId : 'CART-006' ,
          name: 'Verify that the page loads successfully and displays an "Empty Cart" message When a user clicks the Cart link in the header while their cart is empty.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/. \n 2. Ensure Cart is completely empty. \n 3. Click the Cart link in the header.',
          expected: 'The page loads successfully and displays an "Empty Cart" message.',
          actual: 'Empty Cart message shown correctly.',
          testType : 'Functional'
        } ,{
          id: 'cart-7',
          testId : 'CART-007' ,
          name: 'Verify that the quantity updates to 5 (and the total price recalculates) When a user changes the value in the quantity field from 1 to 5.',
          status: 'failed',
          message: 'There is a Bug 🐞',
          steps: '1. Open https://automationexercise.com/. \n 2. Ensure Cart contains Product A with Quantity 1. \n 3. Navigate to Cart. \n 4. Locate Product As Quantity field. \n 5. Change the value from 1 to 5. \n 6. Observe the automatic update or click Update Cart.',
          expected: 'The quantity updates to 5, and the total price reflects (Unit Price × 5).',
          actual: 'There is no button or input field to increase the product quantity — quantity remains unchanged.',
          testType : 'Functional'
        } ,{
          id: 'cart-8',
          testId : 'CART-008' ,
          name: 'Verify that the quantity updates to 2 (and the total price recalculates) When a user changes the value in the quantity field from 4 to 2.',
          status: 'failed',
           message: 'There is a Bug 🐞',
           steps: '1. Open https://automationexercise.com/. \n 2. Ensure Cart contains Product B with Quantity 4. \n 3. Navigate to Cart. \n 4. Change Quantity field for Product B from 4 to 2. \n 5. Observe the update.',
          expected: 'Quantity updates to 2, and total price reflects (Unit Price × 2).',
          actual: 'There is no option or button to decrease the product quantity — quantity remains unchanged.',
          testType : 'Functional'
        } ,{
          id: 'cart-9',
          testId : 'CART-009' ,
          name: 'Verify that the system rejects the invalid input (or shows an error) When a user tries to enter non-numeric text (e.g., abc) into the quantity field.',
          status: 'failed',
           message: 'There is a Bug 🐞',
           steps: '1. Open https://automationexercise.com/. \n 2. Ensure Cart contains Product D with Quantity 1. \n 3. Navigate to Cart. \n 4. Try to enter abc into the Quantity field. \n 5. Attempt to proceed or update the cart.',
          expected: 'The system rejects invalid input (e.g., reverts to 1) or displays a validation error.',
          actual: 'There is no input field available to type letters or invalid data — the quantity cannot be edited manually.',
          testType : 'Negative'
        } ,{
          id: 'cart-10',
          testId : 'CART-010' ,
          name: 'Verify that the displayed Unit Price in the cart exactly matches the price on the product page When a user views an item in the cart.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/. \n 2. Ensure Product A is in the cart. \n 3. Navigate to Cart. \n 4. Locate the Unit Price column for Product A and compare the value with the original price on the Product Page.',
          expected: 'The displayed Unit Price for Product A is Rs . 500, exactly matching the price shown on the product detail page.',
          actual: 'Unit Price correctly matched Rs . 500.',
          testType : 'Functional'
        } ,{
          id: 'cart-11',
          testId : 'CART-011' ,
          name: 'Verify that the Subtotal is accurately calculated (e.g., 4 x Rs. 400 = Rs. 1600) When a user views an item with a quantity greater than 1.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/. \n 2. Ensure Cart contains Product B with Quantity 4. \n 3. Navigate to Cart. \n 4. Change Quantity field for Product B from 4 to 2. \n 5. Observe the update.',
          expected: 'The Subtotal for Product B is accurately calculated as Rs. 1600 (4 × Rs. 400).',
          actual: 'Subtotal calculated correctly as Rs. 1600.',
          testType : 'Functional'
        } ,{
          id: 'cart-12',
          testId : 'CART-012' ,
          name: 'Verify that the Grand Total equals the sum of all item subtotals When a user views a cart containing multiple items.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/. \n 2. Ensure Cart contains items with known subtotals (e.g., Rs. 500 and Rs. 400). \n 3. Navigate to Cart. \n 4. Locate the Grand Total area and verify the sum (Rs. 900).',
          expected: 'The Grand Total equals the sum of all item subtotals: Rs. 900',
          actual: 'Grand Total correctly displayed as Rs. 900',
          testType : 'Functional'
        } ,{
          id: 'cart-13',
          testId : 'CART-013' ,
          name: 'Verify that the displayed image and name in the cart match the products details When a user visually inspects an item in the cart.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/. \n 2. Ensure Cart contains Product C (Blue T-shirt). \n 3. Navigate to Cart. \n 4. Visually inspect the product entry for correct image, name, and price display.',
          expected: 'The displayed image, name, and price match the product’s details on the product page.',
          actual: 'Image and name match expectations.',
          testType : 'Functional'
        } ,{
          id: 'cart-14',
          testId : 'CART-014' ,
          name: 'Verify that the user is redirected to the Product Detail Page for that item When they click on the products hyperlinked image from the cart page.',
          status: 'failed',
           message: 'There is a Bug 🐞',
           steps: '1. Open https://automationexercise.com/. \n 2. Ensure Cart contains Product D. \n 3. Navigate to Cart. \n 4. Click on the hyperlinked image of Product D.',
          expected: 'User is redirected to the Product Detail Page for Product D.',
          actual: 'Nothing happened on clicking on the picture',
          testType : 'Functional'
        } ,{
          id: 'cart-15',
          testId : 'CART-015' ,
          name: 'Verify that the user is redirected to the Shop page When they click the "Continue Shopping" button from the cart page.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/. \n 2. Add items to cart. \n 3. Navigate to Cart. \n 4. Click the Continue Shopping button.',
          expected: 'User is redirected to the Shop page or previous browsing page.',
          actual: 'Redirected to Shop page.',
          testType : 'Functional'
        } ,{
          id: 'cart-16',
          testId : 'CART-016' ,
          name: 'Verify that all products, quantities, and totals remain unchanged When the user presses the browsers Refresh button (F5) on the cart page.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/. \n 2. Add Product E (Qty 3) and Product F (Qty 1) to the cart. \n 3. Navigate to Cart. \n 4. Press the browsers Refresh button (F5 or equivalent). \n 5. Check the cart contents after the reload.',
          expected: 'All products, quantities, and totals remain unchanged after refresh.',
          actual: 'Cart contents persisted successfully.',
          testType : 'Regression'
        } ,{
          id: 'cart-17',
          testId : 'CART-017' ,
          name: 'Verify that the product remains in the cart When a user logs out and then logs back in with the same account.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/ and log in to the account. \n 2. Add Product G to the cart. \n 3. Log out of the account. \n 4. Log back in with the same account. \n 5. View Cart.',
          expected: 'Product G remains in the cart (data persists across sessions).',
          actual: 'Product G persisted after re-login.',
          testType : 'Functional'
        } ,{
          id: 'cart-18',
          testId : 'CART-018' ,
          name: 'Verify that the user is taken directly to the checkout/address confirmation page When a logged-in user with items in their cart clicks "Proceed to Checkout".',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/ and log in. \n 2. Ensure Cart contains items. \n 3. Navigate to Cart. \n 4. Click Proceed to Checkout.',
          expected: 'User is taken directly to the checkout process (e.g., Address confirmation page).',
          actual: 'Redirected to Address confirmation step.',
          testType : 'Functional'
        } ,{
          id: 'cart-19',
          testId : 'CART-019' ,
          name: 'Verify that the user is redirected to the Login / Registration page When a guest (unauthenticated) user clicks "Proceed to Checkout".',
          status: 'passed',
          message: 'All Good',
          steps: '1. Open https://automationexercise.com/ and ensure the user is NOT logged in. \n 2. Add items to cart. \n 3. Navigate to Cart. \n 4. Click Proceed to Checkout.',
          expected: 'User is redirected to the Login / Registration page before continuing checkout.',
          actual: 'Redirected to Login/Signup page.',
          testType : 'Functional'
        } 
        
      ]
      
    },
    {
      id: 'User Account',
      name: 'User Account',
      description: 'Handles user registration, login, and logout to ensure secure and smooth account management.',
      icon: '🧍‍♂️',
      iconBg: '#f56565',
      tests: [
         {
    id: 'TC_UA_001',
    testId : 'TC_UA_001' ,
    name: 'Verify that a new user is successfully registered when entering valid details in Signup / Login page',
    status: 'passed',
    message: 'User registered successfully with confirmation message "Account Created!" and redirected to account home page',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter valid Name & Email in New User Signup\n4. Click Signup\n5. Enter Title, Password, DOB\n6. Enter First & Last Name, Company, Address, Country, State, City, Zip, Mobile\n7. Click Create Account',
    expected: 'User should be successfully registered; confirmation message appears',
    actual: 'User registered successfully and message appeared; redirected to account home page',
    testType: 'Functional / Positive'
  },
  {
    id: 'TC_UA_002',
    testId : 'TC_UA_002' ,
    name: 'Check that user can successfully log in with valid email and password',
    status: 'passed',
    message: 'User successfully logged in and redirected to account home page',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter valid Email & Password in Login section\n4. Click Login',
    expected: 'User should be logged in and redirected to account home page',
    actual: 'User successfully logged in and redirected',
    testType: 'Functional / Positive'
  },
  {
    id: 'TC_UA_003',
    testId : 'TC_UA_003' ,
    name: 'Verify that login fails with invalid email and password',
    status: 'passed',
    message: 'Login failed; error message displayed "Your email or password is incorrect!"',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter invalid Email & Password\n4. Click Login',
    expected: 'Login should fail and display error message',
    actual: 'Login failed; error message displayed',
    testType: 'Functional / Negative'
  },
  {
    id: 'TC_UA_004',
    testId : 'TC_UA_004' ,
    name: 'Check user can log out and redirected to Home page',
    status: 'passed',
    message: 'User logged out successfully and redirected to home page',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Login with valid Email & Password\n4. Click Logout',
    expected: 'User should be logged out and redirected to home page',
    actual: 'User logged out and redirected successfully',
    testType: 'Functional / Positive'
  },
  {
    id: 'TC_UA_005',
    testId : 'TC_UA_005' ,
    name: 'Verify registration fails with already registered email',
    status: 'passed',
    message: 'Registration failed with message "Email Address already exist!" and not redirected',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter already registered Email & Name\n4. Click Signup',
    expected: 'Registration should fail with error message',
    actual: 'Registration failed; error message appeared',
    testType: 'Functional / Negative'
  },
  {
    id: 'TC_UA_006',
    testId : 'TC_UA_006' ,
    name: 'Check login fails when email & password fields are empty',
    status: 'passed',
    message: 'Validation message appears; user not logged in',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Leave Email & Password empty\n4. Click Login',
    expected: 'Login should fail; error message asking to enter email & password',
    actual: 'Validation message appeared; login failed',
    testType: 'Functional / Negative'
  },
  {
    id: 'TC_UA_007',
    testId : 'TC_UA_007' ,
    name: 'Verify error when entering invalid email format during signup',
    status: 'failed',
    message: 'System accepted invalid email format and proceeded to next step',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter invalid Email & valid Name\n4. Click Signup',
    expected: 'Signup should fail; error message displayed',
    actual: 'Invalid email accepted; proceeded to next registration step',
    testType: 'UI Validation / Negative'
  },
  {
    id: 'TC_UA_008',
    testId : 'TC_UA_008' ,
    name: 'Check session persists after page refresh post-login',
    status: 'passed',
    message: 'User session remained active after refresh',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Login with valid Email & Password\n4. Refresh browser page',
    expected: 'User should remain logged in after refresh',
    actual: 'User stayed logged in after refresh',
    testType: 'Functional / Positive'
  },
  {
    id: 'TC_UA_009',
    testId : 'TC_UA_009' ,
    name: 'Browser validation when login attempted with empty email field',
    status: 'passed',
    message: 'Browser prompted "Please fill out this field"',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Leave Email empty; enter valid Password\n4. Click Login',
    expected: 'Browser validation prompts user to fill email field',
    actual: 'Browser validation appeared as expected',
    testType: 'UI Validation / Negative'
  },
  {
    id: 'TC_UA_010',
    testId : 'TC_UA_010' ,
    name: 'Browser validation when login attempted with empty password field',
    status: 'passed',
    message: 'Browser prompted "Please fill out this field"',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter valid Email; leave Password empty\n4. Click Login',
    expected: 'Browser validation prompts user to fill password field',
    actual: 'Browser validation appeared as expected',
    testType: 'UI Validation / Negative'
  },
  {
    id: 'TC_UA_011',
    testId : 'TC_UA_011' ,
    name: 'User can sign up with uppercase email',
    status: 'passed',
    message: 'System accepted uppercase email and proceeded to next signup step',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter valid Name\n4. Enter Email in uppercase\n5. Click Signup',
    expected: 'System should accept uppercase email and proceed',
    actual: 'Uppercase email accepted; next step loaded',
    testType: 'Functional / Positive'
  },
  {
    id: 'TC_UA_012',
    testId : 'TC_UA_012' ,
    name: 'User cannot log in using uppercase email',
    status: 'failed',
    message: 'Login failed; system did not recognize uppercase email',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter Email in uppercase\n4. Enter valid Password\n5. Click Login',
    expected: 'System should allow login; recognize email case-insensitively',
    actual: 'Login failed; error message displayed',
    testType: 'Functional / Negative'
  },
  {
    id: 'TC_UA_013',
    testId : 'TC_UA_013' ,
    name: 'Browser validation when signing up with empty email field',
    status: 'passed',
    message: 'Browser prompted "Please fill out this field"',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter valid Name; leave Email empty\n4. Click Signup',
    expected: 'Browser validation prompts to fill email',
    actual: 'Browser validation appeared as expected',
    testType: 'UI Validation / Negative'
  },
  {
    id: 'TC_UA_014',
    testId : 'TC_UA_014' ,
    name: 'Browser validation when signing up with empty name field',
    status: 'passed',
    message: 'Browser prompted "Please fill out this field"',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Leave Name empty; enter valid Email\n4. Click Signup',
    expected: 'Browser validation prompts to fill name',
    actual: 'Browser validation appeared as expected',
    testType: 'UI Validation / Negative'
  },
  {
    id: 'TC_UA_015',
    testId : 'TC_UA_015' ,
    name: 'Password input is masked',
    status: 'passed',
    message: 'Each character typed in password field is masked',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Type in Password field',
    expected: 'Characters should be masked',
    actual: 'Characters masked correctly',
    testType: 'Functional / UI Security'
  },
  {
    id: 'TC_UA_016',
    testId : 'TC_UA_016' ,
    name: 'User can toggle Show/Hide password using eye icon',
    status: 'passed',
    message: 'Password visibility toggles correctly',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Type in Password field\n4. Click eye icon',
    expected: 'Clicking eye icon toggles password visibility',
    actual: 'Password visibility toggles correctly',
    testType: 'Functional / Usability'
  },
  {
    id: 'TC_UA_017',
    testId : 'TC_UA_017' ,
    name: 'System enforces password strength rules during signup',
    status: 'failed',
    message: 'Weak password accepted; no strength validation message',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter valid Name & Email\n4. Click Signup\n5. Enter weak password',
    expected: 'System should display password strength message',
    actual: 'Weak password accepted; no validation shown',
    testType: 'Negative / Security'
  },
  {
    id: 'TC_UA_018',
    testId : 'TC_UA_018' ,
    name: 'Duplicate account prevention with same email in different casing',
    status: 'failed',
    message: 'System allowed duplicate email in uppercase',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter Name & already registered Email in uppercase\n4. Click Signup',
    expected: 'System should block duplicate registration; error message displayed',
    actual: 'System accepted email; proceeded to next signup step',
    testType: 'Negative / Functional'
  },
  {
    id: 'TC_UA_019',
    testId : 'TC_UA_019' ,
    name: 'User session expires after inactivity and redirects to Login page',
    status: 'failed',
    message: 'Session did not expire; user remained logged in',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Login with valid Email & Password\n4. Remain inactive',
    expected: 'System should log out user and redirect to Login page with session expired message',
    actual: 'User stayed logged in; session remained active',
    testType: 'Negative / Security'
  },
  {
    id: 'TC_UA_020',
    testId : 'TC_UA_020' ,
    name: 'Error message disappears when user corrects invalid input before login',
    status: 'failed',
    message: 'Error message remained visible after correcting input',
    steps: '1. Open https://automationexercise.com\n2. Click Signup / Login\n3. Enter invalid Email & correct Password\n4. Click Login\n5. Correct Email',
    expected: 'Error message should disappear automatically',
    actual: 'Error message remained visible',
    testType: 'Negative / UI / Functional'
  },
  {
    id: 'TC_UA_021',
        testId : 'TC_UA_021' ,
    name: 'Email field trims leading and trailing spaces during login',
    status: 'passed',
    message: 'Spaces trimmed; login successful',
    steps: '1. Open http://automationexercise.com\n2. Click Signup / Login\n3. Enter Email with leading space & valid Password\n4. Click Login',
    expected: 'System trims spaces and allows login',
    actual: 'Spaces trimmed; login successful',
    testType: 'Positive / Functional'
  },
  {
    id: 'TC_UA_022',
        testId : 'TC_UA_022' ,
    name: 'Logout button is hidden when user is not logged in',
    status: 'passed',
    message: 'Logout button hidden; only Signup/Login visible',
    steps: '1. Open http://automationexercise.com\n2. Observe navigation header',
    expected: 'Logout button hidden when not logged in',
    actual: 'Logout button hidden; Signup/Login visible',
    testType: 'Functional / UI'
  },
  {
    id: 'TC_UA_023',
        testId : 'TC_UA_023' ,
    name: 'Browser Back button after logout does not reopen previous session',
    status: 'failed',
    message: 'Browser Back reopened account page after logout',
    steps: '1. Open http://automationexercise.com\n2. Login with valid credentials\n3. Click Logout\n4. Press browser Back button',
    expected: 'System should not reopen previous session; user stays on Home page',
    actual: 'Previous session reopened; My Account page loaded',
    testType: 'Functional / Security'
  }
      ]
    },
    {
      id: 'Contact',
      name: 'Contact',
      description: 'Focuses on testing the “Contact Us” form to make sure it can be submitted successfully and provides proper feedback or confirmation to the user.  ',
      icon: '👤',
      iconBg: '#f56565',
      tests: [
      {
    id: 'TC_CONTACT_001',
        testId : 'TC_CONTACT_001' ,
    name: 'Check that user can submit the Contact Us form successfully when all required fields are filled with valid data.',
    status: 'passed',
    message: 'Form submitted successfully, success message appeared.',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify home page is visible\n4. Click Contact Us\n5. Verify GET IN TOUCH is visible\n6. Enter Name, Email, Subject, Message\n7. Upload file (if applicable)\n8. Click Submit\n9. Click OK on alert\n10. Verify success message appears\n11. Click Home and verify navigation',
    expected: 'Form should submit successfully, success message should appear, navigation back to home works.',
    actual: 'Success! Your details have been submitted successfully.',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_002',
    testId : 'TC_CONTACT_002' ,
    name: 'Check that user can’t submit the Contact Us form when leaving the Name field empty',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Leave Name empty, enter Email, Subject, Message\n7. Upload file if needed\n8. Click Submit\n9. Click OK\n10. Observe message',
    expected: 'Form should not submit; error message "Name is required" should appear',
    actual: 'Success! Your details have been submitted successfully',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_003',
    testId : 'TC_CONTACT_003' ,
    name: 'Check that user can’t submit the Contact Us form when the Message field is empty.',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter Name, Email, Subject, leave Message empty\n7. Upload file if needed\n8. Click Submit\n9. Click OK\n10. Observe message',
    expected: 'Form should not submit; error message "Message is required" should appear',
    actual: 'Form submitted successfully and success message appeared',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_004',
    testId : 'TC_CONTACT_004' ,
    name: 'Check that user can submit the Contact Us form when no file is uploaded.',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter Name, Email, Subject, Message\n7. Do not upload file\n8. Click Submit\n9. Click OK\n10. Observe message',
    expected: 'Form should submit successfully even without file, success message appears',
    actual: 'Form submitted successfully and success message appeared',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_005',
    testId : 'TC_CONTACT_005' ,
    name: 'Check that user can’t submit the Contact Us form when Subject field is empty.',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter Name, Email, Message, leave Subject empty\n7. Click Submit\n8. Click OK\n9. Observe message',
    expected: 'Form should not submit; error message "Subject is required" should appear',
    actual: 'Form was submitted successfully and success message appeared',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_006',
    testId : 'TC_CONTACT_006' ,
    name: 'Check that user can’t submit the Contact Us form when Email field is empty.',
    status: 'passed',
    message: 'Validation worked correctly, form not submitted',
    steps: '1. Launch browser\n2. Navigate to http://automationexercise.com\n3. Verify home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter Name, Subject, Message, leave Email empty\n7. Upload file optional\n8. Click Submit\n9. Click OK\n10. Observe message',
    expected: 'Form should not submit; error message "Email is required" should appear',
    actual: 'Form was not submitted and validation message appeared',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_007',
    testId : 'TC_CONTACT_007' ,
    name: 'Check that user can’t submit the Contact Us form when Email is missing dot in domain (invalid email format).',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter valid Name, Subject, Message\n7. Enter invalid Email testuser@examplecom\n8. Upload file optional\n9. Click Submit\n10. Click OK\n11. Observe message',
    expected: 'Form should not submit; error message displayed for invalid email format',
    actual: 'Form was submitted successfully and displayed success message',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_008',
    testId : 'TC_CONTACT_008' ,
    name: 'Check that user can’t submit the Contact Us form when Email is missing "@" symbol (invalid email format).',
    status: 'passed',
    message: 'Validation worked, form not submitted',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter valid Name, Subject, Message\n7. Enter invalid Email testuserexample.com\n8. Upload file optional\n9. Click Submit\n10. Observe result',
    expected: 'Form should not submit; error message displayed for invalid email',
    actual: 'Form was not submitted, and error message appeared requiring "@" symbol',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_009',
    testId : 'TC_CONTACT_009' ,
    name: 'Check that user can’t submit the Contact Us form when Message field contains only spaces or symbols',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch browser\n2. Navigate to http://automationexercise.com\n3. Click Contact Us\n4. Click Submit',
    expected: 'Form should not submit; validation message "Message cannot be empty" or similar',
    actual: 'Form was submitted successfully and displayed success message',
    testType: 'Functional'
  },{
    id: 'TC_CONTACT_010',
    testId : 'TC_CONTACT_010' ,
    name: 'Check that user cannot submit Contact Us form when Name contains only spaces or symbols',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter Name as spaces only or symbols only\n7. Enter valid Email, Subject, Message\n8. Upload file optional\n9. Click Submit\n10. Observe message',
    expected: 'Form should not submit; error message "Name cannot be empty or invalid" should appear',
    actual: 'Form submitted successfully and displayed success message',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_011',
     testId : 'TC_CONTACT_011' ,
    name: 'Check that user cannot submit Contact Us form when Subject contains only spaces or symbols',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter valid Name, Email, Message\n7. Enter Subject as spaces only or symbols only\n8. Upload file optional\n9. Click Submit\n10. Observe message',
    expected: 'Form should not submit; error message "Subject cannot be empty or invalid" should appear',
    actual: 'Form submitted successfully and displayed success message',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_012',
     testId : 'TC_CONTACT_012' ,
    name: 'Check that user cannot submit Contact Us form when Name contains numeric input',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com/\n3. Verify Home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter Name as numbers only\n7. Enter valid Email, Subject, Message\n8. Upload file optional\n9. Click Submit\n10. Click OK\n11. Observe result',
    expected: 'Form should not submit; error message "Please enter a valid name" should appear',
    actual: 'Form submitted successfully and displayed success message',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_013',
     testId : 'TC_CONTACT_013' ,
    name: 'Check that user cannot submit Contact Us form when Name contains excessively long input',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com/\n3. Verify Home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter very long Name (>150 chars)\n7. Enter valid Email, Subject, Message\n8. Upload file optional\n9. Click Submit\n10. Click OK\n11. Observe result',
    expected: 'Form should not accept excessively long Name; validation or truncation should prevent submission',
    actual: 'Form submitted successfully and displayed success message',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_014',
     testId : 'TC_CONTACT_014' ,
    name: 'Check that Contact Us form rejects multiple invalid email formats',
    status: 'passed',
    message: 'Form correctly rejected invalid email formats',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Click Contact Us\n4. Enter valid Name, Subject, Message\n5. Enter invalid emails one by one (test@@gmail.com, @gmail.com, testuser@, testuser@gmail., test user@gmail.com)\n6. Click Submit after each try',
    expected: 'Form should not submit; validation error appears for each invalid email',
    actual: 'Form was not submitted; validation errors appeared for each invalid email',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_015',
     testId : 'TC_CONTACT_015' ,
    name: 'Check that Contact Us form cannot be submitted when Email is missing username before "@"',
    status: 'passed',
    message: 'Form correctly rejected email missing username',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter valid Name, Subject, Message\n7. Enter invalid Email (@gmail.com)\n8. Upload file optional\n9. Click Submit\n10. Observe result',
    expected: 'Form should not submit; validation message for invalid email appears',
    actual: 'Form was not submitted; browser validation appeared requiring valid email',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_016',
     testId : 'TC_CONTACT_016' ,
    name: 'Check that Contact Us form can be submitted when Subject contains valid text',
    status: 'passed',
    message: 'Form submitted successfully with valid Subject',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify home page\n4. Click Contact Us\n5. Verify GET IN TOUCH visible\n6. Enter valid Name, Email, Message\n7. Enter valid Subject\n8. Upload file optional\n9. Click Submit\n10. Observe result',
    expected: 'Form should submit successfully; success message appears',
    actual: 'Form submitted successfully; success message appeared',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_017',
     testId : 'TC_CONTACT_017' ,
    name: 'Check that clicking the site logo navigates user to the Home Page',
    status: 'passed',
    message: 'Clicking site logo correctly redirected to Home Page',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Verify Home Page\n4. Click Contact Us or any other page link\n5. Verify not on Home Page\n6. Click Site Logo\n7. Observe result',
    expected: 'Clicking logo redirects to Home Page; all Home Page elements visible',
    actual: 'User redirected to Home Page successfully; all elements loaded correctly',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_018',
     testId : 'TC_CONTACT_018' ,
    name: 'Check that clicking the "Scroll to Top" arrow brings user back to top of the page',
    status: 'passed',
    message: 'Scroll to Top arrow worked correctly',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Scroll to bottom\n4. Verify Scroll to Top arrow is visible\n5. Click arrow\n6. Observe page movement',
    expected: 'Page scrolls smoothly to top; header visible',
    actual: 'Page scrolled smoothly to top; header and top elements visible',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_019',
     testId : 'TC_CONTACT_019' ,
    name: 'Check that user can successfully subscribe when entering a valid email',
    status: 'passed',
    message: 'Subscription successful with valid email',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Scroll to Subscription section\n4. Enter valid email\n5. Click Subscribe\n6. Observe message',
    expected: 'System should subscribe user successfully; confirmation message appears',
    actual: 'Subscription successful; confirmation message appeared',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_020',
     testId : 'TC_CONTACT_020' ,
    name: 'Check that system does not accept invalid email format in Subscription field',
    status: 'passed',
    message: 'Invalid email correctly rejected in Subscription',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Scroll to Subscription section\n4. Enter invalid email (missing "@")\n5. Click Subscribe\n6. Observe message',
    expected: 'System should not accept invalid email; error message appears',
    actual: 'Form not submitted; validation message appeared',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_021',
     testId : 'TC_CONTACT_021' ,
    name: 'Check that system prevents subscription when email field is empty',
    status: 'passed',
    message: 'Empty email correctly rejected',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Scroll to Subscription section\n4. Leave email empty\n5. Click Subscribe\n6. Observe behavior',
    expected: 'Form should not submit; error message "Email is required" appears',
    actual: 'Form not submitted; alert appeared asking to enter email',
    testType: 'Functional'
  },
  {
    id: 'TC_CONTACT_022',
     testId : 'TC_CONTACT_022' ,
    name: 'Check that Subscription form does not accept email missing ".com"',
    status: 'failed',
    message: 'There is a Bug 🐞"',
    steps: '1. Launch browser\n2. Navigate to URL http://automationexercise.com\n3. Scroll to Subscription section\n4. Enter invalid email missing ".com"\n5. Click Subscribe\n6. Observe response',
    expected: 'Form should not accept invalid email; error message appears',
    actual: 'Form submitted successfully; confirmation message appeared',
    testType: 'Functional'
  }
      ]
    },
    {
      id: 'checkout',
      name: 'Checkout',
      description: 'Payment and checkout process tests',
      icon: '💳',
      iconBg: '#f56565',
      tests: [
         {
    id: 'TC_CH_001',
    testId: 'TC_CH_001',
    name: 'Verify that the "Register / Login" modal appears when an unauthenticated user clicks "Proceed To Checkout" from the cart.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. Click on the "Products" option. \n 4. Hover over an item and click "Add to cart". \n 5. Click "View Cart" on the modal. \n 6. Click the "Proceed To Checkout" button.',
    expected: '1. A modal/popup appears with the text "Register / Login account to proceed on checkout." \n 2. Clicking "Register / Login" redirects to /login.',
    actual: '1. The "Register / Login account to proceed on checkout." modal appeared. \n 2. Clicking "Register / Login" redirected to the /login page.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_002',
    testId: 'TC_CH_002',
    name: 'Verify that the user is successfully navigated to the /checkout page when an authenticated user with items in their cart clicks "Proceed To Checkout".',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is already logged in). \n 4. Click on the "Cart" option in the header. \n 5. Click "Proceed To Checkout".',
    expected: 'User is successfully navigated to the Checkout page (/checkout).',
    actual: 'Successfully navigated to the Checkout page (/checkout).',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_003',
    testId: 'TC_CH_003',
    name: 'Verify that the "Your delivery address" section is pre-populated with the user\'s saved details when a logged-in user with a saved address lands on the checkout page.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add an item to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. Observe the "Your delivery address" section.',
    expected: 'All address fields are pre-populated with the user\'s correct, saved address details.',
    actual: 'All delivery address fields were correctly pre-populated with the user\'s saved data.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_004',
    testId: 'TC_CH_004',
    name: 'Verify that the "Your billing address" section is pre-populated with the user\'s saved details when a logged-in user with a saved address lands on the checkout page.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add an item to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. Observe the "Your billing address" section.',
    expected: 'All address fields are pre-populated with the user\'s correct, saved address details.',
    actual: 'All billing address fields were correctly pre-populated with the user\'s saved data.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_005',
    testId: 'TC_CH_005',
    name: 'Verify that the "Review Your Order" table correctly displays the single item\'s name, price, quantity (1), and total when a user proceeds to checkout with one item.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add one item to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. Observe the "Review Your Order" table.',
    expected: '1. The table displays exactly one row for the item. \n 2. The item name, price, quantity (1), and total are correct.',
    actual: '1. The table displayed exactly one row. \n 2. The product name, price, quantity (1), and total were correct.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_006',
    testId: 'TC_CH_006',
    name: 'Verify that the "Review Your Order" table displays two separate, correct rows when a user proceeds to checkout with two different items.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add two different items to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. Observe the "Review Your Order" table.',
    expected: '1. The table displays two separate rows, one for each item. \n 2. All details are correct for each row.',
    actual: '1. The table displayed two separate rows for each product. \n 2. All details were correct for each row.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_007',
    testId: 'TC_CH_007',
    name: 'Verify that the "Review Your Order" table shows the correct quantity (e.g., 3) and correctly calculated total (Price x 3) when a user proceeds to checkout after updating an item\'s quantity.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add one item to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Change the quantity of the item to "3". \n 7. Click "Proceed To Checkout". \n 8. Observe the "Review Your Order" table.',
    expected: '1. The table shows the correct item. \n 2. The Quantity is "3". \n 3. The Total is calculated correctly (Price x 3).',
    actual: '1. The table showed the correct product. \n 2. The Quantity was "3". \n 3. The Total was calculated correctly (Price x 3).',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_008',
    testId: 'TC_CH_008',
    name: 'Verify that the "Total Amount" correctly sums the totals of all items when a user lands on the checkout page with multiple items.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add multiple items to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. Observe the "Total Amount" displayed.',
    expected: 'The "Total Amount" correctly sums the totals of all items in the cart.',
    actual: 'The "Total Amount" displayed the correct sum of all items in the cart.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_009',
    testId: 'TC_CH_009',
    name: 'Verify that the user is successfully redirected to the /payment page when they type a message in the "Comment" box and click "Place Order".',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add an item to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. Type a message (e.g., "Test comment") into the "Comment" text area. \n 8. Click the "Place Order" button.',
    expected: '1. User is successfully redirected to the Payment page (/payment). \n 2. The subsequent order details must contain the saved comment.',
    actual: '1. Successfully redirected to the Payment page (/payment). \n 2. The comment appeared in the subsequent order details.',
    testType: 'Functional'
  },{
    id: 'TC_CH_010',
    testId: 'TC_CH_010',
    name: 'Verify that the user is successfully redirected to the /payment page when they leave the "Comment" text area blank and click "Place Order".',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add an item to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. Leave the "Comment" text area blank. \n 8. Click the "Place Order" button.',
    expected: 'User is successfully redirected to the Payment page (/payment).',
    actual: 'Successfully redirected to the Payment page (/payment).',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_011',
    testId: 'TC_CH_011',
    name: 'Verify that the user is redirected to the /login page (and checkout is not displayed) when an unauthenticated user tries to access the /checkout URL directly.',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (Ensure user is logged out). \n 4. Manually type https://automationexercise.com/checkout into the browser address bar and press Enter.',
    expected: '1. User is redirected to the Login page (/login). \n 2. The checkout page is not displayed.',
    actual: '1. User didn\'t redirect to the Login page (/login). \n 2. The checkout page (/checkout) was displayed.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_012',
    testId: 'TC_CH_012',
    name: 'Verify that the user is redirected to the Homepage (and checkout is not displayed) when a logged-in user with an empty cart tries to access the /checkout URL directly.',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. (Ensure cart is empty). \n 5. Manually type https://automationexercise.com/checkout into the browser address bar and press Enter.',
    expected: '1. User is redirected to the Homepage (/). \n 2. The checkout page is not displayed.',
    actual: '1. User didn\'t redirect to the Homepage (/). \n 2. The checkout page (/checkout) was displayed.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_013',
    testId: 'TC_CH_013',
    name: 'Verify that an error message is displayed (and the user is not redirected to /payment) when a user with an incomplete address clicks "Place Order".',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in with an incomplete address). \n 4. Add an item to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. Click the "Place Order" button.',
    expected: '1. An error message is displayed prompting the user to complete their address. \n 2. The user is not redirected to /payment.',
    actual: '1. The browser\'s native HTML5 validation message "Please fill out this field" appeared. \n 2. Was not redirected to /payment.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_014',
    testId: 'TC_CH_014',
    name: 'Verify that the checkout page refreshes to show only the remaining item (Item B) when the user clicks "Place Order" after removing Item A in a separate tab.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add items A and B to cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. In a separate browser tab, remove Item A from the cart. \n 8. Return to the Checkout page tab. \n 9. Click "Place Order".',
    expected: '1. The page refreshes to show only Item B.',
    actual: '1. No error message appeared. \n 2. The page refreshed to show only Item B.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_015',
    testId: 'TC_CH_015',
    name: 'Verify that the user is redirected to the cart or homepage when they click "Place Order" after emptying their cart in a separate tab.',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add an item to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. In a separate browser tab, remove all items from the cart. \n 8. Return to the Checkout page tab. \n 9. Click "Place Order".',
    expected: '1. User is redirected to the cart or homepage.',
    actual: '1. No error message appeared. \n 2. Redirected to the /payment page.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_016',
    testId: 'TC_CH_016',
    name: 'Verify that an "Item no longer in stock" error is displayed (and the order is not placed) when a user clicks "Place Order" for an item whose stock was just set to 0.',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add an item (e.g., "Blue Top") to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. As an Admin, set the stock of "Blue Top" to 0. \n 8. As the user, click the "Place Order" button.',
    expected: '1. An error message is displayed (e.g., "Item no longer in stock."). \n 2. Order is not placed.',
    actual: '1. Stock was not checked. Redirected to /payment. \n 2. Order was "completed" without any error.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_017',
    testId: 'TC_CH_017',
    name: 'Verify that a "price has changed" validation message appears (and the total updates) when a user clicks "Place Order" for an item whose price was just changed by an admin.',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add an item (e.g., "Blue Top" @ Rs. 500) to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. As an Admin, change the price of "Blue Top" to Rs. 600. \n 8. As the user, click the "Place Order" button.',
    expected: '1. A validation message appears (e.g., "The price of \'Blue Top\' has changed."). \n 2. The order review table updates to show the new price (Rs. 600). \n 3. The "Total Amount" updates.',
    actual: '1. Price was not checked. Redirected to /payment with the old total.',
    testType: 'Functional'
  },
  {
    id: 'TC_CH_018',
    testId: 'TC_CH_018',
    name: 'Verify that the page layout adapts correctly with no overlapping elements when the browser is resized to a tablet viewport (768px).',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com. \n 3. (User is logged in). \n 4. Add an item to the cart. \n 5. Navigate to the Cart page (/view_cart). \n 6. Click "Proceed To Checkout". \n 7. Resize the browser to a tablet viewport (e.g., 768px width). \n 8. Visually inspect the entire page.',
    expected: 'The layout adapts correctly, with no overlapping elements.',
    actual: 'The layout adapted correctly to the tablet viewport (768px).',
    testType: 'UI/RWD'
  }

      ]
    },
  {
      id: 'Subscription',
      name: 'Subscription',
      description: 'Tests newsletter subscription on different pages to confirm users can subscribe successfully. and checkout process tests',
      icon: '💌',
      iconBg: '#f56565',
      tests: [
        {
    id: 'TC_Subscription_001',
     testId : 'TC_Subscription_001' ,
    name: 'Verify "subscribed successfully" message appears with valid email',
    status: 'passed',
    message: 'Success message displayed: “You have been subscribed successfully.”',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com/products\n3. Locate product card\n4. Click "View product"\n5. Scroll to "Subscription"\n6. Enter valid Email\n7. Click Subscribe',
    expected: 'System accepts valid email; success message displayed',
    actual: 'Success message displayed: “You have been subscribed successfully.”',
    testType: 'Functional / Positive',
    notes: 'User subscribed; email stored for future newsletters',
    tester: 'Sara Nasr'
  },
  {
    id: 'TC_Subscription_002',
     testId : 'TC_Subscription_002' ,
    name: 'Verify validation message appears when subscribing with empty email',
    status: 'passed',
    message: 'Validation message appears: “Please fill out this field.”',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com/products\n3. Locate product card\n4. Click "View product"\n5. Scroll to "Subscription"\n6. Leave email empty\n7. Click Subscribe',
    expected: 'System should not accept empty email; validation message appears',
    actual: 'Validation message appears: “Please fill out this field.”',
    testType: 'Functional / Negative',
    
  },
  {
    id: 'TC_Subscription_003',
     testId : 'TC_Subscription_003' ,
    name: 'Verify validation message appears with invalid email format',
    status: 'passed',
    message: 'Validation message appears: “A part following \'@\' should not contain the symbol \'$\'.”',
    input: 'Email: saranasr3011@gm$ail.com',
    expected: 'System rejects email; validation message appears',
    actual: 'Validation message appears: “A part following \'@\' should not contain the symbol \'$\'.”',
    testType: 'Functional / Negative',
   
  },
  {
    id: 'TC_Subscription_004',
     testId : 'TC_Subscription_004' ,
    name: 'Verify system blocks subscription with email missing TLD',
    status: 'failed',
    message: 'System incorrectly accepted the email and displayed success confirmation',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com/products\n3. Locate product card\n4. Click "View product"\n5. Scroll to "Subscription"\n6. Enter email missing TLD: saranasr3011@gmail\n7. Click Subscribe',
    expected: 'System must block submission; display message about missing TLD',
    actual: 'System accepted email and displayed success confirmation',
    testType: 'Functional / Negative',
   
  }
      ]
    },{
      id: 'Products',
      name: 'Products',
      description: 'Covers browsing, searching, and reviewing products to ensure a seamless shopping experience.',
      icon: '🛍️',
      iconBg: '#f56565',
      tests: [
        {
           id: 'TC_PROD_001',
          testId : 'TC_PROD_001' ,
          name: 'Verify that the Products page opens successfully and displays all key UI elements when clicking on the Products link.',
          status: 'passed',
          message: 'All Good',
          steps: '1. Launch browser. \n 2. Navigate to https://automationexercise.com. \n 3. Click on the Products link from the top menu. \n 4. Wait for the Products page to load completely.',
          expected: 'Products page loads correctly, showing product grid, sidebar filters (Categories & Brands), and search box.',
          actual: '“Products page loaded successfully with all elements (product grid, filters, and search box displayed correctly).”',
          testType : 'UI'
        },
        {
         id: 'TC_PROD_002',
          testId : 'TC_PROD_002' ,
          name: 'Verify Verify that the search bar returns correct results when entering a valid search keyword (like product name, brand, or category). the Products page opens successfully and displays all key UI elements when clicking on the Products link.',
          status: 'failed',
          message: 'There is a Bug 🐞',
          steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate the search bar at the top of the page. \n 4. Enter a valid keyword (e.g., product name / brand / category / subcategory). \n 5. Click on the search icon.',
          expected: 'Products Each product card displays image, name, price, and Add to cart button. loads correctly, showing product grid, sidebar filters (Categories & Brands), and search box.',
          actual: '“Products page loaded successfully with all elements (product Search feature works partially — keywords (like product names) return correct related results, but searches by  category often show unrelated or limited items compared to the total products available. No system crash occurred, but accuracy of results is inconsistent., filters, and search box displayed correctly).”',
          testType : 'Functional'
        },
  {
    id: 'TC_PROD_003',
    testId: 'TC_PROD_003',
    name: 'Verify that no products are displayed and the page remains stable when entering an invalid keyword (e.g., "@#$%^&*") in the search bar.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate the search bar at the top of the page. \n 4. Enter invalid keyword. \n 5. Click on the search icon.',
    expected: '1. The system should not display any products. \n 2. The page should remain stable without any crashes or broken layouts.',
    actual: 'The system displays an empty page with no products when invalid data is entered.',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_004',
    testId: 'TC_PROD_004',
    name: "Verify that a validation message is shown (or the page state doesn't change) when the user clicks the search icon with an empty input field.",
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate the search bar at the top of the page. \n 4. Leave the search bar empty. \n 5. Click on the search icon.',
    expected: "The system should not perform the search and should ideally show a message like “Please enter a keyword” or the page state doesn't change.",
    actual: 'The system displays all available products even though the search field was left empty.',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_005',
    testId: 'TC_PROD_005',
    name: 'Verify that all displayed products are related to the selected brand when clicking on a brand link (e.g., Polo).',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Click on a specific Brand (e.g., Polo).',
    expected: '1. All displayed products are correctly related to the selected brand. \n 2. No unrelated or mismatched products appear.',
    actual: 'All displayed products are correctly related to the selected brand.',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_006',
    testId: 'TC_PROD_006',
    name: 'Verify that the displayed product count is consistent with the number of items shown when filtering by a brand.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Click on a specific Brand (e.g., H&M).',
    expected: 'Count matches product count in database or pagination logic.',
    actual: 'The displayed product count matches the brand’s expected total.',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_007',
    testId: 'TC_PROD_007',
    name: 'Verify that the correct product details page opens when clicking the “View Product” button on a product card.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on the “View Product” button.',
    expected: '1. The system navigates to the Product Details page for the selected item. \n 2. The page should display complete product information, including product name, category, price, availability, brand, quantity field, and “Add to Cart” button.',
    actual: 'Product details page opens correctly and matches the selected product.',
    testType: 'Functional'
  },{
    id: 'TC_PROD_008',
    testId: 'TC_PROD_008',
    name: 'Verify that a confirmation message with a “Continue Shopping” option appears when clicking “Add to Cart” on the Products page.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “Add to Cart” for any product.',
    expected: 'A message appears confirming the item was added to the cart, and a “Continue Shopping” option is shown for all products. Product added to cart, modal closes, user stays on /products.',
    actual: 'Message and “Continue Shopping” option appear correctly for all products.',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_009',
    testId: 'TC_PROD_009',
    name: 'Verify that the user is redirected to the Cart page with the correct item displayed when clicking the “View Cart” link after adding a product.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “Add to Cart” for any product. \n 5. Click on “View Cart”.',
    expected: 'User should be redirected to the Cart page displaying the added product with correct details (name, price, quantity, and total).',
    actual: 'The user is successfully redirected to the cart page and the added product details are displayed correctly.',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_010',
    testId: 'TC_PROD_010',
    name: 'Verify that the product quantity increases by 1 when clicking the up arrow on the product details page.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “Add to Cart” for any product. \n 5. Click on “View product”. \n 6. Click on up arrow.',
    expected: 'Each click increases quantity by 1; quantity displays correctly.',
    actual: 'Quantity increments correctly.',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_011',
    testId: 'TC_PROD_011',
    name: 'Verify that the product quantity decreases by 1 when clicking the down arrow on the product details page.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “Add to Cart” for any product. \n 5. Click on “View product”. \n 6. Click on down arrow.',
    expected: 'Each click decreases quantity by 1; quantity displays correctly.',
    actual: 'Quantity decreases correctly.',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_012',
    testId: 'TC_PROD_012',
    name: 'Verify that the quantity field is updated correctly when a user manually enters a valid number (e.g., 5) on the product details page.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “Add to Cart” for any product. \n 5. Click on “View product”. \n 6. Click on the quantity field and manually enter a valid number (e.g., 5).',
    expected: 'The manually entered valid quantity is correctly updated in the quantity field.',
    actual: 'Valid quantities update correctly.',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_013',
    testId: 'TC_PROD_013',
    name: 'Verify that the system shows a validation message or resets the value to 1 when a user manually enters "0" in the quantity field.',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “Add to Cart” for any product. \n 5. Click on “View product”. \n 6. Click on the quantity field and enter "0".',
    expected: 'System should reset to minimum valid value (1) or show a validation message.',
    actual: 'Product is added to the cart with quantity "0".',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_014',
    testId: 'TC_PROD_014',
    name: 'Verify that the system shows a validation message when a user manually enters a decimal value (e.g., "2.3") in the quantity field.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “Add to Cart” for any product. \n 5. Click on “View product”. \n 6. Click on the quantity field and enter "2.3".',
    expected: '1. Quantity cannot be decimal. \n 2. System rounds to nearest whole number or shows a validation message.',
    actual: 'System shows validation message: “Please enter a valid value. The nearest valid values are 2 and 3.”',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_015',
    testId: 'TC_PROD_015',
    name: 'Verify that the system shows a validation message when a user manually enters a negative value (e.g., "-3") in the quantity field.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “Add to Cart” for any product. \n 5. Click on “View product”. \n 6. Click on the quantity field and enter "-3".',
    expected: '1. Quantity cannot be negative. \n 2. System rounds to nearest whole number or shows a validation message.',
    actual: 'System shows validation message: “Value must be greater than or equal to 1.”',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_016',
    testId: 'TC_PROD_016',
    name: "Verify that a review is submitted successfully when the user enters a valid Name, Email, and Comment and clicks 'Submit'.",
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “View product”. \n 5. Scroll to "Write Your Review" section. \n 6. Enter a valid Name (e.g., Sara Nasr). \n 7. Enter a valid Email (e.g., saranasr3011@gmail.com). \n 8. Enter Comment: Add comment here! \n 9. Click Submit.',
    expected: '1. Review is submitted successfully. \n 2. Review appears under the product with the correct Name, Email, and Comment.',
    actual: 'Review submitted successfully.',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_017',
    testId: 'TC_PROD_017',
    name: 'Verify that a validation message appears for the Name field when submitting a review with numbers or symbols (e.g., "$%#12").',
    status: 'failed',
    message: 'There is a Bug 🐞',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “View product”. \n 5. Scroll to "Write Your Review" section. \n 6. Enter invalid Name (e.g., $%#12 or 1259). \n 7. Enter a valid Email (e.g., saranasr3011@gmail.com). \n 8. Enter Comment: Add comment here! \n 9. Click Submit.',
    expected: '1. System should reject numbers or symbols in Name field. \n 2. Validation message should appear like: “Name can only contain letters.”',
    actual: '1. Review submitted successfully. \n 2. System incorrectly accepts numbers and symbols in Name field.',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_018',
    testId: 'TC_PROD_018',
    name: 'Verify that a validation message appears when submitting a review with an invalid email containing a symbol after the "@" (e.g., "email@$domain.com").',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “View product”. \n 5. Scroll to "Write Your Review" section. \n 6. Enter a valid Name (e.g., Sara Nasr). \n 7. Enter invalid Email (e.g., saranasr3011@$gmail.com). \n 8. Enter Comment: Add comment here! \n 9. Click Submit.',
    expected: '1. System should reject the email. \n 2. Validation message appears: “A part following \'@\' should not contain the symbol \'$\'.”',
    actual: 'Validation message appears: “A part following \'@\' should not contain the symbol \'$\'.”',
    testType: 'Functional'
  },
  {
    id: 'TC_PROD_019',
    testId: 'TC_PROD_019',
    name: 'Verify that a validation message appears when submitting a review with an email address missing the "@" symbol.',
    status: 'passed',
    message: 'All Good',
    steps: '1. Launch the browser. \n 2. Navigate to https://automationexercise.com/products. \n 3. Locate any visible product card. \n 4. Click on “View product”. \n 5. Scroll to "Write Your Review" section. \n 6. Enter a valid Name (e.g., Sara Nasr). \n 7. Enter invalid Email (e.g., saranasr3011gmail.com). \n 8. Enter Comment: Add comment here! \n 9. Click Submit.',
    expected: '1. System should reject the email. \n 2. Validation message appears: “Please include an \'@\' in the email address.”',
    actual: 'Validation message appears: “Please include an \'@\' in the email address \'saranasr3011gmail.com\'.”',
    testType: 'Functional'
  }
      ]
    },{
      id: 'Test Case Page',
      name: 'Test Case Page',
      description: 'Displays and manages all test cases to verify proper functionality and visibility.',
      icon: '🧪',
      iconBg: '#f56565',
      tests: [
        {
    id: 'TC_TC_Page_001',
     testId : 'TC_TC_Page_001' ,
    name: 'Verify page loads successfully with correct title when navigating to /test_cases',
    status: 'passed',
    message: 'Page loaded successfully; tab title was "Automation Exercise - Test Cases"; "Test Cases" heading visible',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com/test_cases',
    expected: 'Page loads successfully; tab title correct; heading visible',
    actual: 'Page loaded; tab title correct; heading visible',
    testType: 'Functional'
  },
  {
    id: 'TC_TC_Page_002',
    testId : 'TC_TC_Page_002' ,
    name: 'Verify user navigates to /test_cases page when clicking "Test Cases" button in main header',
    status: 'passed',
    message: 'Successfully navigated to /test_cases page',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com\n3. Click "Test Cases" in main header',
    expected: 'User navigates successfully to /test_cases page',
    actual: 'Navigation successful',
    testType: 'Functional'
  },
  {
    id: 'TC_TC_Page_003',
    testId : 'TC_TC_Page_003' ,
    name: 'Verify accordion panel expands and icon changes when clicking collapsed test case header',
    status: 'passed',
    message: '"Test Case 1" panel expanded; + icon changed to -',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com\n3. Click "Test Cases"\n4. Wait for /test_cases page\n5. Click header for "Test Case 1"',
    expected: 'Panel expands; icon changes to -',
    actual: 'Panel expanded; icon changed to -',
    testType: 'Functional'
  },
  {
    id: 'TC_TC_Page_004',
    testId : 'TC_TC_Page_004' ,
    name: 'Verify accordion panel collapses and icon changes back when clicking expanded test case header',
    status: 'passed',
    message: '"Test Case 1" panel collapsed; - icon changed back to +',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com\n3. Click "Test Cases"\n4. Wait for /test_cases page\n5. Click header for "Test Case 1" to expand\n6. Click header again',
    expected: 'Panel collapses; icon changes back to +',
    actual: 'Panel collapsed; icon changed back to +',
    testType: 'Functional'
  },
  {
    id: 'TC_TC_Page_005',
    testId : 'TC_TC_Page_005' ,
    name: 'Verify "Test Case 1" panel collapses automatically when expanding "Test Case 2"',
    status: 'passed',
    message: '"Test Case 1" panel collapsed; "Test Case 2" panel expanded',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com\n3. Click "Test Cases"\n4. Wait for /test_cases page\n5. Click header for "Test Case 1" to expand\n6. Click header for "Test Case 2"',
    expected: '"Test Case 1" collapses automatically; "Test Case 2" expands',
    actual: '"Test Case 1" collapsed; "Test Case 2" expanded',
    testType: 'Functional'
  },
  {
    id: 'TC_TC_Page_006',
    testId : 'TC_TC_Page_006' ,
    name: 'Verify test case steps are written in clear, readable English',
    status: 'passed',
    message: 'Steps were clear and written in proper English',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com\n3. Click "Test Cases"\n4. Wait for /test_cases page\n5. Expand any test case panel\n6. Read content',
    expected: 'Steps are clear and readable with no placeholder text',
    actual: 'Steps were clear and readable',
    testType: 'Content'
  },
  {
    id: 'TC_TC_Page_007',
    testId : 'TC_TC_Page_007' ,
    name: 'Verify user navigates to Homepage (/) when clicking "Home" link from /test_cases page',
    status: 'passed',
    message: 'Page scrolled to top; successfully navigated to Homepage (/)',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com\n3. Click "Test Cases"\n4. Wait for /test_cases page\n5. Click "Scroll Up" arrow\n6. Click "Home" link in header',
    expected: 'User scrolled to top and navigated to Homepage (/)',
    actual: 'Scrolled to top; navigated to Homepage (/)',
    testType: 'Functional'
  },
  {
    id: 'TC_TC_Page_008',
    testId : 'TC_TC_Page_008' ,
    name: 'Verify all accordion panels reset to default collapsed state after page refresh',
    status: 'passed',
    message: 'Page reloaded; all accordion panels reset to collapsed state',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com\n3. Click "Test Cases"\n4. Wait for /test_cases page\n5. Expand "Test Case 5"\n6. Refresh browser (F5)',
    expected: 'All accordion panels collapsed by default',
    actual: 'Panels reset to default collapsed state',
    testType: 'Functional'
  },
  {
    id: 'TC_TC_Page_009',
    testId : 'TC_TC_Page_009' ,
    name: 'Verify fonts, colors, spacing, and icons are consistent and clear',
    status: 'passed',
    message: 'Fonts, colors, spacing were consistent; + and - icons clearly indicated state',
    steps: '1. Launch browser\n2. Navigate to https://automationexercise.com\n3. Click "Test Cases"\n4. Wait for /test_cases page\n5. Visually inspect page',
    expected: 'Fonts, colors, spacing consistent; icons clear',
    actual: 'Fonts, colors, spacing consistent; icons clear',
    testType: 'UI'
  }
      ]
    },
    
  ]
};

function initializeApp() {
  calculateStats();
  renderCategories();
  attachEventListeners();
}

function calculateStats() {
  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;

  testData.categories.forEach(category => {
    totalTests += category.tests.length;
    category.tests.forEach(test => {
      if (test.status === 'passed') {
        passedTests++;
      } else {
        failedTests++;
      }
    });
  });

  const passRate = Math.round((passedTests / totalTests) * 100);

  document.getElementById('totalTests').textContent = totalTests;
  document.getElementById('passedTests').textContent = passedTests;
  document.getElementById('failedTests').textContent = failedTests;
  document.getElementById('passRate').textContent = `${passRate}%`;
}

function renderCategories(filter = 'all') {
  const container = document.getElementById('categoriesContainer');
  container.innerHTML = '';

  testData.categories.forEach((category, index) => {
    const filteredTests = category.tests.filter(test => {
      if (filter === 'all') return true;
      return test.status === filter;
    });

    if (filteredTests.length === 0 && filter !== 'all') return;

    const bugCount = category.tests.filter(t => t.status === 'failed').length;

    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card';
    categoryCard.style.animationDelay = `${index * 0.1}s`;
    categoryCard.dataset.categoryId = category.id;

    categoryCard.innerHTML = `
      <div class="category-header">
        <div class="category-icon" style="background: ${category.iconBg}20; color: ${category.iconBg};">
          ${category.icon}
        </div>
        <div class="category-info">
          <div class="category-title">${category.name}</div>
          <div class="category-description">${category.description}</div>
        </div>
        <div class="category-stats">
          <div class="category-stat">
            <span>${category.tests.length} tests</span>
          </div>
          ${bugCount > 0 ? `<div class="bugs-badge">${bugCount} bugs</div>` : ''}
        </div>
        <svg class="expand-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
      <div class="test-cases">
        ${renderTestCases(filteredTests)}
      </div>
    `;

    container.appendChild(categoryCard);
  });

  attachCategoryListeners();
}

function renderTestCases(tests) {
  return tests.map((test, index) => {
    const statusIcon = test.status === 'passed'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M18 6 6 18M6 6l12 12"/></svg>';

    return `
      <div class="test-case" data-test-id="${test.id}" style="animation-delay: ${index * 0.1}s">
        <div class="test-status ${test.status}">
          ${statusIcon}
        </div>
        <div class="test-info">
          <div class="test-name">${test.name}</div>
          <div class="test-message">${test.status === 'passed' ? 'Test passed successfully' : 'Test failed - click for details'}</div>
        </div>
        <div class="tooltip">${test.message}</div>
      </div>
    `;
  }).join('');
}

function attachCategoryListeners() {
  const categoryHeaders = document.querySelectorAll('.category-header');

  categoryHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      const card = header.closest('.category-card');
      const isExpanded = card.classList.contains('expanded');

      document.querySelectorAll('.category-card').forEach(c => {
        if (c !== card) {
          c.classList.remove('expanded');
        }
      });

      if (!isExpanded) {
        card.classList.add('expanded');
      } else {
        card.classList.remove('expanded');
      }
    });
  });

  const testCases = document.querySelectorAll('.test-case');
  testCases.forEach(testCase => {
    testCase.addEventListener('click', (e) => {
      e.stopPropagation();
      const testId = testCase.dataset.testId;
      showTestDetails(testId);
    });
  });
}

function showTestDetails(testId) {
  let testDetails = null;

  for (const category of testData.categories) {
    const test = category.tests.find(t => t.id === testId);
    if (test) {
      testDetails = test;
      break;
    }
  }

  if (!testDetails) return;

  document.getElementById('detailTitle').textContent = testDetails.name;
  document.getElementById('detailStatus').textContent = testDetails.status;
  document.getElementById('detailStatus').className = `detail-status ${testDetails.status}`;
document.getElementById('detailSteps').innerHTML = testDetails.steps.replace(/\n/g, '<br>').replace(/\r/g, '<br>');

  document.getElementById('detailExpected').textContent = testDetails.expected;
  document.getElementById('detailActual').textContent = testDetails.actual;
document.getElementById('detailType').textContent = testDetails.testType;
document.getElementById('testId').textContent = testDetails.testId;

  document.getElementById('mainView').classList.add('hidden');
  document.getElementById('detailView').classList.remove('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function attachEventListeners() {
  document.getElementById('backButton').addEventListener('click', () => {
    document.getElementById('detailView').classList.add('hidden');
    document.getElementById('mainView').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;
      renderCategories(filter);
    });
  });

  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterTestsBySearch(searchTerm);
  });
}

function filterTestsBySearch(searchTerm) {
  const testCases = document.querySelectorAll('.test-case');
  const categories = document.querySelectorAll('.category-card');

  if (!searchTerm) {
    testCases.forEach(test => {
      test.style.display = 'flex';
    });
    categories.forEach(cat => {
      cat.style.display = 'block';
    });
    return;
  }

  categories.forEach(category => {
    let hasVisibleTests = false;
    const categoryTests = category.querySelectorAll('.test-case');

    categoryTests.forEach(test => {
      const testName = test.querySelector('.test-name').textContent.toLowerCase();
      const testMessage = test.querySelector('.test-message').textContent.toLowerCase();

      if (testName.includes(searchTerm) || testMessage.includes(searchTerm)) {
        test.style.display = 'flex';
        hasVisibleTests = true;
      } else {
        test.style.display = 'none';
      }
    });

    const categoryTitle = category.querySelector('.category-title').textContent.toLowerCase();
    if (hasVisibleTests || categoryTitle.includes(searchTerm)) {
      category.style.display = 'block';
      if (categoryTitle.includes(searchTerm)) {
        category.classList.add('expanded');
      }
    } else {
      category.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', initializeApp);
