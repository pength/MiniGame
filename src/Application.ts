class Application {
    public static readonly Instance: Application = new Application();

    private mScene: THREE.Scene = undefined;
    private mCamera: THREE.PerspectiveCamera = undefined;
    private mRender: THREE.WebGLRenderer = undefined;
    private mBindLoop: any = undefined;
    public init() {

        this.mScene = new THREE.Scene();
        this.mCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.mRender = new THREE.WebGLRenderer();
        this.mRender.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.mRender.domElement);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });

        let cube = new THREE.Mesh(geometry, material);
        this.mScene.add(cube);

        this.mCamera.position.z = 5;

        this.mBindLoop = this.update.bind(this)
        //window.cancelAnimationFrame(this.aniId);
        window.requestAnimationFrame(this.mBindLoop);
    }

    public update() {
        this.mRender.render(this.mScene, this.mCamera);

        window.requestAnimationFrame(this.mBindLoop);
    }
}