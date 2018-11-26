// 程序入口
class Main {

    private mFrameLoop: any = undefined;
    constructor() {
        //初始化微信小游戏
        //Laya.MiniAdpter.init();
        this.init();
    }

    //程序入口
    init() {

        //初始化引擎
        App.Instance.init();
        UI.Instance.init();
        Logic.Instance.init();

        this.mFrameLoop = this.frameLoop.bind(this);
        window.requestAnimationFrame(this.mFrameLoop);

    }

    unInit() {
        //Engine.destoryEngine();
    }

    private frameLoop() {

        App.Instance.update(0.1);
        UI.Instance.init();
        Logic.Instance.init();

        window.requestAnimationFrame(this.mFrameLoop);
    }
}

let g_Instance: Main = new Main();