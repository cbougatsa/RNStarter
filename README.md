# RNSTarted

A starting point for React native projects [https://facebook.github.io/react-native/].   

## Prerequisites

This project requires the following to be installed before running the project.

* Nodejs https://nodejs.org/en/
```
brew install node
```
* Npm or yarn (preferably yarn)
```
brew install yarn
```
* Watchman (for watching changes in the filesystem)
```
brew install watchman
```
* Xcode & command line tools (from App Store, make sure it's version 9.4 or newer.)

* CocoaPods
```
sudo gem install cocoapods
```
## Run project

* Install node dependencies
```
yarn
```
* Install pods (iOs only)

```
cd ios //  change to the ios folder
pod install // install pods
```

* Run the project

``` 
yarn run ios // run this at the root of your app
```

This should start the app inside the simulator.


* Android release build 

```
    ./gradlew bundleRelease
```
The generated AAB can be found under /android/app/build/outputs/bundle/release/app-release.aab, and is ready to be uploaded to Google Play.
