## Resources:

- Figma: [Figma Link](https://www.figma.com/design/oKjzsdV9aCx3NYKGIQyIqP/App-UI?node-id=0%3A1&t=6y3risP9790p7Mcn-1)


## Library used:

Navigating
- Routing: [Expo Route](https://docs.expo.dev/router/navigating-pages/) </br>
Working like next route. Add capability of `push`, `replace`, etc. </br>
Add props `asChild` to pass the props in Link to child element. </br> </br>

Fetching
- Fetch data: [React Query](https://tanstack.com/query/latest/docs/framework/react/react-native) </br>
Also has additional feature such as checking `online status`, `development focus`, etc. <br/>
Read more on implementation [Logrocket blog](https://blog.logrocket.com/react-query-state-management-react-native/) <br/> <br/>

Persisting Data
- Store data with Async Storage in String: [React Native Async Storage](https://github.com/react-native-async-storage/async-storage) <br/>
`Please aware of the limits` [check this limitation in Android](https://react-native-async-storage.github.io/async-storage/docs/advanced/db_size)
- Store token data (sensitive data) in [Keychain](https://github.com/oblador/react-native-keychain) (iOS) and Keystore (Android) <br/>
Read more: [Medium article](https://medium.com/@shahidrogers/react-native-basics-mastering-secure-storage-solutions-071a0fc75201) 


---
## How to use the app:

### Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

### Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.
