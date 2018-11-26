module Engine {
    class CameraShakeParam {
        constructor() {

        }

        fMaxBiasY: number;
        fMinBiasY: number;
        fBiasStep: number;
        nTimes: number;
    }
    export class Camera extends Component {

        private mLookAt: Vector3 = new Vector3();
        private mDistance: number = 0;
        private mPitch: number = 0;
        private mDirection: number = 0;
        private mFov: number = 0;
        private mAspect: number = 0;
        private mPosition: Vector3 = new Vector3();

        //摄像头看的位置,看的目标点
        SetLookAt(fX: number, fY: number, fZ: number): void {
            this.mLookAt.x = fX;
            this.mLookAt.y = fY;
            this.mLookAt.z = fZ;
        }

        GetLookAt(): Vector3 {
            return this.mLookAt;
        }

        //摄像头距离看的位置的长度,
        SetDistance(fDistance: number): void {
            this.mDistance = fDistance;
        }
        GetDistance(): number {
            return this.mDistance;
        }

        //摄像头pitch的角度,不是弧度。
        SetPitch(fPitch: number): void {
            this.mPitch = fPitch;
        }
        GetPitch(): number {
            return this.mPitch;
        }

        //摄像头yaw的角度,不是弧度。
        SetDirection(fDirection: number): void {
            this.mDirection = fDirection;
        }
        GetDirection(): number {
            return this.mDirection;
        }

        //设置摄像机的fov 在正交模式下 设置 size
        SetSizeOrFov(value: number): void {
            this.mFov = value;
        }

        //设置相机的设置横纵比。
        SetAspect(value: number): void {
            this.mAspect = value;
        }

        /*-------------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
        -------------------------------------------------------------------------------------------*/
        //震屏
        private mVibParam: CameraShakeParam;
        private mStartVib: boolean;
        private m_fCurBias: number;
        private m_fBiasStep: number;
        private m_bCurDirIsUp: boolean;
        private m_uAlreadyVibTimes: number;
        //摄像机抖动
        CameraShake(VibRange: number, StepLen: number, Times: number): void {
            if (VibRange <= 0 || Times <= 0 || StepLen <= 0)
                return;

            this.mVibParam.fMaxBiasY = VibRange;
            this.mVibParam.fMinBiasY = -VibRange;
            this.mVibParam.nTimes = Times;
            this.mVibParam.fBiasStep = StepLen;

            this.mStartVib = true;
            this.m_fCurBias = 0.0;
            this.m_fBiasStep = StepLen;
            this.m_bCurDirIsUp = true;
            this.m_uAlreadyVibTimes = 0;
        }

        UpdateCameraShake() {
            if (!this.mStartVib)
                return;

            if (this.m_uAlreadyVibTimes >= this.mVibParam.nTimes) {
                this.mStartVib = false;
                return;
            }

            this.m_fCurBias += this.m_fBiasStep;

            if (!this.m_bCurDirIsUp && this.m_fCurBias > 0) {
                this.m_bCurDirIsUp = true;
                this.m_uAlreadyVibTimes++;
            }
            else if (this.m_bCurDirIsUp && this.m_fCurBias < 0) {
                this.m_bCurDirIsUp = false;
            }

            if (this.m_fCurBias > this.mVibParam.fMaxBiasY) {
                this.m_fCurBias = this.mVibParam.fMaxBiasY;
                this.m_fBiasStep = -this.mVibParam.fBiasStep;
            }
            else if (this.m_fCurBias < this.mVibParam.fMinBiasY) {
                this.m_fCurBias = this.mVibParam.fMinBiasY;
                this.m_fBiasStep = this.mVibParam.fBiasStep;
            }

            this.mLookAt.y += this.m_fCurBias;
            this.mPosition.y += this.m_fCurBias;
        }

        update() {

            if (this.IsActive() == false)
                return;

            var y: number = this.mDistance * Math.sin(-this.mPitch * 0.0174);
            var r_xy: number = this.mDistance * Math.cos(-this.mPitch * 0.0174);
            var x: number = -r_xy * Math.sin(this.mDirection * 0.0174);
            var z: number = -r_xy * Math.cos(this.mDirection * 0.0174);

            this.mPosition.x = this.mLookAt.x + x;
            this.mPosition.y = this.mLookAt.y + y;
            this.mPosition.z = this.mLookAt.z + z;

            this.UpdateCameraShake();

        }


    }
}