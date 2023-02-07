var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 500;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);
hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
scene.add(hemiLight);
scene.background = new THREE.Color("white");

//---ECHO-DOT---
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath('files/Echo_dot/');
    mtlLoader.setPath('files/Echo_dot/');
    mtlLoader.load('ECHO_DOT.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('files/Echo_dot/');
    objLoader.load('ECHO_DOT.obj', function (object) {

        scene.add(object);

    });

});

//---ROOM---
/*var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath('files/Room/');
    mtlLoader.setPath('files/Room/');
    mtlLoader.load('Room1.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('files/Room/');
    objLoader.load('Room1.obj', function (object) {

        scene.add(object);

    });

});*/


//---CUBO-RUBIK-3x3x3---

/*
var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath('files/Rubik/');
    mtlLoader.setPath('files/Rubik/');
    mtlLoader.load('RUBIK.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('files/Rubik/');
    objLoader.load('RUBIK.obj', function (object) {

        scene.add(object);
        object.position.y -= 60;

    });

});*/


// ANIMATE
var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();