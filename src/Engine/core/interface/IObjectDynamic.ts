module Engine {

    export interface IGameObject extends IObject {

        //改变动画的播放速度
        ChangeActionRate(fAniRate: number): void;
        //设置默认播放动画
        SetDefaultAnim(aniName?: string): void;

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   特殊效果
        -----------------------------------------------------------------------------------------*/
        //淡入 
        FadeIn(fTime: number): void;
        //淡出
        FadeOut(fTime: number): void;

        //设置被鼠标选中状态
        SetMouseHover(bHover: boolean, vColor: Vector3, crisperdingWidth?: number): void;
        //设置被击中的颜色
        SetHitColor(vColor: Vector3, fTime?: number): void
        //设置边缘光颜色
        SetEdgeColor(vColor: Vector3, fTime: number, power?: number): void;

        //改变颜色
        ChangeColor(_cp: CharacterPart, r: number, g: number, b: number, power?: number): void;
        //改变部件
        ChangePart(_cp: CharacterPart, _cp_url: string, textUrl: string): void;
    }
}