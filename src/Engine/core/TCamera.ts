module Engine {

    class TCamera extends Camera {
        private mCamera: THREE.PerspectiveCamera = undefined;
        public init()  {
            this.mCamera = new THREE.PerspectiveCamera(75, this.mAspect, 0.1, 1000);
            this.mCamera.position.set(-1.8, 0.9, 2.7);
        }


    }


}