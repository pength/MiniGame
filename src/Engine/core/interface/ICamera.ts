module Engine {

    //摄像头管理类
    export interface ICamera extends BaseObject {
        
        //摄像头看的位置,看的目标点
        SetLookAt(fX: number, fY: number, fZ: number): void;
        GetLookAt(): Vector3;

        //摄像头距离看的位置的长度,
        SetDistance(fDistance: number): void;
        GetDistance(): number;

        //摄像头pitch的角度,不是弧度。
        SetPitch(fPitch: number): void;
        GetPitch(): number;

        //摄像头yaw的角度,不是弧度。
        SetDirection(fDirection: number): void;
        GetDirection(): number;

        //摄像机抖动
        CameraShake(VibRange: number, StepLen: number, Times: number): void;

        //设置摄像机的fov 在正交模式下 设置 size
        SetSizeOrFov(value: number): void;

        //设置相机的设置横纵比。
        SetAspect(value: number): void;
    };

}
