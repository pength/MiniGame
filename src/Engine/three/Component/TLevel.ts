module MeltEngine {

    export class TLevel extends Level {

        public mScene: THREE.Scene = undefined;

        constructor() { super(); }

        public init() {

            this.mScene = new THREE.Scene();

            var path = './res/scene/cube/';
            var format = '.jpg';
            var envMap = new THREE.CubeTextureLoader().load([
                path + 'px' + format, path + 'nx' + format,
                path + 'py' + format, path + 'ny' + format,
                path + 'pz' + format, path + 'nz' + format
            ]);
            this.mScene.background = envMap;
            let loader = new THREE.GLTFLoader();
            loader.load("./res/scene/scene02/scence.gltf", this.onLoaded.bind(this));
            loader.load("./res/player/player/mota_p01.gltf", this.onLoaded.bind(this));

        }

        private onLoaded(gltf) {
            let obj = gltf.scene as THREE.Object3D;

            this.mScene.add(obj);
        }
        // privaet mixer:THREE.AnimationMixer;
        // private _onLoaded(gltf) {
        //     let obj = gltf.scene as THREE.Object3D;

        //     this.mScene.add(obj);

        //     this.mixer = new THREE.AnimationMixer( obj );
		// 	this.mixer.clipAction( gltf.animations[ 0 ] ).play();
        // }

        
    }
}