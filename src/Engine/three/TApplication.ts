module MeltEngine {

    export class TApplication extends Application {

        private mRender: THREE.WebGLRenderer = undefined;
        private mLight: THREE.HemisphereLight = undefined;
        private mOrbitControls: THREE.OrbitControls = undefined;

        public mTCamera: TCamera = undefined;
        public mTLevel: TLevel = undefined;

        constructor() { super(); }

        public Init() {

            if (this.mInitFlag == true)
                return;

            super.Init();

            this.mTLevel = this.mLevel as TLevel;
            this.mTLevel.init();
            this.mTCamera = this.mCamera as TCamera;
            this.mTCamera.init();
            this.mRender = new THREE.WebGLRenderer();

            this.mLight = new THREE.HemisphereLight(0xbbbbff, 0x444422);
            this.mLight.position.set(0, 1, 0);
            this.mTLevel.mScene.add(this.mLight);

            this.mOrbitControls = new THREE.OrbitControls(this.mTCamera.mCamera, this.mRender.domElement);
            this.mOrbitControls.target.set(0, -0.2, -0.2);

            document.body.appendChild(this.mRender.domElement);
            this.Resize(1024,768);
            this.mInitFlag = true;
        }

        public UnInit() {

            if (this.mInitFlag == false)
                return;

            super.UnInit();
            this.mInitFlag = false;
        }

        public Resize(width: number, height: number) {
            this.mTCamera.mCamera.updateProjectionMatrix();
            this.mTCamera.mCamera.aspect = width / height;

            if (this.mRender)
                this.mRender.setSize(width, height);
        }

        public Update(fDeltaTime: number) {

            super.Update(fDeltaTime);
            this.mOrbitControls.update();




        }

        Render(): void {
            this.mRender.render(this.mTLevel.mScene, this.mTCamera.mCamera);
        }
    }
}

MeltEngine.Engine_Init = function (): MeltEngine.IApplication {
    let app = new MeltEngine.TApplication();
    app.Init()
    return app;
}

MeltEngine.Engine_UnInit = function (app: MeltEngine.IApplication) {
    app.UnInit();
    app = undefined;
}

