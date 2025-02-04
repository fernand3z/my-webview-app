# DevLogz - Blog & Portfolio WebView App

⬇️ [Download the latest release](https://github.com/fernand3z/my-webview-app/releases/tag/v1.0.0)

## About

DevLogz is a mobile application that provides a seamless viewing experience for a developer blog and portfolio. Built with React Native and Expo, it offers a native mobile interface for accessing blog.fernand3z.dev and fernand3z.dev.

## Features

- 📱 Native mobile experience for web content
- 🔄 Smooth navigation between blog and portfolio
- ⚡ Fast loading with progress indicator
- 🌓 Automatic dark/light mode support
- ↩️ Intuitive back button navigation
- 🔒 Safe area handling for modern devices

## Technical Stack

- React Native
- Expo SDK 52
- TypeScript
- React Navigation
- React Native WebView

## Installation

1. Download the latest APK from the releases page
2. Enable "Install from Unknown Sources" in your Android settings
3. Install the downloaded APK
4. Launch DevLogz

## Development Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/web-view-app.git

# Navigate to project directory
cd web-view-app

# Install dependencies
npm install

# Start the development server
npx expo start
```

## Usage

- Launch the app to view the blog
- Navigate to portfolio through blog links
- Use back button to:
  - Go back in web history
  - Return to blog from portfolio
  - Exit app from main blog page

## Building

```bash
# Build for Android
eas build -p android

# Build for iOS
eas build -p ios
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Blog and portfolio content by [Fernand3z](https://fernand3z.dev)
- Built with [Expo](https://expo.dev)
- Uses [React Native WebView](https://github.com/react-native-webview/react-native-webview)

---

Made with ❤️ using React Native & Expo 