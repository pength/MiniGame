module Engine {

    export class Application {

        //更新引擎
        Update(fElapsedTime: number): void  {

        }

        //最后更新
        Render(): void  {

        }

        //刷新窗口大小
        Resize(nWidth: number, nHeight: number): void  {

        }

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   坐标
        -----------------------------------------------------------------------------------------*/

        //检查坐标是否合法
        AxisCheckValid(typeSource: AxisType, fvAxis: Vector3): boolean  {

            return false;
        }


        //坐标转换
        AxisTrans(typeSource: AxisType, fvSource: Vector3, typeTar: AxisType, fvTarget: Vector3): boolean  {

        }

        /*-----------------------------------------------------------------------------------------
        |   |   |   |   |   |   |   |   |   对象
        -----------------------------------------------------------------------------------------*/
        //创建对象.
        CreateObject(type: ObjectType): IObject  {
            return undefined;
        }
        //删除对象.
        DestroyObject(pNode: IObject): void  {

        }
        //查询Erath 对象
        GetHitObject(screenX: number, screenY: number, uiSelect?: boolean): IObject  {

        }

        /*-----------------------------------------------------------------------------------------
                                                管理对象
        -----------------------------------------------------------------------------------------*/
        //获取场景管理器
        //该对象不允许有多个出现,做统一管理
        GetLevel(): ILevel  {
            return undefined;
        }
        //获取摄像机管理
        //该对象不允许有多个出现,做统一管理
        GetCamera(): ICamera  {
            return undefined;
        }
        //获取声音播放管理
        //该对象不允许有多个出现,做统一管理
        GetSound(): ISound  {
            return undefined;
        }










        

    }
}