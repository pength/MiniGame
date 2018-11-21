/**
 * 
 */
module Engine {

    //对象ID
    let objectID: number = -28473647;
    /*-----------------------------------------------------------------------------------------
                                                    基础对象
    -----------------------------------------------------------------------------------------*/
    export class BaseObject {

        private hashCode: number = 0;
        protected objectType: ObjectType = ObjectType.OT_DEFAULT;
        private mData: any = undefined;
        private mLayer: number = 0;
        private mActive: boolean = true;

        //哈希值,类对象的唯一标识
        public HashCode(): number {

            this.hashCode = objectID++;
            return this.hashCode;
        }

        //类的类型
        public Type(): ObjectType {

            return this.objectType;
        }

        //外部数据设置，只是一个外部数据保存的媒介
        SetData(dwData: any): void {

            this.mData = dwData;
        }

        //获取外部保存的数据 对应 SetData
        GetData(): any {

            return this.mData;
        }

        //设置layer层级
        SetLayer(layer: number): void {

            this.mLayer = layer;
        }

        GetLayer(): number {

            return this.mLayer;
        }

        //设置该对象是否激活
        SetActive(bActive: boolean): void {

            this.mActive = bActive;
        }

        //获取对象的激活状态
        IsActive(): boolean {

            return this.mActive;
        }

    }
}