# Improving Nearshore | JS Collab 01

## Overview

There'll be 3 independent teams working on a single goal: Make a component that renders a "Form" that a user can use to fill his payment method. This information has to be replicated in a "Card" component, ane MAKE SURE they're in sync! The last team, will have to implement a button that the user can click on ONLY when the form is fully filled. This button will have to render a loading indicator while the request is being executed and a retry indicator if the request fails.

You'll have to collab with your teammates to
complete specific tasks and at the same time, you'll help to achieve one common inter-team goal. SO, COMMUNICATION AND ORGANIZATION IS KEY!

## Requirements

Card Team:

- Render the provided "Card Holder".
- Render the provided "Card Number", masking all the numbers with "\*" but the last 4 digits.
- Render the provided "Expiration Date" in a "MM/YY" format.
- Render the provided "Security Code" masking all the digits with "\*".

Form Team:

- Render a "Card Holder" field.
- Render a "Card Number" field.
- Render an "Expiration Date" field in a "MM/YYYY" format.
- Render a "Security Code" field, masking all the digits.
- Make sure to store all the data so that the other teams can use it!

Submit Team:

- Render a "Submit" button.
- Render a loading indicator whenever the user clicks on the button.
- Disable the button whenever the loading indicator is on.
- Render a "Success" or "Retry" message on the button depending on the API response.
- Disable the button if the response was successful.
- Allow the user to re-submit if the response was an error.

### Extra Points

Card Team:

- Change the color of the card and display the brand name depending on the first digits of the provided "Card Number".
- If the card brand is "American Express" mask all the "Card Number" digits but the last 5 digits.
- Add any animation to the card whenever the user "hovers" over it.

Form Team:

- Add validations to the form:
- "Card Holder" must not be empty and must only contain letters.
- "Card Number" must only contain numbers and it has to have a specific length depending on the card brand. (15 digits if AMEX, 16 digits the rest.)
- "Expiry Date" must be a valid future date.
- "Security Code" must only contain numbers and it has to have a specific length depending on the card brand. (4 digits if AMEX, 3 digits the rest.)
- Make sure to share the validation status for other teams to be used.

Submit Team:

- Disable the button if one of the fields is empty.
- Disable the button if the form is invalid. (Depends on Form Team extras.)
- Change the color of the button depending on the "success", "error" or "disabled" status.
- Add any animation to the card whenever the user "hovers" over it.
- Add any animation to the card whenever the loading indicator is rendered.
