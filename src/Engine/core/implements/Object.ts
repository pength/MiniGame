module Engine {

    export class Object {

        private mPosition: Vector3 = new Vector3();
        private mRotation: Vector3 = new Vector3();
        private mScale: Vector3 = new Vector3();
        private mScaleLifeTime: number = 0;

        private mRayQuery: boolean = false;
        private mRayQueryLevel: RayQueryLevel = RayQueryLevel.RQL_BEGIN;


        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   加载资源
        -----------------------------------------------------------------------------------------*/
        //加载资源
        Load(url: string): void {

        }
        //异步加载是否完成
        OnLoadAsyncEnd(): boolean {
            return false;
        }

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   Transform
        -----------------------------------------------------------------------------------------*/
        //设置对象的移动距离
        Translate(x: number, y: number, z: number): void {

        }
        //设置对象的位置
        SetPosition(x: number, y: number, z: number): void {
            this.mPosition.x = x;
            this.mPosition.y = y;
            this.mPosition.z = z;
        }
        //获取对象的坐标,值为引擎坐标
        GetPosition(): Vector3 {
            return this.mPosition;
        }
        //设置该对象的旋转，欧拉角
        SetRotation(vRotateX: number, vRotateY: number, vRotateZ: number): void {
            this.mRotation.x = vRotateX;
            this.mRotation.y = vRotateY;
            this.mRotation.z = vRotateZ;
        }
        GetRotation(): Vector3 {
            return this.mRotation;
        }
        //设置对象的缩放
        SetScale(x: number, y: number, z: number, fTime?: number): void {
            this.mScale.x = x;
            this.mScale.y = y;
            this.mScale.z = z;
            this.mScaleLifeTime = fTime;
        }
        GetScale(): Vector3 {
            return this.mScale;
        }

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   鼠标选中
        -----------------------------------------------------------------------------------------*/
        //设置是否可以被查询到
        SetRayQuery(bQuery: boolean): void {
            this.mRayQuery = bQuery;
        }
        //获取是否可以被查询到
        GetRayQuery(): boolean {
            return this.mRayQuery;
        }
        //设置查询等级
        SetRayQueryLevel(nLevel: RayQueryLevel): void {
            this.mRayQueryLevel = nLevel;
        }
        //获取查询等级
        GetRayQueryLevel(): RayQueryLevel {
            return this.mRayQueryLevel;
        }

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   绑定对象
        -----------------------------------------------------------------------------------------*/
        //绑定对象
        AttachObject(pObject: IObject, szBindName: string, bRot?: boolean): void {

        }
        //解除绑定，但是不会删除对象，需要自己手动删除
        DetachObject(pObject: IObject): void {

        }

        //获取绑定点位置
        GetLocator(szName: string, fvPosition: Vector3): void {

        }
        //取得"头顶点"在屏幕上的位置,如果返回false，表示在屏幕之外,或者没有该点
        GetLocatorScreenPoint(locator: string, pvObjPos: Vector3, fObligeHeight?: number): boolean {
            return false;
        }

    }
}