This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Commodity Digital Quality Control - Frontend

This is the frontend of the Commodity Digital Quality Control (QC) application, built using React/Next.js.

## Features

- Select a crop from a list.
- Capture an image of the commodity using the device's camera.
- Send the captured image to the backend API for analysis and report generation.
- Display loading animation during processing.
- Display the generated report data upon completion.
- View a list of previously generated reports.
- View details of any selected report.

## Setup

1. Clone this repository.
2. Navigate to the `frontend` directory.
3. Install dependencies: `npm install`.
4. Start the development server: `npm run dev`.

## Technologies Used

- React
- Next.js
- Axios
- react-webcam

## Folder Structure

- `pages/`: Contains the main pages of the application.
- `components/`: Contains reusable UI components.
- `services/`: Contains utility functions.
- `images/`: Contains static assets.

## Additional Notes

- Ensure the backend server is running before using the application.


