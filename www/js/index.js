/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    document.getElementById('camera').onclick = getPicture; 
}

function getPicture(event){
    var cameraOptions = {
        quality:25,
        destinationType: Camera.DestinationType.DATA_URL
    };
    navigator.camera.getPicture(successPicture,failPicture,cameraOptions);
}

function successPicture(imageData){
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64,"+imageData;
}
function failPicture(){
    alert("Algo no es vainoso")
}

// function(){
    // navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
    //     destinationType: Camera.DestinationType.DATA_URL
    // });
//     var cameraOptions = {
//         sourceType: Camera.PictureSourceType.CAMERA,
//         destinationType: Camera.DestinationType.DATA_URL,
//         saveToPhotoAlbum: true,
//         quality:25,
//         allowEdit: false
//     };

//     navigator.camera.getPicture(function(result) {
//         console.log(result);
//         document.getElementById('myImage').src = result;
//     }, function(error) {
//         console.log(error);
//     }, cameraOptions);
    
// }
// function onSuccess(imageData) {
//     var image = document.getElementById('myImage');
//     image.src = "data:image/jpeg;base64," + imageData;
// }

// function onFail(message) {
//     alert('Failed because: ' + message);
// }