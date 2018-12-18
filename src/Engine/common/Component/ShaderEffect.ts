module MeltEngine {

    export class ShaderEffect extends Component {
      /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   Shader 实现的效果
        -----------------------------------------------------------------------------------------*/
        //淡入 
        FadeIn(fTime: number): void  {

        }
        //淡出
        FadeOut(fTime: number): void  {

        }

        //设置被鼠标选中状态
        SetMouseHover(bHover: boolean, vColor: Vector3, crisperdingWidth?: number): void  {

        }
        
        //设置被击中的颜色
        SetHitColor(vColor: Vector3, fTime?: number): void  {

        }

        //设置边缘光颜色
        SetEdgeColor(vColor: Vector3, fTime: number, power?: number): void  {

        }
    }
}