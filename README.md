# Josh Goran submission for [Rivet Code Challenge](https://codechallenge.rivet.work/)

Notable libraries/deps:

- React
- TypeScript
- MUI
- [Parcel.js](https://parceljs.org/)
  - handles build, hot-reloading, some nice optimizations, and includes TypeScript support
- [`react-hook-form-mui`](https://www.npmjs.com/package/react-hook-form-mui)
  - a MUI-friendly wrapper for `react-hook-form`

To run:

1. `yarn && yarn start`
2. Navigate to [`http://localhost:1234`](http://localhost:1234)

Notes:

- I used inline styling (with the exception of a media query to change the layout in `ProfileForm.tsx` & `ProfileForm.css`). This could all certainly be migrated to CSS files or some CSS-in-JS solution if that were preferable. 
  - opinion: I am open-minded about styling practices, but I do tend to prefer keeping component styles as close as practical to actual components.
- HTTP calls are all 'happy path' with no error handling. Snackbars (similar to how I handled the profile save "success" message) and/or form error messages are a couple of ways to expose non-200 responses coherently in the UI. 
  - If using snackbars for various error/success messages throughout the app, it'd likely make sense to use some sort of global app state to allow any applicable component to trigger a snackbar message. A custom hook (with a name like `useSnackbar`, for example) or React context seem like reasonable ways to accomplish this (and are ways that I have worked with this sort of UI pattern in the past)
- Profile image upload support was not added. It's on the feature request list :)
