module Engine {

    //场景管理
    export interface ILevel extends BaseObject {

        //播放场景动画
        PlaySceneAnim(szAniName: string, bLoop: boolean): boolean;

        //加载场景
        Load(level_url: string, preloadRes?: string[]): boolean;
        //场景加载完毕
        OnLoadEnd();
        //卸载场景
        Unload(): void;

        //加载逻辑场景,不是异步加载
        LoadLevelLogic(): boolean;

        //获取地形的高度
        GetTerrainHeight(x: number, y: number): number;

        //是否在trap 中
        InTrap(x: number, y: number): boolean;
        //trap是否触发 引擎内部逻辑处理
        TrapTrigger(begin: boolean): void;
        //是否在障碍中
        Inobstacle(x: number, y: number): boolean;

        //雾效设置
        SetFog(enable: boolean, r: number, g: number, b: number, i: number, fTime?: number): void;
    };

}

