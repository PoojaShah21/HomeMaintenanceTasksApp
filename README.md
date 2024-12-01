Installation
Clone the repository:

git clone https://github.com/PoojaShah21/HomeMaintenanceTasksApp

cd HomeMaintenanceTasksApp
Install dependencies:

npm install

Android Setup:
Ensure Android Studio is installed and configured.
Add an Android Virtual Device (AVD) or connect a physical Android device.
Running the Application

iOS Setup (on macOS):
Install CocoaPods:
cd ios && pod install
Open the project in Xcode:
open ios/HomeMaintenanceTasksApp.xcworkspace

Start the development server:
npx react-native start
Run on Android:
npx react-native run-android
Run on iOS:
npx react-native run-ios

Project Structure
src/
├── app/screens/ # App screens (e.g., Home, AddTask, Notifications)
├── utils/ # Utility functions (e.g., notification scheduler)
├── App.js # Main app entry point
