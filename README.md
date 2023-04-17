# WebRTC Example

![Supports iOS](https://img.shields.io/badge/iOS-000.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff)
![Supports Android](https://img.shields.io/badge/Android-000.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff)

Use `react-native-webrtc` in a custom [Expo Dev Client](https://docs.expo.dev/clients/introduction/) (not available in Expo Go).

## 🚀 How to use

First of all, copy `backend/env.example` to `backend/.env` and add your SignalWire credentials to it. Run the backend by executing `node index.js` in the `backend` folder.

Start a tunnel by using `npx localtunnel --port 3000 --subdomain somesubdomain`, getting a URL like `https://somesubdomain.loca.lt`.

Copy `env.example` to `.env` and fill in the `API_URL` with the above URL plus `/token`, so for example `https://somesubdomain.loca.lt/token`.

Run `yarn ios` (Android not supported yet) and just run a call!

To dial into the app, dial `myclient@your-default-sip-domain.sip.signalwire.com` from any LAML, Relay app or a registered SIP endpoint. You can find your SIP domain in your SignalWire dashboard.

## 🏃 How to build and run locally

- [Setup development Environment](https://reactnative.dev/docs/environment-setup)
- 🍎 Build/Run on iOS `yarn ios`.
  - WebRTC doesn't work in the iOS Simulator since there is no camera. Run `expo run:ios -d` to select a connected iOS device.
- 🤖 Build/Run on Android `yarn android`.

## 📝 Notes

- [React Native WebRTC](https://github.com/react-native-webrtc/)
- [Expo Config Plugin: WebRTC](https://github.com/expo/config-plugins/tree/master/packages/react-native-webrtc)
- [Expo Development Client docs](https://docs.expo.dev/clients/introduction/)
- [Building with EAS](https://docs.expo.dev/eas/)
