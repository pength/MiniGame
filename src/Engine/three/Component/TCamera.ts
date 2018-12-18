module MeltEngine {

    export class TCamera extends Camera {

        public mCamera: THREE.PerspectiveCamera = undefined;

        constructor() { super(); }

        public init() {
            this.mCamera = new THREE.PerspectiveCamera(75, this.mAspect, 0.1, 1000);
            this.mCamera.updateProjectionMatrix();
        }

        public unInit() {

        }

        update() {

            super.update();

            //this.mCamera.position.set(this.mPosition.x, this.mPosition.y, this.mPosition.z);
            //this.mCamera.lookAt(this.mLookAt.x, this.mLookAt.y, this.mLookAt.z);

        }
    }


}