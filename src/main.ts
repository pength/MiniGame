// 程序入口
class Main {
    private mApp:MeltEngine.IApplication = undefined;
    private mFrameLoop: any = undefined;
    constructor() {
        //初始化微信小游戏
        //Laya.MiniAdpter.init();
        this.init();
        this._init();
    }

    //程序入口
    init() {

        //初始化引擎
        this.mApp = MeltEngine.Engine_Init();
        UI.Instance.init();
        Logic.Instance.init();

    }

    _init() {
        this.mFrameLoop = this.frameLoop.bind(this);
        window.requestAnimationFrame(this.mFrameLoop);

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }

    unInit() {

        MeltEngine.Engine_UnInit(this.mApp);
    }

    private onWindowResize() {

        let width = window.innerWidth;
        let height = window.innerHeight;


        this.mApp.Resize(width, height);
    }

    private frameLoop() {

        //逻辑更新操作
        this.mApp.Update(0.1);
        UI.Instance.init();
        Logic.Instance.init();

        //渲染操作
        this.mApp.Render();

        window.requestAnimationFrame(this.mFrameLoop);
    }
}

new Main();