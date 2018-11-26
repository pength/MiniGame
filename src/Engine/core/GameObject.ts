module Engine {

    //对象ID
    let objectID: number = 1;

    export class GameObject extends _GameObject implements IGameObject {
        
        // private mRayQuery: boolean = false;
        // private mRayQueryLevel: RayQueryLevel = RayQueryLevel.RQL_BEGIN;

        // /*-----------------------------------------------------------------------------------------
        // |   |   |   |   |   |   |   |   |   加载资源
        // -----------------------------------------------------------------------------------------*/
        // //加载资源
        // Load(url: string): void {
        // }
        // //异步加载是否完成
        // OnLoadAsyncEnd(): boolean {
        //     return false;
        // }


        // /*-----------------------------------------------------------------------------------------
        // |   |   |   |   |   |   |   |   |   鼠标选中
        // -----------------------------------------------------------------------------------------*/
        // //设置是否可以被查询到
        // SetRayQuery(bQuery: boolean): void {
        //     this.mRayQuery = bQuery;
        // }
        // //获取是否可以被查询到
        // GetRayQuery(): boolean {
        //     return this.mRayQuery;
        // }
        // //设置查询等级
        // SetRayQueryLevel(nLevel: RayQueryLevel): void {
        //     this.mRayQueryLevel = nLevel;
        // }
        // //获取查询等级
        // GetRayQueryLevel(): RayQueryLevel {
        //     return this.mRayQueryLevel;
        // }

        // /*-----------------------------------------------------------------------------------------
        // |   |   |   |   |   |   |   |   |   绑定对象
        // -----------------------------------------------------------------------------------------*/
        // //绑定对象
        // AttachObject(pObject: IObject, szBindName: string, bRot?: boolean): void {

        // }
        // //解除绑定，但是不会删除对象，需要自己手动删除
        // DetachObject(pObject: IObject): void {

        // }

        // //获取绑定点位置
        // GetLocator(szName: string, fvPosition: Vector3): void {

        // }
        // //取得"头顶点"在屏幕上的位置,如果返回false，表示在屏幕之外,或者没有该点
        // GetLocatorScreenPoint(locator: string, pvObjPos: Vector3, fObligeHeight?: number): boolean {
        //     return false;
        // }

    }
}