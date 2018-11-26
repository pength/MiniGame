module Engine {

    export class Transform extends Component {

        private mPosition: Vector3 = new Vector3();
        private mRotation: Vector3 = new Vector3();
        private mScale: Vector3 = new Vector3();
        private mScaleLifeTime: number = 0;

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   Transform
        -----------------------------------------------------------------------------------------*/
        //设置对象的移动距离
        Translate(x: number, y: number, z: number): void {

        }

        //设置对象的位置
        SetPosition(x: number, y: number, z: number): void {
            this.mPosition.x = x;
            this.mPosition.y = y;
            this.mPosition.z = z;
        }

        //获取对象的坐标,值为引擎坐标
        GetPosition(): Vector3 {
            return this.mPosition;
        }

        //设置该对象的旋转，欧拉角
        SetRotation(vRotateX: number, vRotateY: number, vRotateZ: number): void {
            this.mRotation.x = vRotateX;
            this.mRotation.y = vRotateY;
            this.mRotation.z = vRotateZ;
        }

        GetRotation(): Vector3 {
            return this.mRotation;
        }

        //设置对象的缩放
        SetScale(x: number, y: number, z: number, fTime?: number): void {
            this.mScale.x = x;
            this.mScale.y = y;
            this.mScale.z = z;
            this.mScaleLifeTime = fTime;
        }
        
        GetScale(): Vector3 {
            return this.mScale;
        }

    }

}