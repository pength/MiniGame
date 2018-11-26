
//组件管理
module Engine {

    export class _GameObject extends BaseObject {

        private _comMap: Array<any> = undefined;

        public constructor() {
            super();
            this._comMap = new Array<any>();
        }

        Update() {

            for (let i = 0, len = this._comMap.length; i < len; i++) {
                this._comMap[i].update();
            }

        }

        AddComponent(clas: any): any {
            if (clas == undefined) {
                console.error(" the param of AddComponent is undefined.")
                return undefined;
            }

            let obj = this.GetComponent(clas) as Component;
            if (obj != undefined && obj.isSingleton() == true) {
                return undefined;
            }


            let coObj = CachePool.Instance.createObject("", clas, CacheType.CT_CLASS);
            this._comMap.push(coObj);

            return coObj;

        }

        AddComponentByType(ct: ComponentType): Component {

            let clas: any = ClassUtil.getClass(ct);
            if (clas == undefined) {

                console.error(" add type [" + ct + "] class info to RegisterClass.ts")
                return undefined;
            }

            let coObj = CachePool.Instance.createObject("", clas, CacheType.CT_CLASS);
            this._comMap.push(coObj);

            return coObj;

        }

        RemoveComponent(obj: Component) {

            if (obj == undefined)
                return;

            let index = this._comMap.indexOf(obj);
            if (index != -1)
                this._comMap.splice(index, 1);
            else {
                console.error("Delete the obj is not Component " + obj + ". type " + obj.TypeString());
            }

        }

        GetComponent(clas: any): any {

            for (let i = 0, len = this._comMap.length; i < len; i++) {
                let obj = this._comMap[i];
                let ct = obj.Type();
                let _clas: any = ClassUtil.getClass(ct);
                if (_clas == clas)
                    return obj;
            }

            return undefined;
        }
        GetComponentByType(ct: ComponentType): Component {

            for (let i = 0, len = this._comMap.length; i < len; i++) {
                let obj = this._comMap[i];
                let _ct = obj.Type();
                if (_ct == ct)
                    return obj;
            }
            return undefined;
        }

        GetComponents<T>(clas: { new (): T }): T[] {
            let t: T[] = [];
            for (let i = 0, len = this._comMap.length; i < len; i++) {
                let obj = this._comMap[i];
                let ct = obj.Type();
                let _clas: any = ClassUtil.getClass(ct);
                if (_clas == clas)
                    t.push(obj);
            }
            return t;
        }
        GetComponentsByType(ct: ComponentType): Component[] {
            let t: Component[] = [];
            for (let i = 0, len = this._comMap.length; i < len; i++) {
                let obj = this._comMap[i];
                let _ct = obj.Type();
                if (_ct == ct)
                    t.push(obj);
            }
            return t;
        }

        GetComponentInChildren<T>(): T {
            return undefined;
        }
        GetComponentInChildrenByType(ct: ComponentType): Component {
            return undefined;
        }

        GetComponentsInChildren<T>(): T[] {
            return undefined;
        }
        GetComponentsInChildrenByType(ct: ComponentType): Component[] {
            return undefined;
        }
    }
}