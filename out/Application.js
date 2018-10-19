var Application = /** @class */ (function () {
    function Application() {
        this.mScene = undefined;
        this.mCamera = undefined;
        this.mRender = undefined;
        this.mBindLoop = undefined;
    }
    Application.prototype.init = function () {
        this.mScene = new THREE.Scene();
        this.mCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.mRender = new THREE.WebGLRenderer();
        this.mRender.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.mRender.domElement);
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        var cube = new THREE.Mesh(geometry, material);
        this.mScene.add(cube);
        this.mCamera.position.z = 5;
        this.mBindLoop = this.update.bind(this);
        //window.cancelAnimationFrame(this.aniId);
        window.requestAnimationFrame(this.mBindLoop);
    };
    Application.prototype.update = function () {
        this.mRender.render(this.mScene, this.mCamera);
        window.requestAnimationFrame(this.mBindLoop);
    };
    Application.Instance = new Application();
    return Application;
}());
//# sourceMappingURL=Application.js.map