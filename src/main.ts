// 程序入口
class Main {

    private mFrameLoop: any = undefined;
    private
    constructor() {
        //初始化微信小游戏
        //Laya.MiniAdpter.init();

        //程序入口
        //初始化引擎
        Application.Instance.init(414, 736);
        UI.Instance.init();
        Logic.Instance.init();

        this.mFrameLoop = this.frameLoop.bind(this);
        window.requestAnimationFrame(this.mFrameLoop);

    }

    private frameLoop() {

        Application.Instance.update(0.1);
        UI.Instance.init();
        Logic.Instance.init();

        window.requestAnimationFrame(this.mFrameLoop);
    }
}

let g_Instance: Main = new Main();