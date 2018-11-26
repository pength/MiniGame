class App {
    public static readonly Instance: App = new App();

    private mScene: THREE.Scene = undefined;
   
    private mRender: THREE.WebGLRenderer = undefined;
    private mOrbitControls: THREE.OrbitControls = undefined;
    private mLight: THREE.HemisphereLight = undefined;
    private gltfLoader = undefined;

    private mWidth: number = 1024;
    private mHeight: number = 768;
    private mAspect: number = 1.33;

    private mmixer: THREE.AnimationMixer = undefined;
    private clock = new THREE.Clock();

    public init(width?: number, height?: number) {
        this.gltfLoader = new THREE.GLTFLoader();


        this.mScene = new THREE.Scene();


        this.mRender = new THREE.WebGLRenderer();

        this.resize(width, height);

        document.body.appendChild(this.mRender.domElement);
        this.mOrbitControls = new THREE.OrbitControls(this.mCamera, this.mRender.domElement);
        this.mOrbitControls.target.set(0, -0.2, -0.2);

        this.mLight = new THREE.HemisphereLight(0xbbbbff, 0x444422);
        this.mLight.position.set(0, 1, 0);
        this.mScene.add(this.mLight);

        var path = './res/scene/cube/';
        var format = '.jpg';
        var envMap = new THREE.CubeTextureLoader().load([
            path + 'px' + format, path + 'nx' + format,
            path + 'py' + format, path + 'ny' + format,
            path + 'pz' + format, path + 'nz' + format
        ]);
        this.mScene.background = envMap;


        // loader.load("/out/res/boss/anyelieshou/scene.gltf", this.onLoaded.bind(this));
        // loader.load("/out/res/boss/jijia/scene.gltf", this.onLoaded.bind(this));
        // loader.load("/out/res/boss/wushi/scene.gltf", this.onLoaded.bind(this));
        this.gltfLoader.load("./res/player/jjia/mota_b_jiqiguaishou_001.gltf", this.onLoaded.bind(this));

        // loader.load("/out/res/npc/tiejiang/scene.gltf", this.onLoaded.bind(this));

        // loader.load("/out/res/player/scene.gltf", this.onLoaded.bind(this));

        //loader.load("./res/scene/scene.gltf", this.onLoaded.bind(this));

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }

    public resize(width?: number, height?: number) {

        this.mWidth = (width == undefined ? window.innerWidth : width);
        this.mHeight = (height == undefined ? window.innerHeight : height);
        this.mAspect = this.mWidth / this.mHeight;
        this.onWindowResize();
    }

    private onWindowResize() {

        if (this.mCamera) {
            this.mCamera.aspect = this.mAspect;
            this.mCamera.updateProjectionMatrix();
        }

        if (this.mRender)
            this.mRender.setSize(this.mWidth, this.mHeight);
    }

    private onLoaded(gltf) {
        let obj = gltf.scene as THREE.Object3D;

        let animations = gltf.animations;
        if (animations && animations.length) {
            this.mmixer = new THREE.AnimationMixer(obj);
            let animtionClip:THREE.AnimationClip = animations[0];

            animtionClip.trim()
            

            let action = this.mmixer.clipAction(animations[0]);
            action.play();
        }

        this.mScene.add(obj);
    }

    public update(fDeltaTime: number) {
        this.mOrbitControls.update();
        if (this.mmixer) this.mmixer.update(this.clock.getDelta());
        this.mRender.render(this.mScene, this.mCamera);
    }

}