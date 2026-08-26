### Deciding what save button does

**Date / checkpoint:** 8/23/2026 v0.1

**Context:**
The original save button was to get/post the api the user submitted

**Options considered:**

- Keep save button as what it is, it saves the users GET / POST request
- Remove it as a save button, and have it as a GET button and have POST in the row that each api is displayed on

**Decision:**
Save button was changed to POST button, with a GET button in the row the api is on

**Why:**
Seemed like a smoother flow, doesn't make sense for a user to have the option to GET an api when they never posted anything yet. I decided to just have the user be able to get the api when it's saved in the database

**Tradeoffs:**
Requires two distinct actions now instead of one. Don't think it would've affected very much but I like how more straight forward having it as a POST button is

<!--  -->

### [Map Key Decision]

**Date / checkpoint:** 8/24/2026 v0.1

**Context:**

- Right now, the key for the map function is just he endpoint.url

## **Options considered:**

- None
- **Decision:**
- Use endpoint.url as key for now, will change later when I get a database so i can give it a unique id
  **Why:**
- Small project right now, I won't be editing or deleting any endpoints right now, even if I do it's small enough and isn't permanent
  **Tradeoffs:**
- If it does get too big and I forget to change it , it's gonna be a problem later
  ***
