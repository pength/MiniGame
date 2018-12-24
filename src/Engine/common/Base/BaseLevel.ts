module MeltEngine {

    /**
     * 场景管理
     * @export
     * @class BaseLevel
     */
    export class BaseLevel extends LocalObject {

        /**
         * 加载完毕
         * @type {Function}
         * @memberof BaseLevel
         */
        public onLoad: Function = undefined;

        /**
         * 加载中
         * 参数百分比 0 - 100
         * @type {Function}
         * @memberof BaseLevel
         */
        public onLoading: Function = undefined;

        private oldLevelName: string = ""; //创建过的场景
        private loaded: boolean = false;

        /**
         * 异步创建场景
         * 重复场景加载,同一场景不会重复加载
         * @param {string} level_path 
         * @memberof BaseLevel
         */
        createScene(level_path: string) {

            //同一张场景重复加载
            if (this.oldLevelName == level_path) {

                //如果加载完毕直接回掉
                if (this.loaded == true && this.onLoad != undefined) {
                    this.onLoad();
                }

                //没有加载完毕不做处理
                return;
            }

            this.oldLevelName = level_path;
        }



    }
}