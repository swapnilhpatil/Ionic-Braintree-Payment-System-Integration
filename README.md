"# IonicBraintreePaymentSystemIntegration" 
ReadeMe :

```bash
A.Run bellow command against Project directory 
1.   $ sudo npm install -g ionic cordova
2.   $ sudo npm i -D -E @ionic/lab

B. Add Platform ios
$ sudo ionic cordova platform add ios

```

Braintree Specific Plugin Commands

Braintree
=========================================
1. sudo npm install --save braintree-web-drop-in

//2. sudo ionic cordova plugin add cordova-plugin-braintree

//3. sudo npm install --save @ionic-native/braintree
------------------------------------------------------------------------------

KeyBoard
=============================================
ionic cordova plugin add ionic-plugin-keyboard
npm install --save @ionic-native/keyboard
-------------------------------------------------------------------------------

jquery Plugin
=================================
1. sudo npm install jquery --save
2. sudo npm install @types/jquery

----------------------------------------------------------------------------



C. To run project 
1. ionic serve --lab

D. After Adding IOS platform run project and Create .xcodeproject file using below command
1. sudo cordova build ios

E.After generating .xcodeproject file which is platfrom/ios directory, open that file in xcode.
