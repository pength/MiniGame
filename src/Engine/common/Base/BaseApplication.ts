
module MeltEngine {

    export class BaseApplication extends BaseObject {

        protected mInitFlag: boolean = false;

        constructor() { super(); }

        Init() {

            if (this.mInitFlag == true)
                return;

            this.mInitFlag = true;
        }

        UnInit() {
            this.mInitFlag = false;
        }

        /**
         * 更新引擎
         * @param {number} fElapsedTime 
         * @memberof BaseApplication
         */
        Update(fElapsedTime: number): void {



            this.Render();
        }

        /**
         * 渲染
         * 
         * @memberof BaseApplication
         */
        private Render(): void {

        }

        /**
         * 刷新窗口大小
         * @param {number} nWidth 
         * @param {number} nHeight 
         * @memberof BaseApplication
         */
        Resize(nWidth: number, nHeight: number): void {

        }

    }

}
