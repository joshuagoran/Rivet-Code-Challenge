# Josh Goran submission for [Rivet Code Challenge](https://codechallenge.rivet.work/)

Notable libraries/deps:

- React
- TypeScript
- MUI
- react-hook-form-mui (a MUI-friendly wrapper for react-hook-form)
- Parcel.js (handles build, hot-reloading, some nice optimizations, and includes TypeScript support)

To run:

1. `yarn && yarn start`
2. Navigate to [`http://localhost:1234`](http://localhost:1234)

Notes:

- I used inline styling with the exception of a media query to change the layout in `ProfileForm.tsx` & `ProfileForm.css`. This could all certainly be migrated to CSS files or some CSS-in-JS solution if that were preferable.
- HTTP calls are all 'happy path' with no error handling. Snackbars would be a way to handle non-200 responses in the UI, similar to how I handled the profile save "success" message. This could be handled with some sort of global app state to allow any applicable component to trigger a UI error message, and a custom hook (`useErrorSnackbar`, for example) or React context seem like reasonable ways to handle this.
- Profile image upload support was not added. It's on the feature request list :)
