module Engine {

    export class Component extends BaseObject {

        private _destroyed = false;
        private _enable = false;                //是否启动。
        public _owner: GameObject = undefined;  //所属对象.
        private started = false;                //是否已执行start函数。
        protected _isSingleton = false;         //是否是单列

        public constructor() {
            super();

            this._destroyed = false;
        }

        //初始化组件。
        initialize(owner: IGameObject) {

            this._owner = owner as GameObject;
            this._enable = true;
            this.started = false;
            this.load(owner);
        }

        //销毁组件。
        destroy() {

            this._unload(this._owner);
            this._owner = null;
            this._destroyed = true;
        }

        load(owner: IGameObject) {

        }

        //在任意第一次更新时执行,可重写此函数。
        start(state) {

        }

        //更新组件,可重写此函数。
        update(state) {

        }

        //更新的最后阶段执行,可重写此函数。
        lateUpdate(state) {

        }

        //卸载组件时执行,可重写此函数。
        _unload(owner) {

        }

        cloneTo(dest) {

        }

        //获取是否已销毁。
        isDestroyed(): boolean {
            return this._destroyed;
        }

        //获取是否为单实例组件
        isSingleton() {
            return this._isSingleton;
        }

    }

}
