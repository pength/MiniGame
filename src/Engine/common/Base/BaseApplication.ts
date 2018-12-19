
module MeltEngine {

    export class BaseApplication extends BaseObject implements IApplication {

        protected mCamera: Camera = undefined;
        protected mCameraObject: GameObject = undefined;
        protected mLevel: Level = undefined;
        protected mLevelObject: GameObject = undefined;

        protected mGameObjects: Array<GameObject> = undefined;
        protected mInitFlag: boolean = false;

        constructor() { super(); }

        Init() {

            if (this.mInitFlag == true)
                return;

            this.mGameObjects = new Array<GameObject>();

            this.mCameraObject = this.CreateObject(ObjectType.OT_CAMERA) as GameObject;
            this.mLevelObject = this.CreateObject(ObjectType.OT_LEVEL) as GameObject;

            this.mInitFlag = true;
        }

        UnInit() {
            this.mInitFlag = false;
        }

        //更新引擎
        Update(fElapsedTime: number): void {
            
            for (let i = 0; i < this.mGameObjects.length; i++)  {
                this.mGameObjects[i].Update();
            }

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
        CreateObject(type: ObjectType): IGameObject {

            let gameObj: GameObject = CachePool.Instance.createObject(ObjectTypeString[type], GameObject, CacheType.CT_CLASS) as GameObject;
            switch (type) {
                case ObjectType.OT_CAMERA:
                    {
                        this.mCamera = gameObj.AddComponentByType(ComponentType.CT_CAMERA) as Camera;
                    } break;
                case ObjectType.OT_LEVEL:
                    {
                        this.mLevel = gameObj.AddComponentByType(ComponentType.CT_LEVEL) as Level;
                    } break;
            }

            if (gameObj == undefined)
                return undefined;

            gameObj.Init();

            this.mGameObjects.push(gameObj);

            return gameObj;
        }

        //删除对象.
        DestroyObject(pNode: IGameObject): void {
            if (pNode == undefined)
                return;

            let go = pNode as GameObject;

            let k = this.mGameObjects.indexOf(go);
            this.mGameObjects.splice(k, 1);

            go.UnInit();
            CachePool.Instance.destroyObject(pNode.TypeString(), go);
            pNode = undefined;
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
            return this.mLevel;
        }

        //获取摄像机管理
        //该对象不允许有多个出现,做统一管理
        GetMainCamera(): ICamera {
            return this.mCamera;
        }

        //获取声音播放管理
        //该对象不允许有多个出现,做统一管理
        GetMainSound(): ISound {
            return undefined;
        }

    }

}

MeltEngine.Engine_Init = function (): MeltEngine.IApplication {
    let app = new MeltEngine.Application();
    app.Init();
    return app;
}

MeltEngine.Engine_UnInit = function (app: MeltEngine.IApplication) {
    app.UnInit();
    app = undefined;
}
