This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm 
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

- Link [Website link](https://technical-assignment-lanka-stay.vercel.app/)

## Technologies 

- Next.js: Used as the main frontend framework.
- React: Used to build reusable and interactive UI components.
- TypeScript: Used to improve code quality and maintainability through type safety.
- Tailwind CSS: Used for styling and implementing responsive layouts.
- Lucide React: Used for consistent and modern icons.

## Atomic design structure

- `src/component/Atoms`: Button, Container, Field and SectionHeading primitives, styled with Tailwind utilities.
- `src/component/Molecules`: composed DateFields and PropertyCard.
- `src/component/Organisms`: Hero, SearchForm, PropertyCollection, PropertyDetails and BookingDialog.
- `src/component/Templates`: StaysTemplate and EditorialTemplate compose page sections.
- `src/layout/Navbar`: Navbar.
- `src/layout/Footer`: Footer.
- `src/app`: route-level pages and the shared application layout.
- `src/data/properties.ts`: fictional property data and its TypeScript type.
- `src/lib/stays.ts`: shared search types, date validation and formatting.

## Available features

Browse the home and Explore pages, filter stays by destination and guest capacity, view property details, and try a booking request form with guest details and date validation. About and Contact pages and responsive navigation are also included.