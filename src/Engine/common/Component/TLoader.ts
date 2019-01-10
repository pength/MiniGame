module MeltEngine {

    class TLoader {

        private gltfLoader: THREE.GLTFLoader = undefined;

        public init() {
            this.gltfLoader = new THREE.GLTFLoader();

        }

        load(url:string, call?:any, method?:Function)
        {

        }

    }

}