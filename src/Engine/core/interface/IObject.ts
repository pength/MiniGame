module Engine {

    export interface IObject extends BaseObject {
        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   加载资源
        -----------------------------------------------------------------------------------------*/
        //加载资源
        Load(url: string): void;
        //异步加载是否完成
        OnLoadAsyncEnd(): boolean;

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   Transform
        -----------------------------------------------------------------------------------------*/
        //设置对象的移动距离
        Translate(x: number, y: number, z: number): void;
        //设置对象的位置
        SetPosition(x: number, y: number, z: number): void;
        //获取对象的坐标,值为引擎坐标
        GetPosition(): Vector3;
        //设置该对象的旋转，欧拉角
        SetRotation(vRotateX: number, vRotateY: number, vRotateZ: number): void;
        GetRotation(): Vector3;
        //设置对象的缩放
        SetScale(x: number, y: number, z: number, fTime?: number): void;
        GetScale(): Vector3;

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   鼠标选中
        -----------------------------------------------------------------------------------------*/
        //设置是否可以被查询到
        SetRayQuery(bQuery: boolean): void;
        //获取是否可以被查询到
        GetRayQuery(): boolean;
        //设置查询等级
        SetRayQueryLevel(nLevel: RayQueryLevel): void;
        //获取查询等级
        GetRayQueryLevel(): RayQueryLevel;

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   绑定对象
        -----------------------------------------------------------------------------------------*/
        //绑定对象
        AttachObject(pObject: IObject, szBindName: string, bRot?: boolean): void;
        //解除绑定，但是不会删除对象，需要自己手动删除
        DetachObject(pObject: IObject): void;

        //获取绑定点位置
        GetLocator(szName: string, fvPosition: Vector3): void;
        //取得"头顶点"在屏幕上的位置,如果返回false，表示在屏幕之外,或者没有该点
        GetLocatorScreenPoint(locator: string, pvObjPos: Vector3, fObligeHeight?: number): boolean;
    };

}
