
# NFT as Auth Example Project

__Goal:__ Limit access to exclusive content to owners of a specified NFT.



## Tech Stack

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Etherscan API](https://docs.etherscan.io/)
- Axios
- Zustand



## Run Locally

Install dependencies

```bash
  yarn
```

### 2. Environment Variables
Create environment variables file
```bash
  cp .env .env.local
```

### 3. Run the Project

```bash
  yarn dev
```
Go to http://localhost:3000


## Component Breakdown

`pages/index.tsx`
  - Home page Component
  - imports Message.tsx and Button.tsx components
  - has useEffect that checks on page load if the user has already connected their wallet, and checks for account changes (disconnect wallet, change accounts within wallet)

`pages/api/auth.ts`
  - Next.js API file
  - Making a `POST` request to `http://localhost:3000/api/auth` will call the Audius Fetch NFT client

`helpers/store.ts`
  - This file sets up our zustand store. [Zustand](https://github.com/pmndrs/zustand) is a "small, fast and scalable bearbones state-management solution using simplified flux principles." Basically an easier, lighter-weight Redux.

`components/Button.tsx`
  - Button component that changes depending on the users actions
  - Button onClick functions for each state of the button

`components/Message.tsx`
  - Message component displays the primary text to the user, which changes depending on the users actions
