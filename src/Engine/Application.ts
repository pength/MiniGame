module Engine {

    export class Application extends BaseObject implements IApplication {

        Init() {

        }
        UnInit() {

        }

        //更新引擎
        Update(fElapsedTime: number): void {

        }

        //最后更新
        Render(): void {

        }

        //刷新窗口大小
        Resize(nWidth: number, nHeight: number): void {

        }

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   对象
        -----------------------------------------------------------------------------------------*/
        //创建对象.
        CreateObject(type: ObjectType): IObject {
            return undefined;
        }
        //删除对象.
        DestroyObject(pNode: IObject): void {

        }
        //查询Erath 对象
        GetHitObject(screenX: number, screenY: number, uiSelect?: boolean): IGameObject {
            return undefined;
        }

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   管理对象
        -----------------------------------------------------------------------------------------*/
        //获取场景管理器
        //该对象不允许有多个出现,做统一管理
        GetMainLevel(): ILevel {
            return undefined;
        }

        //获取摄像机管理
        //该对象不允许有多个出现,做统一管理
        GetMainCamera(): ICamera {
            return undefined;
        }

        //获取声音播放管理
        //该对象不允许有多个出现,做统一管理
        GetMainSound(): ISound {
            return undefined;
        }

    }
}