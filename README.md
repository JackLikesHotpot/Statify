This web app was created using React and Next.js as frameworks, supported with a TypeScript backend and styled with Tailwind CSS.

By logging in with your Spotify credentials, the application displays your 50 top artists and tracks from your profile.
You can view the results of your listening history for the last 2 weeks, 4 months, and 6 months.

## Requirements

Please ensure that you add an .env.local file in the directory containing the following details:
```
SPOTIFY_CLIENT_ID=<your spotify client id here>
SPOTIFY_CLIENT_SECRET=<your spotify client secret here>
SPOTIFY_REDIRECT_URI=<your spotify redirect uri here>
```

While in the folder directory, run this command to install packages:
``` 
npm install
```

To get the project running on your local machine, run this command:
```
pnpm run dev
```

## Features:

- [x] View top artists of x period
- [x] View top tracks of x period
- [x] Tab switcher to choose period
- [x] Implement proper navigation bar
- [ ] Create appropriate styles for mobile design
- [x] Style login page
- [x] Style login button
- [x] Fix styling by increasing white space so everything isn't together
- [ ] Replace audio players with Vime.js so track page design matches artist page design better
- [x] Navbar buttons should check if currently logged in and redirect accordingly
- [x] Refine footer details
- [x] Implement alternate font
- [ ] Optimize fonts



![A preview image of the project can be seen here](https://i.imgur.com/f48KebV.png).

*Image last updated 02/11/2024.*

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Disclaimer

This project is currently hosted on [Vercel](https://statify-eta.vercel.app/) - I am aware that the website is not working as expected and is returning error 500s. I do not have immediate solutions as I need to apply for more permissions.